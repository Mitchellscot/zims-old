using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using zims.Data.Entities;
using zims.Models.Authenticate;

namespace zims.Data.Repositories.Users
{
    public interface IUserRepository
    {
        AuthenticateResponse Authenticate(AuthenticateRequest model);
        IEnumerable<User> GetAll();
        User GetById(int id);
        User GetByName(string name);
    }
}
