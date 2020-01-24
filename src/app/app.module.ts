import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RgpdComponent } from './home/steps/rgpd/rgpd.component';
import { ContactFormComponent } from './home/steps/contact-form/contact-form.component';
import { OperationDetailsComponent } from './home/steps/operation-details/operation-details.component';
import { UploadFormComponent } from './home/steps/upload-form/upload-form.component';
import { MatToolbarModule, MatCardModule, MatStepperModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RgpdComponent,
    ContactFormComponent,
    OperationDetailsComponent,
    UploadFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
