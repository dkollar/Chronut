using System;

namespace Chronut.API.Models
{
    public class Client
    {
        public int Id { get; set; }
        public int AccountId { get; set; }
        public string FullName { get; set; }
        public string ShortName { get; set; }
        public byte[] IconImage { get; set; }
        public bool IsEnabled { get; set; }
        public DateTime CreatedDatetime { get; set; }
        public int CreatedByUserId { get; set; }
        public User CreatedByUser { get; set; }
        public DateTime LastEditedDatetime { get; set; }
        public int LastEditedByUserId { get; set; }
        public User LastEditedByUser { get; set; }
    }
}