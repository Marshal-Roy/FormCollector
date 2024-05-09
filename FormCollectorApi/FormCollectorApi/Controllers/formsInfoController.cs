using FormCollectorApi.Data;
using FormCollectorApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Microsoft.VisualBasic;

namespace FormCollectorApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class formsInfoController : ControllerBase
    {
        private readonly FormsCollectorDbContext _context;
        public formsInfoController(FormsCollectorDbContext context)
        {
            _context = context;
        }
        [HttpGet]

        public async Task<ActionResult<List<Models.Information>>> GetInformation()
        {
            return Ok(await _context.Information.ToListAsync());
        }

        [HttpPost]
         public async Task<ActionResult<List<Models.Information>>>CreateInformation(Models.Information information)
        {
            
            _context.Information.Add(information);
            await _context.SaveChangesAsync();

            return Ok(await _context.Information.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Models.Information>>> UpdateInformation(Models.Information information)
        {
            var dbInformation = await _context.Information.FindAsync(information.Id);
            if(dbInformation == null)
            {
                return BadRequest("Information not found");
            }
            dbInformation.Name=information.Name;
            dbInformation.Documents=information.Documents;
            dbInformation.Deadline=information.Deadline;
            dbInformation.Link=information.Link;

            await _context.SaveChangesAsync();
            return Ok(await _context.Information.ToListAsync());

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Models.Information>>>DeleteInformation(int id)
        {
            var dbInformation = await _context.Information.FindAsync(id);
            if (dbInformation == null)
            {
                return BadRequest("Information not found");
            }
            _context.Information.Remove(dbInformation);
            await _context.SaveChangesAsync();
            return Ok(await _context.Information.ToListAsync());
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult> GetSingleInfo([FromRoute] int id)
        {
           var data= await _context.Information.FirstOrDefaultAsync(x=>x.Id==id);

            if(data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult> updateInfo(int id,Models.Information updateInfo)
        {
            var formInfo = await _context.Information.FindAsync(id);
            if(formInfo==null)
             {
                 return NotFound();
             }

            formInfo.Name=updateInfo.Name;
            formInfo.Documents=updateInfo.Documents;
            formInfo.Deadline=updateInfo.Deadline;
            formInfo.Link=updateInfo.Link;

           await _context.SaveChangesAsync();

            return Ok(formInfo);
        }
    }
    
}
