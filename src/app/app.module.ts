import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { EjercicioDetailComponent } from './ejercicio-detail/ejercicio-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    EjerciciosComponent,
    EjercicioDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
