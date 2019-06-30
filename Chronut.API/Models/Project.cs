using System;
using System.Collections.Generic;

namespace Chronut.API.Models
{
    public class Project
    {
        public int Id { get; set; }
        public int AccountId { get; set; }
        public Account Account { get; set;}
        public int ClientId { get; set; }
        public Client Client { get; set; }
        public string ProjectFullName { get; set; }
        public string ProjectShortName { get; set; }
        public bool IsBillable { get; set; }
        public string BillingType { get; set; }
        public int EstimatedHours { get; set; }
        public DateTime? EstimatedCompleteDate { get; set; }
        public int? FixedPrice { get; set; }
        public bool IsPartialHoursAllowed { get; set; }
        public byte[] IconImage { get; set; }
        public bool IsActive { get; set; }
        public bool IsEnabled { get; set; }
        public ICollection<ProjectUser> Users { get; set; }
        public DateTime CreatedDatetime { get; set; }
        public int CreatedByUserId { get; set; }
        public User CreatedByUser { get; set; }
        public DateTime LastEditedDatetime { get; set; }
        public int LastEditedByUserId { get; set; }
        public User LastEditedByUser { get; set; }
    }
}