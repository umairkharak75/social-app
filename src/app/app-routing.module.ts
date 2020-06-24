import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { PostDashboardComponent } from './dashboard/post-dashboard/post-dashboard.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [{
  path:'signup',
  component:SignupComponent,
},
{
  path:'dashboard',
  component:PostDashboardComponent,
},
{
  path:'',
  component:LoginComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
