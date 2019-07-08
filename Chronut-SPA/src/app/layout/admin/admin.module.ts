import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  BsDropdownModule,
  TabsModule,
  BsDatepickerModule,
  PaginationModule,
  ButtonsModule,
  ModalModule
} from 'ngx-bootstrap';
import { AdminRoutingModule } from './admin-routing.module';

import { DirectivesModule } from 'src/app/_directives/directives.module';
import { AdminComponent } from './admin.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { PhotoManagementComponent } from './photo-management/photo-management.component';
import { RolesModalComponent } from './roles-modal/roles-modal.component';
import { UserManagementComponent } from './user-management/user-management.component';

import { AdminService } from '../../_services/admin.service';

import { ClientsResolver } from '../../_resolvers/clients.resolver';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    DirectivesModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    AdminComponent,
    AdminPanelComponent,
    ClientManagementComponent,
    PhotoManagementComponent,
    RolesModalComponent,
    UserManagementComponent
  ],
  providers: [ClientsResolver],
  entryComponents: [RolesModalComponent]
})
export class AdminModule {}
