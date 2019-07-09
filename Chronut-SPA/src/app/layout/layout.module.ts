import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DirectivesModule } from '../_directives/directives.module';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    DirectivesModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent
  ]
})
export class LayoutModule {}
