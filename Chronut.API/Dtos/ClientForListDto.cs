using System;

namespace Chronut.API.Dtos
{
    public class ClientForListDto
    {
        public int Id { get; set; }
        public int AccountId { get; set; }
        public string FullName { get; set; }
        public string ShortName { get; set; }
        public byte[] IconImage { get; set; }
        public bool IsEnabled { get; set; }
        public DateTime CreatedDatetime { get; set; }
        public DateTime LastEditedDatetime { get; set; }
    }
}