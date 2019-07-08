import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { BsDatepickerModule, BsDropdownModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        // BrowserModule,
        BsDatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RegisterRoutingModule
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule {}
