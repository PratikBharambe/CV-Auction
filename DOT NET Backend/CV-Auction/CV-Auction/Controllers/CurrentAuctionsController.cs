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
    public class CurrentAuctionsController : ControllerBase
    {
        private readonly cvauctionContext _context;

        public CurrentAuctionsController(cvauctionContext context)
        {
            _context = context;
        }

        // GET: api/CurrentAuctions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CurrentAuction>>> GetCurrentAuctions()
        {
          if (_context.CurrentAuctions == null)
          {
              return NotFound();
          }
            return await _context.CurrentAuctions.ToListAsync();
        }

        // GET: api/CurrentAuctions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CurrentAuction>> GetCurrentAuction(int id)
        {
          if (_context.CurrentAuctions == null)
          {
              return NotFound();
          }
            var currentAuction = await _context.CurrentAuctions.FindAsync(id);

            if (currentAuction == null)
            {
                return NotFound();
            }

            return currentAuction;
        }

        // PUT: api/CurrentAuctions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCurrentAuction(int id, CurrentAuction currentAuction)
        {
            if (id != currentAuction.Vehicleid)
            {
                return BadRequest();
            }

            _context.Entry(currentAuction).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CurrentAuctionExists(id))
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

        // POST: api/CurrentAuctions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CurrentAuction>> PostCurrentAuction(CurrentAuction currentAuction)
        {
          if (_context.CurrentAuctions == null)
          {
              return Problem("Entity set 'cvauctionContext.CurrentAuctions'  is null.");
          }
            _context.CurrentAuctions.Add(currentAuction);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CurrentAuctionExists(currentAuction.Vehicleid))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCurrentAuction", new { id = currentAuction.Vehicleid }, currentAuction);
        }

        // DELETE: api/CurrentAuctions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCurrentAuction(int id)
        {
            if (_context.CurrentAuctions == null)
            {
                return NotFound();
            }
            var currentAuction = await _context.CurrentAuctions.FindAsync(id);
            if (currentAuction == null)
            {
                return NotFound();
            }

            _context.CurrentAuctions.Remove(currentAuction);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CurrentAuctionExists(int id)
        {
            return (_context.CurrentAuctions?.Any(e => e.Vehicleid == id)).GetValueOrDefault();
        }
    }
}
