import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children:[
            {
                path: 'registro',
                component: RegistroComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: '**',
                redirectTo: 'registro'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}