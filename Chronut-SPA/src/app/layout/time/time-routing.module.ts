import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TimeComponent } from './time.component';
import { TimeTodayComponent } from './time-today/time-today.component';
import { TimeThisMonthComponent } from './time-this-month/time-this-month.component';
import { TimeThisYearComponent } from './time-this-year/time-this-year.component';

const routes: Routes = [
    {
        path: '',
        component: TimeComponent,
        children: [
            { path: '', redirectTo: 'today', pathMatch: 'prefix' },
            { path: 'today', component: TimeTodayComponent },
            { path: 'thismonth', component: TimeThisMonthComponent },
            { path: 'thisyear', component: TimeThisYearComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TimeRoutingModule {}
