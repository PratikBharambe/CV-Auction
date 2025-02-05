using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using CV_Auction099.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;


namespace CV_Auction099.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly cvAuction01Context _context;

        public UserController(cvAuction01Context context)
        {
            _context = context;
        }


        // GET: /api/User
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
            return await _context.Users.ToListAsync();
        }


        // GET /api/User/1
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> Get(int id)
        {
            try
            {
                var user = await _context.Users.FindAsync(id);
                if (user == null)
                {
                    return NotFound($"User with ID {id} not found."); 
                }
                return Ok(user); 
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }

        // POST /api/User
        [HttpPost]
        public async Task<ActionResult<User>> Post([FromBody] User user)
        {
            try
            {
                if (user == null)
                {
                    return BadRequest("User data is null."); 
                }
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Get), new { id = user.Uid }, user); 
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }


        // PUT /api/User/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAllVehiclesDetail(int id, User user)
        {
            try
            {
                if (id != user.Uid)
                {
                    return BadRequest("User ID mismatch.");
                }

                var existingUser = await _context.Users.FindAsync(id);
                if (existingUser == null)
                {
                    return NotFound($"User with ID {id} not found."); 
                }

                existingUser.UfirstName = user.UfirstName;
                existingUser.UlastName = user.UlastName;
                existingUser.Uname = user.Uname;
                existingUser.Role = user.Role;
                existingUser.Uemail = user.Uemail;
                existingUser.MobNo = user.MobNo;
                existingUser.PanCard = user.PanCard;
                existingUser.Address = user.Address;
                existingUser.BankAccNo = user.BankAccNo;
                existingUser.Bankname = user.Bankname;
                existingUser.BankBranch = user.BankBranch;
                existingUser.AccountHolderName = user.AccountHolderName;
                existingUser.IfscCode = user.IfscCode;
                existingUser.AccessStatus = user.AccessStatus;

                _context.Entry(existingUser).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return NoContent(); // Returns HTTP 204 if successful (no content to return)
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }


        // DELETE /api/User/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var user = await _context.Users.FindAsync(id);
                if (user == null)
                {
                    return NotFound($"User with ID {id} not found.");
                }

                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }


        [HttpGet]
        [Route("getUserId")]
        [Authorize] 
        public async Task<ActionResult<int>> GetId()
        {
            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);

                var user = await _context.Users.FindAsync(userId);
                if (user == null)
                {
                    return NotFound($"User with ID {userId} not found.");
                }

                return Ok(userId); 
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error: " + ex.Message);
            }
        }


    }
}
