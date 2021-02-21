import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FitnessClubComponent } from './fitness-club/fitness-club.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ServicesComponent } from './services/services.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestOutputComponent } from './request-form/request-output/request-output.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FitnessClubComponent,
    ScheduleComponent,
    ServicesComponent,
    TrainersComponent,
    ContactsComponent,
    RequestFormComponent,
    RequestOutputComponent
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
