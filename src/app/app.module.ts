import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AboutpageComponent } from './home/aboutpage/aboutpage.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdminComponent,
    AdminloginComponent,
    FooterComponent,
    HomepageComponent,
    AboutpageComponent,
    DashboardComponent,
    SidebarComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
