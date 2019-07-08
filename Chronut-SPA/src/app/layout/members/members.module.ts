import { NgModule } from '@angular/core';
import { MemberCardComponent } from './member-card/member-card.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberMessagesComponent } from './member-messages/member-messages.component';
import { PhotoEditorComponent } from './photo-editor/photo-editor.component';
import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from 'time-ago-pipe';
import { TabsModule, PaginationModule } from 'ngx-bootstrap';
import { NgxGalleryModule } from 'ngx-gallery';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { MemberListResolver } from 'src/app/_resolvers/member-list.resolver';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    FormsModule,
    MembersRoutingModule,
    NgxGalleryModule,
    PaginationModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [
    MembersComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    MemberListComponent,
    MemberMessagesComponent,
    PhotoEditorComponent,
    TimeAgoPipe
  ],
  providers: [
    MemberListResolver
  ]
})
export class MembersModule {}
