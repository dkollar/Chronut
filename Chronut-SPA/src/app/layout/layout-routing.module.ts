import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'time', pathMatch: 'prefix' },
            { path: 'time', loadChildren: () => import('./time/time.module').then(m => m.TimeModule) },
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
