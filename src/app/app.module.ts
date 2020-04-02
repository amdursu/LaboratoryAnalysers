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
import { DragDropModule } from 'primeng/dragdrop';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AnalyserConfigComponent } from './components/analyser-config/analyser-config.component';

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
    AnalyserConfigComponent
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
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
