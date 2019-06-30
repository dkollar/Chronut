using System;

namespace Chronut.API.Models
{
    public class TimeEntry
    {
        public int Id { get; set; }
        public int AccountId { get; set; }
        public Account Account { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int ClientId { get; set; }
        public Client Client { get; set; }
        public int ProjectId { get; set; }
        public Project Project { get; set; }
        public DateTime EntryDate { get; set; }
        public string EntryNotes { get; set; }
        public double Hours { get; set; }
        public bool IsBillable { get; set; }
        public bool IsLateEntry { get; set; }
        public bool IsLocked { get; set; }
        public bool IsEnabled { get; set; }
        public DateTime CreatedDatetime { get; set; }
        public int CreatedByUserId { get; set; }
        public User CreatedByUser { get; set; }
        public DateTime LastEditedDatetime { get; set; }
        public int LastEditedByUserId { get; set; }
        public User LastEditedByUser { get; set; }
    }
}