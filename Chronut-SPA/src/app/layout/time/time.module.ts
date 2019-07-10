import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeRoutingModule } from './time-routing.module';
import { TimeComponent } from './time.component';
import { TimeTodayComponent } from './time-today/time-today.component';
import { TimeThisMonthComponent } from './time-this-month/time-this-month.component';
import { TimeThisYearComponent } from './time-this-year/time-this-year.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimeEntryListComponent } from './time-entry-list/time-entry-list.component';
import { TimeEntryCardComponent } from './time-entry-card/time-entry-card.component';

@NgModule({
  imports: [CommonModule, TimeRoutingModule],
  declarations: [
    CalendarComponent,
    TimeComponent,
    TimeEntryCardComponent,
    TimeEntryListComponent,
    TimeTodayComponent,
    TimeThisMonthComponent,
    TimeThisYearComponent
  ]
})
export class TimeModule {}
