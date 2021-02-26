import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
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

const appRoutes: Routes = [
  {path: '', component: FitnessClubComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'trainers', component: TrainersComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'request', component: RequestFormComponent},
];

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
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
