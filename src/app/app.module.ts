import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiabeticComponent } from './diabetic/diabetic.component';
import { HttpClientModule } from '@angular/common/http';
import { KidneyComponent } from './kidney/kidney.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ParkinsonsComponent } from './parkinsons/parkinsons.component';
import { LiverComponent } from './liver/liver.component';
import { BraintumorComponent } from './braintumor/braintumor.component';
import { PneumoniaComponent } from './pneumonia/pneumonia.component';
import { TuberculosisComponent } from './tuberculosis/tuberculosis.component';
import { AlzheimersComponent } from './alzheimers/alzheimers.component';

@NgModule({
  declarations: [
    AppComponent,
    DiabeticComponent,
    KidneyComponent,
    NavbarComponent,
    HomeComponent,
    ParkinsonsComponent,
    LiverComponent,
    BraintumorComponent,
    PneumoniaComponent,
    TuberculosisComponent,
    AlzheimersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
