import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { employeesComponent } from './employees/employees.component';
import { EmployeComponent } from './employe/employe.component';

@NgModule({
  declarations: [AppComponent, employeesComponent, EmployeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
