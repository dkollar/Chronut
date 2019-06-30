using System.Collections.Generic;
using Chronut.API.Models;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System.Linq;
using Chronut.API.Dtos;

namespace Chronut.API.Data
{
    public class Seed
    {
        private readonly DataContext _context;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;
        public Seed(
            DataContext context,
            UserManager<User> userManager,
            RoleManager<Role> roleManager)
        {
            _roleManager = roleManager;
            _context = context;
            _userManager = userManager;
        }

        public void SeedUsers()
        {
            if (!_userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("Data/Seed/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);
                var roles = new List<Role>
                {
                    new Role{Name = "Member"},
                    new Role{Name = "Admin"},
                    new Role{Name = "Moderator"},
                    new Role{Name = "VIP"},
                    new Role{Name = "Executive"},
                    new Role{Name = "Project Leader"},
                    new Role{Name = "JG Employee"},
                    new Role{Name = "Sub-Contractor"},
                };

                foreach (var role in roles)
                {
                    _roleManager.CreateAsync(role).Wait();
                }

                foreach (var user in users)
                {
                    user.Photos.SingleOrDefault().IsApproved = true;
                    _userManager.CreateAsync(user, "password").Wait();
                    if (user.UserName == "admin")
                    {
                        _userManager.AddToRolesAsync(user, new[] {"Admin", "Member", "JG Employee"}).Wait();
                    }
                    else
                    {
                        _userManager.AddToRolesAsync(user, new[] {"Member", "JG Employee"}).Wait();
                    }
                }

                // var adminUser = new User
                // {
                //     UserName = "Admin"
                // };

                // IdentityResult result = _userManager.CreateAsync(adminUser, "password").Result;

                // if (result.Succeeded)
                // {
                //     var admin = _userManager.FindByNameAsync("Admin").Result;
                //     _userManager.AddToRolesAsync(admin, new[] {"Admin", "Moderator", "Executive"}).Wait();
                // }
            }
        }

        public void SeedAccounts()
        {
            var accountData = System.IO.File.ReadAllText("Data/Seed/AccountSeedData.json");
            var accounts = JsonConvert.DeserializeObject<List<Account>>(accountData);
            foreach (var account in accounts)
            {
                _context.Accounts.Add(account);
            }

            _context.SaveChanges();
        }

        public void SeedClients()
        {
            var clientData = System.IO.File.ReadAllText("Data/Seed/ClientSeedData.json");
            var clients = JsonConvert.DeserializeObject<List<Client>>(clientData);
            foreach (var client in clients)
            {
                _context.Clients.Add(client);
            }

            _context.SaveChanges();
        }

        public void SeedProjects()
        {
            var projectData = System.IO.File.ReadAllText("Data/Seed/ProjectSeedData.json");
            var projects = JsonConvert.DeserializeObject<List<Project>>(projectData);
            foreach (var project in projects)
            {
                _context.Projects.Add(project);
            }

            _context.SaveChanges();
        }

        public void SeedProjectUsers()
        {
            var projectUserData = System.IO.File.ReadAllText("Data/Seed/ProjectUserSeedData.json");
            var projectUsers = JsonConvert.DeserializeObject<List<ProjectUser>>(projectUserData);
            foreach (var projectUser in projectUsers)
            {
                _context.ProjectUsers.Add(projectUser);
            }

            _context.SaveChanges();
        }

        public void SeedTimeEntries()
        {
            var timeEntryData = System.IO.File.ReadAllText("Data/Seed/TimeEntrySeedData.json");
            var timeEntries = JsonConvert.DeserializeObject<List<TimeEntry>>(timeEntryData);
            foreach (var timeEntry in timeEntries)
            {
                _context.TimeEntries.Add(timeEntry);
            }

            _context.SaveChanges();
        }

        public void SeedCalendar()
        {
            var calendarData = System.IO.File.ReadAllText("Data/Seed/CalendarSeedData.json");
            var calendars = JsonConvert.DeserializeObject<List<Calendar>>(calendarData);
            foreach (var calendar in calendars)
            {
                _context.Calendars.Add(calendar);
            }

            _context.SaveChanges();
        }
    }
}