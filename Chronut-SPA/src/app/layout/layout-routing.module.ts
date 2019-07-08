import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { MemberListResolver } from '../_resolvers/member-list.resolver';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'sandbox', pathMatch: 'prefix' },
            { path: 'sandbox', loadChildren: () => import('./sandbox/sandbox.module').then(m => m.SandboxModule) },
            { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
                data: {roles: ['Admin', 'Moderator']} }
            // { path: 'members', loadChildren: () => import('./members/members.module').then(m => m.MembersModule),
            //     resolve: {users: MemberListResolver} }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
