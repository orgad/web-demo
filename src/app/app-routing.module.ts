import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from 'src/register/register.component';
import { LoginComponent } from 'src/login/login.component';
import { MainComponent } from 'src/main/main.component';
import { DashboardComponent } from 'src/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo:'login',pathMatch:'full'},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'dashboard',component:DashboardComponent},
  { path:'main',component:MainComponent,loadChildren : "src/main/main.module#MainModule"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
