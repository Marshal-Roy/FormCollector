using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FormCollectorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly FormsCollectorDbContext _context;
        public LoginController(FormsCollectorDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<List<Models.User>>> LoginUser(Models.User user)
        {
            var isUser = _context.Users.SingleOrDefault(m => m.Email == user.Email && m.Password == user.Password);
            if (isUser == null)
            {
                return BadRequest();
            }
            user.Id = isUser.Id;

            return Ok(await _context.Users.ToListAsync());
        }
    }
}
