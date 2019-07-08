import { Routes, RouterModule } from '@angular/router';
import { SandboxComponent } from './sandbox.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: SandboxComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SandboxRoutingModule {}
