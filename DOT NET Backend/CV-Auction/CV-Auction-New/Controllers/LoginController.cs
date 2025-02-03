using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Linq;
using CV_Auction_New.Models;

namespace CV_Auction.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly CvauctionContext _context;
        private readonly IConfiguration _configuration;

        public LoginController(CvauctionContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        // POST: api/Login/{Uemail}
        [HttpPost("{Uemail}")]
        public async Task<ActionResult> LoginUser(string Uemail, [FromQuery] string Upwd)
        {
            // Check if the Users DbSet is null, which means the context is not properly initialized
            if (_context.Users == null && _context.Admins == null)
            {
                return NotFound("Database context is not initialized properly.");
            }

            // Check Users
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Uemail == Uemail);
            if (user != null && VerifyPassword(Upwd, user.Upwd))
            {
                var token = GenerateJwtTokenForUser(user.Uname, "Customer");
                return Ok(new { User = user, Token = token });
            }

            // Check Admin
            var admin = await _context.Admins.FirstOrDefaultAsync(u => u.Aemail == Uemail);
            if (admin != null && VerifyPassword(Upwd, admin.Apwd))
            {
                var token = GenerateJwtTokenForUser(admin.Aemail, "Admin");
                return Ok(new { User = admin, Token = token });
            }

            // If not found or invalid credentials
            return Unauthorized("Invalid email or password.");
        }

        // Helper function to verify password (use hashed passwords in a real-world app)
        private bool VerifyPassword(string inputPassword, string storedPassword)
        {
            return inputPassword == storedPassword; // Here you should use a secure hash comparison
        }

        // Helper function to generate JWT for both Customer and Admin
        private string GenerateJwtTokenForUser(string username, string role)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SecretKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.Name, username),
                new Claim(ClaimTypes.Role, role)
            };

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(30),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
