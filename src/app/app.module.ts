import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoDirective } from 'app/directives/demo.directive';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeeServices } from 'app/employee/employee.service';
import { CommonServices } from 'app/common.services';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
const appRoutes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'employee', component: EmployeeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    DemoDirective,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    EmployeeComponent,
    EmployeedetailComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeServices, CommonServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
