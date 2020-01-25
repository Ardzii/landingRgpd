import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RgpdComponent } from './home/steps/rgpd/rgpd.component';
import { ContactFormComponent } from './home/steps/contact-form/contact-form.component';
import { OperationDetailsComponent } from './home/steps/operation-details/operation-details.component';
import { UploadFormComponent } from './home/steps/upload-form/upload-form.component';
import { MatToolbarModule, MatCardModule, MatStepperModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatSelectModule, MatCheckboxModule, MatDividerModule, MatSnackBarModule, MatSliderModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { NewEquipmentComponent } from './home/steps/operation-details/new-equipment/new-equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RgpdComponent,
    ContactFormComponent,
    OperationDetailsComponent,
    UploadFormComponent,
    NavbarComponent,
    NewEquipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSliderModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
