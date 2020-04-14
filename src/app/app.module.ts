import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnalyserCardComponent } from './components/analyser-card/analyser-card.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/shared/header/header.component';
import { CarouselCardComponent } from './components/carousel-card/carousel-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from 'primeng/dragdrop';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
 
import { AnalyserConfigComponent } from './components/analyser-config/analyser-config.component';
import { QueryParamsComponent } from './components/analyser-config/components/query-params/query-params.component';
import { MapCodesComponent } from './components/analyser-config/components/map-codes/map-codes.component';
import { CodeMapEntryComponent } from './components/analyser-config/components/map-codes/components/code-map-entry/code-map-entry.component';
import { ChecksumComponent } from './components/analyser-config/components/checksum/checksum.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'config', component: AnalyserConfigComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AnalyserCardComponent,
    HeaderComponent,
    CarouselCardComponent,
    AnalyserConfigComponent,
    QueryParamsComponent,
    MapCodesComponent,
    CodeMapEntryComponent,
    ChecksumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    CarouselModule,
    DragDropModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    AccordionModule,
    ButtonModule,
    MatDialogModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CodeMapEntryComponent]
})
export class AppModule { }
