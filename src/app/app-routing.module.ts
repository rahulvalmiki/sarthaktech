import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AboutpageComponent } from './home/aboutpage/aboutpage.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {path: "" ,
  component:HomeComponent,
 children: [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'about', component: AboutpageComponent }
],
},

  {path: "admin" ,
  component:AdminComponent,
  children: [
    { path: '', component: AdminloginComponent },
    { path: 'login', component: AdminloginComponent },
    { path: 'dashboard', component: DashboardComponent },
 ], }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
