using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CV_Auction.Models;

namespace CV_Auction.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleDetailsController : ControllerBase
    {
        private readonly cvauctionContext _context;

        public VehicleDetailsController(cvauctionContext context)
        {
            _context = context;
        }

        // GET: api/VehicleDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VehicleDetail>>> GetVehicleDetails()
        {
          if (_context.VehicleDetails == null)
          {
              return NotFound();
          }
            return await _context.VehicleDetails.ToListAsync();
        }

        // GET: api/VehicleDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VehicleDetail>> GetVehicleDetail(int id)
        {
          if (_context.VehicleDetails == null)
          {
              return NotFound();
          }
            var vehicleDetail = await _context.VehicleDetails.FindAsync(id);

            if (vehicleDetail == null)
            {
                return NotFound();
            }

            return vehicleDetail;
        }

        // PUT: api/VehicleDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicleDetail(int id, VehicleDetail vehicleDetail)
        {
            if (id != vehicleDetail.DetailsId)
            {
                return BadRequest();
            }

            _context.Entry(vehicleDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/VehicleDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<VehicleDetail>> PostVehicleDetail(VehicleDetail vehicleDetail)
        {
          if (_context.VehicleDetails == null)
          {
              return Problem("Entity set 'cvauctionContext.VehicleDetails'  is null.");
          }
            _context.VehicleDetails.Add(vehicleDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVehicleDetail", new { id = vehicleDetail.DetailsId }, vehicleDetail);
        }

        // DELETE: api/VehicleDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVehicleDetail(int id)
        {
            if (_context.VehicleDetails == null)
            {
                return NotFound();
            }
            var vehicleDetail = await _context.VehicleDetails.FindAsync(id);
            if (vehicleDetail == null)
            {
                return NotFound();
            }

            _context.VehicleDetails.Remove(vehicleDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VehicleDetailExists(int id)
        {
            return (_context.VehicleDetails?.Any(e => e.DetailsId == id)).GetValueOrDefault();
        }
    }
}
