using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CV_Auction_New.Models;

namespace CV_Auction_New.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AllVehiclesDetailsController : ControllerBase
    {
        private readonly CvauctionContext _context;

        public AllVehiclesDetailsController(CvauctionContext context)
        {
            _context = context;
        }

        // GET: api/AllVehiclesDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AllVehiclesDetail>>> GetAllVehiclesDetails()
        {
            return await _context.AllVehiclesDetails.ToListAsync();
        }

        // GET: api/AllVehiclesDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AllVehiclesDetail>> GetAllVehiclesDetail(int id)
        {
            var allVehiclesDetail = await _context.AllVehiclesDetails.FindAsync(id);

            if (allVehiclesDetail == null)
            {
                return NotFound();
            }

            return allVehiclesDetail;
        }

        // PUT: api/AllVehiclesDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAllVehiclesDetail(int id, AllVehiclesDetail allVehiclesDetail)
        {
            if (id != allVehiclesDetail.Vehicleid)
            {
                return BadRequest();
            }

            _context.Entry(allVehiclesDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AllVehiclesDetailExists(id))
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

        // POST: api/AllVehiclesDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AllVehiclesDetail>> PostAllVehiclesDetail(AllVehiclesDetail allVehiclesDetail)
        {
            _context.AllVehiclesDetails.Add(allVehiclesDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAllVehiclesDetail", new { id = allVehiclesDetail.Vehicleid }, allVehiclesDetail);
        }

        // DELETE: api/AllVehiclesDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAllVehiclesDetail(int id)
        {
            var allVehiclesDetail = await _context.AllVehiclesDetails.FindAsync(id);
            if (allVehiclesDetail == null)
            {
                return NotFound();
            }

            _context.AllVehiclesDetails.Remove(allVehiclesDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AllVehiclesDetailExists(int id)
        {
            return _context.AllVehiclesDetails.Any(e => e.Vehicleid == id);
        }
    }
}
