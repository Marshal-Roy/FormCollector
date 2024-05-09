using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FormCollectorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Users : ControllerBase
    {
        private readonly FormsCollectorDbContext _context;
        public Users(FormsCollectorDbContext context)
        {
            _context = context;
        }
        [HttpGet]

        public async Task<ActionResult<List<Models.User>>> GetUsers()
        {
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Models.User>>> CreateUser(Models.User user)
        {

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Models.User>>> UpdateUser(Models.User user)
        {
            var dbUser = await _context.Users.FindAsync(user.Id);
            if (dbUser == null)
            {
                return BadRequest("Information not found");
            }
            dbUser.Name = user.Name;
            dbUser.Email = user.Email;
            dbUser.Password = user.Password;

            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Models.User>>> DeleteUser(int id)
        {
            var dbUser = await _context.Users.FindAsync(id);
            if (dbUser == null)
            {
                return BadRequest("Information not found");
            }
            _context.Users.Remove(dbUser);
            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
        }
    }
}
