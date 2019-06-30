using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Chronut.API.Models
{
    public class User : IdentityUser<int>
    {
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public ICollection<Photo> Photos { get; set; }
        public ICollection<Like> Likers { get; set; }
        public ICollection<Like> Likees { get; set; }
        public ICollection<Message> MessagesSent { get; set; }
        public ICollection<Message> MessagesReceived { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
        public int AccountId { get; set; }
        public Account Account { get; set; }
        public ICollection<ProjectUser> Projects { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Employer { get; set; }
        public string HowPaid { get; set; }
        public int SalaryHoursPerWeek { get; set; }
        public int ContractorCostRate { get; set; }
        public bool IsEnabled { get; set; }
        public DateTime CreatedDatetime { get; set; }
        public int? CreatedByUserId { get; set; }
        public User CreatedByUser { get; set; }
        public DateTime LastEditedDatetime { get; set; }
        public int? LastEditedByUserId { get; set; }
        public User LastEditedByUser { get; set; }
    }
}