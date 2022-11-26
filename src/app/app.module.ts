import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatiententryComponent } from './patiententry/patiententry.component';
import { HospitalsEntryComponent } from './hospitals-entry/hospitals-entry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientsearchComponent } from './patientsearch/patientsearch.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
