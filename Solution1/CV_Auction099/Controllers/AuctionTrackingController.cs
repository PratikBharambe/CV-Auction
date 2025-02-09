using CV_Auction099.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CV_Auction099.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuctionStatusTrackController : ControllerBase
    {
        private readonly cvAuction01Context _context;

        public AuctionStatusTrackController(cvAuction01Context context)
        {
            _context = context;
        }

        // GET: api/AuctionStatusTrack
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AuctionStatusTrack>>> GetAuctionStatusTracks()
        {
            return await _context.AuctionStatusTracks.ToListAsync();
        }

        // GET: api/AuctionStatusTrack/{allowedUserUid}/{vehicleId}/{auctionId}
        [HttpGet("{allowedUserUid}/{vehicleId}/{auctionId}")]
        public async Task<ActionResult<AuctionStatusTrack>> GetAuctionStatusTrack(int allowedUserUid, int vehicleId, int auctionId)
        {
            var auctionStatusTrack = await _context.AuctionStatusTracks.FindAsync(allowedUserUid, vehicleId, auctionId);

            if (auctionStatusTrack == null)
            {
                return NotFound($"AuctionStatusTrack for User {allowedUserUid}, Vehicle {vehicleId}, Auction {auctionId} not found.");
            }

            return auctionStatusTrack;
        }

        // POST: api/AuctionStatusTrack
        [HttpPost]
        public async Task<ActionResult<AuctionStatusTrack>> PostAuctionStatusTrack([FromBody] AuctionStatusTrack auctionStatusTrack)
        {
            if (auctionStatusTrack == null)
            {
                return BadRequest("AuctionStatusTrack data is null.");
            }

            _context.AuctionStatusTracks.Add(auctionStatusTrack);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAuctionStatusTrack),
                new { allowedUserUid = auctionStatusTrack.AllowedUserUid, vehicleId = auctionStatusTrack.Vehicleid, auctionId = auctionStatusTrack.Auctionid },
                auctionStatusTrack);
        }

        // PUT: api/AuctionStatusTrack/{allowedUserUid}/{vehicleId}/{auctionId}
        [HttpPut("{allowedUserUid}/{vehicleId}/{auctionId}")]
        public async Task<IActionResult> PutAuctionStatusTrack(int allowedUserUid, int vehicleId, int auctionId, [FromBody] AuctionStatusTrack auctionStatusTrack)
        {
            if (allowedUserUid != auctionStatusTrack.AllowedUserUid || vehicleId != auctionStatusTrack.Vehicleid || auctionId != auctionStatusTrack.Auctionid)
            {
                return BadRequest("AuctionStatusTrack identifier mismatch.");
            }

            var existingRecord = await _context.AuctionStatusTracks.FindAsync(allowedUserUid, vehicleId, auctionId);
            if (existingRecord == null)
            {
                return NotFound($"AuctionStatusTrack for User {allowedUserUid}, Vehicle {vehicleId}, Auction {auctionId} not found.");
            }

            existingRecord.UserBidLeft = auctionStatusTrack.UserBidLeft;
            existingRecord.PriceOffered = auctionStatusTrack.PriceOffered;
            existingRecord.HighestBidder = auctionStatusTrack.HighestBidder;
            existingRecord.AuctionEnd = auctionStatusTrack.AuctionEnd;

            _context.Entry(existingRecord).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/AuctionStatusTrack/{allowedUserUid}/{vehicleId}/{auctionId}
        [HttpDelete("{allowedUserUid}/{vehicleId}/{auctionId}")]
        public async Task<IActionResult> DeleteAuctionStatusTrack(int allowedUserUid, int vehicleId, int auctionId)
        {
            var auctionStatusTrack = await _context.AuctionStatusTracks.FindAsync(allowedUserUid, vehicleId, auctionId);
            if (auctionStatusTrack == null)
            {
                return NotFound($"AuctionStatusTrack for User {allowedUserUid}, Vehicle {vehicleId}, Auction {auctionId} not found.");
            }

            _context.AuctionStatusTracks.Remove(auctionStatusTrack);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
