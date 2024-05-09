using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FormCollectorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly FormsCollectorDbContext _context;
        public RegistrationController(FormsCollectorDbContext context)
        {

            _context = context;

        }
        [HttpPost]
        public async Task<ActionResult<List<Models.User>>> CreateUser(Models.User user)
        {

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }


    }
}
