using System;

namespace Chronut.API.Models
{
    public class Calendar
    {
        public int Id { get; set; }
        public DateTime CalendarDate { get; set; }
        public string CalendarDateString { get; set; }
        public byte CalendarMonth { get; set; }
        public byte CalendarDay { get; set; }
        public Int16 CalendarYear { get; set; }
        public byte CalendarQtr { get; set; }
        public string DayName { get; set; }
        public byte DayOfWeek { get; set; }
        public byte DayOfWeekInMonth { get; set; }
        public bool IsEndsMidWeek { get; set; }
        public Int16? ExpectedHours { get; set; }
        public DateTime FirstDateOfWeek { get; set; }
        public DateTime LastDateOfWeek { get; set; }
        public string MonthName { get; set; }
        public byte WeekOfYear { get; set; }
        public bool IsLastDayOfMonth { get; set; }
        public bool IsWeekday { get; set; }
        public bool IsBusinessDat { get; set; }
        public bool IsHoliday { get; set; }
        public string HolidayDesc { get; set; }
        public bool IsPayDay { get; set; }
        public bool IsLeapYear { get; set; }
    }
}