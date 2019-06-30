namespace Chronut.API.Helpers
{
    public class ClientParams
    {
        private const int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1;
        private int pageSize = 10;
        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value; }
        }
        
        public int? ClientId { get; set; }
        public int? AccountId { get; set; }
        public string FullName { get; set; }
        public string ShortName { get; set; }
        public bool? IsEnabled { get; set; }
        public string OrderBy { get; set; }
    }
}