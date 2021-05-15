using Microsoft.AspNetCore.Mvc;
using zims.Data.Repositories.Users;
using zims.Models.Authenticate;
using Microsoft.AspNetCore.Authorization;
using zims.Data.Entities;
using Microsoft.Extensions.Logging;

namespace zims.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private IUserRepository _userRepository;

        public UsersController(ILogger<UsersController> logger, IUserRepository userRepository)
        {
            this._logger = logger;
            _userRepository = userRepository;
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _userRepository.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

        [Authorize(Roles = Role.Admin)]
        [HttpGet("admin")]
        public IActionResult GetAll()
        {
            _logger.LogInformation("you are a admin");
            var users = _userRepository.GetAll();
            return Ok(users);
        }

        [Authorize(Roles = Role.User)]
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            _logger.LogInformation("you are a user");
            var users = _userRepository.GetAll();
            return Ok(users);
        }
        //             figuring this one out
        //[Authorize]
        //[HttpGet("{name}")]
        //public IActionResult GetUserInfo(string name)
        //{
        //    var user = (User)context.HttpContext.Items["User"];
        //    _logger.LogInformation("you are a user");
        //    if (!User.IsInRole(Role.Admin))
        //        return Forbid();
        //    var currentUserId = int.Parse(User.Identity.Name);
        //    var user = _userRepository.GetById(id);

        //    if (user == null)
        //        return NotFound();

        //    return Ok(user);
        //}

        [HttpGet("{id}")]
        [Authorize(Roles = Role.User)]
        public IActionResult GetById(int id)
        {
            // only allow admins to access other user records
            //var currentUser = User.Identity.Name;
            if (!User.IsInRole(Role.Admin))
                return Forbid();

            var user = _userRepository.GetById(id);

            if (user == null)
                return NotFound();

            return Ok(user);

        }
    }
}