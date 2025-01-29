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
    public class UsersController : ControllerBase
    {
        private readonly cvauctionContext _context;

        public UsersController(cvauctionContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
          if (_context.Users == null)
          {
              return NotFound();
          }
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/String?Upwd
        [HttpPost("{Uemail}")]
        // This HTTP GET method retrieves a user based on the provided Uemail
        public async Task<ActionResult<User>> LoginUser(string Uemail, [FromQuery]string Upwd)
        {
            // Check if the Users DbSet is null, which means the context is not properly initialized
            if (_context.Users == null)
            {
                // Return a NotFound response if the Users DbSet is null
                return NotFound();
            }

            // Use FirstOrDefaultAsync to find the user with the specified Uemail in the database
            // FirstOrDefaultAsync returns the first matching record or null if no match is found
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Uemail == Uemail);

            // If the user is not found, return a NotFound response
            if (user != null)
            {
                if (Upwd.Equals(user.Upwd))
                    return Ok(user);
            }

            // Return the user object if found, wrapped in an Ok response (indicating success)
            return NotFound();
        }


        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Uid)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        // This endpoint registers a new user by adding them to the database.
        [HttpPost]
        public async Task<ActionResult<User>> RegisterUser(User user)
        {
            // Check if the Users DbSet is null, meaning the context is not properly initialized
            if (_context.Users == null)
            {
                // Return a Problem response with an error message if Users DbSet is null
                return Problem("Entity set 'cvauctionContext.Users' is null.");
            }

            // Add the new user to the Users DbSet
            _context.Users.Add(user);

            // Asynchronously save the changes (this commits the user to the database)
            await _context.SaveChangesAsync();

            // Return a CreatedAtAction response with the newly created user,
            // along with the URL to retrieve the user by their UID (User ID)
            return CreatedAtAction("GetUser", new { id = user.Uid }, user);
        }


        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            if (_context.Users == null)
            {
                return NotFound();
            }
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return (_context.Users?.Any(e => e.Uid == id)).GetValueOrDefault();
        }
    }
}
