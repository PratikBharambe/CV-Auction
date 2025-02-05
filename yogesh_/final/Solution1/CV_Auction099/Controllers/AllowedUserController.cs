﻿using CV_Auction099.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CV_Auction099.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AllowedUserController : ControllerBase
    {
        private readonly cvAuction01Context _context;

        public AllowedUserController(cvAuction01Context context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Approval>>> Get()
        {
            try
            {
                var approvals = await _context.Approvals.ToListAsync();
                return Ok(approvals);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        [HttpGet("{allowed_user_uid}/{vehicleid}/{auctionid}")]
        public async Task<ActionResult<Approval>> Get(int allowed_user_uid, int vehicleid, int auctionid)
        {
            try
            {
                var approval = await _context.Approvals.FindAsync(allowed_user_uid, vehicleid, auctionid);
                if (approval == null)
                {
                    return NotFound("Approval entry not found.");
                }
                return Ok(approval);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        // POST: api/Approval
        [HttpPost]
        public async Task<ActionResult<Approval>> Post([FromBody] Approval approval)
        {
            try
            {
                if (approval == null)
                {
                    return BadRequest("Approval data is null.");
                }

                _context.Approvals.Add(approval);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(Get), new
                {
                    allowed_user_uid = approval.AllowedUserUid,
                    vehicleid = approval.Vehicleid,
                    auctionid = approval.Auctionid
                }, approval);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        // PUT api/<AllowedUserController>/5
        [HttpPut("{allowed_user_uid}/{vehicleid}/{auctionid}")]
        public async Task<IActionResult> Put(int allowed_user_uid, int vehicleid, int auctionid, [FromBody] Approval approval)
        {
            try
            {
                if (allowed_user_uid != approval.AllowedUserUid || vehicleid != approval.Vehicleid || auctionid != approval.Auctionid)
                {
                    return BadRequest("Approval ID mismatch.");
                }

                var existingApproval = await _context.Approvals.FindAsync(allowed_user_uid, vehicleid, auctionid);
                if (existingApproval == null)
                {
                    return NotFound("Approval entry not found.");
                }

                existingApproval.VehicleName = approval.VehicleName;
                existingApproval.BidAmt = approval.BidAmt;
                existingApproval.WinnerId = approval.WinnerId;
                existingApproval.ApprovalStatus = approval.ApprovalStatus;
                existingApproval.ApprovalDate = approval.ApprovalDate;

                _context.Entry(existingApproval).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        // DELETE api/<AllowedUserController>/5
        [HttpDelete("{allowed_user_uid}/{vehicleid}/{auctionid}")]
        public async Task<IActionResult> Delete(int allowed_user_uid, int vehicleid, int auctionid)
        {
            try
            {
                var approval = await _context.Approvals.FindAsync(allowed_user_uid, vehicleid, auctionid);
                if (approval == null)
                {
                    return NotFound("Approval entry not found.");
                }

                _context.Approvals.Remove(approval);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }
    }
}
