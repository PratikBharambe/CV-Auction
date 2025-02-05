using System.Security.Cryptography;
using CV_Auction099.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CV_Auction099.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UtilsController : ControllerBase
    {
        private readonly cvAuction01Context _context;

        public UtilsController(cvAuction01Context context)
        {
            _context = context;
        }


       

        [HttpGet("userbidleft/{id}")]
        public async Task<ActionResult<int>> GetBids(int id)
        {
            var userBidLeft = _context.AuctionStatusTracks
                                    .Where(auction => auction.AllowedUserUid == id)
                                    .OrderByDescending(auction => auction.Auctionid)
                                    .Select(auction => auction.UserBidLeft)
                                    .FirstOrDefault();

            if (userBidLeft == null)
            {
                return NotFound("No bids found for this user.");
            }

            return Ok(userBidLeft);
        }



        [HttpPost]
        [Route("/placeBid")]
        public async Task<ActionResult> PlaceBid([FromBody] BidRequest request)
        {
            if (request == null || request.BidAmount <= 0 || request.VehicleId <= 0 || request.UserId <= 0)
            {
                return BadRequest("Invalid bid request.");
            }

            try
            {
                var auctionStatus = await _context.AuctionStatusTracks
                    .Where(a => a.Vehicleid == request.VehicleId && a.Auctionid == request.AuctionId && a.AllowedUserUid == request.UserId)
                    .FirstOrDefaultAsync();

                if (auctionStatus == null)
                {
                    return NotFound("Auction not found for the specified vehicle or user.");
                }

                if (auctionStatus.UserBidLeft <= 0)
                {
                    return BadRequest("You have no remaining bids.");
                }

                var newAuctionStatus = new AuctionStatusTrack
                {
                    Auctionid = request.AuctionId,
                    AllowedUserUid = request.UserId,
                    Vehicleid = request.VehicleId,
                    PriceOffered = request.BidAmount,
                    UserBidLeft = auctionStatus.UserBidLeft - 1 
                };

                _context.AuctionStatusTracks.Add(newAuctionStatus);
                await _context.SaveChangesAsync();

                auctionStatus.UserBidLeft = auctionStatus.UserBidLeft - 1;  
                _context.AuctionStatusTracks.Update(auctionStatus);
                await _context.SaveChangesAsync();

                return Ok(new { success = true, message = "Bid placed successfully." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error. Please try again later.");
            }
        }




    }
}
