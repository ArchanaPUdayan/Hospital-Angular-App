import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiententryComponent } from './patiententry/patiententry.component';
import { HospitalsEntryComponent } from './hospitals-entry/hospitals-entry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientsearchComponent } from './patientsearch/patientsearch.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { RouterModule, Routes } from '@angular/router';
const myRoute:Routes=[
  {
  path:"",
  component:PatiententryComponent
},
{
  path:"search",
  component:PatientSearchComponent
},
{
  path:"delete",
  component:PatientDeleteComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    PatiententryComponent,
    HospitalsEntryComponent,
    PatientSearchComponent,
    PatientsearchComponent,
    PatientDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function forRoot(myRoute: Routes): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

