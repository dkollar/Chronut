import { Routes, RouterModule } from '@angular/router';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberDetailResolver } from 'src/app/_resolvers/member-detail.resolver';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberEditResolver } from 'src/app/_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from 'src/app/_guards/prevent-unsaved-changes.guard';
import { NgModule } from '@angular/core';
import { MembersComponent } from './members.component';

const routes: Routes = [
    {
        path: '',
        component: MembersComponent,
        children: [
            { path: '', redirectTo: 'members', pathMatch: 'prefix' },
            { path: '/:id', component: MemberDetailComponent,
                resolve: {user: MemberDetailResolver} },
            { path: '/edit', component: MemberEditComponent,
                resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges] }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MembersRoutingModule {}
