import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FitnessClubComponent } from './fitness-club/fitness-club.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ServicesModuleComponent } from './services-module/services-module.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestOutputComponent } from './request-form/request-output/request-output.component';
import {FormsModule} from '@angular/forms';
import { GymComponent } from './services-module/gym/gym.component';
import { GroupProgramsComponent } from './services-module/group-programs/group-programs.component';
import { ChildrensClubComponent } from './services-module/childrens-club/childrens-club.component';
import { MartialArtsComponent } from './services-module/martial-arts/martial-arts.component';
import { ExtraServicesComponent } from './services-module/extra-services/extra-services.component';
import {LoggingService} from './appServices/logging.service';
import {TrainerService} from './appServices/trainer.service';
import {RequestService} from './appServices/request.service';
import {TrainerDetailGuard} from './guard/trainer-detail.guard';
import {UnsearchedTermGuard} from './guard/unsearched-term.guard';
import {ScheduleDetailGuard} from './guard/schedule-detail.guard';
import {HttpClientModule} from '@angular/common/http';
import {HighlightPipe} from './customPipe/highlight.pipe';
import {CursivePipe} from './customPipe/cursive.pipe';


const appRoutes: Routes = [
  {path: '', component: FitnessClubComponent},
  {path: 'schedule', component: ScheduleComponent, canActivate: [ScheduleDetailGuard]},
  {path: 'services', component: ServicesModuleComponent},
  {path: 'trainers', component: TrainersComponent, canActivate: [TrainerDetailGuard]},
  {path: 'contacts', component: ContactsComponent},
  {path: 'gym', component: GymComponent},
  {path: 'group', component: GroupProgramsComponent},
  {path: 'children', component: ChildrensClubComponent},
  {path: 'martial', component: MartialArtsComponent},
  {path: 'extra', component: ExtraServicesComponent},
  {path: 'request', component: RequestFormComponent, canDeactivate: [UnsearchedTermGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FitnessClubComponent,
    ScheduleComponent,
    ServicesModuleComponent,
    TrainersComponent,
    ContactsComponent,
    RequestFormComponent,
    RequestOutputComponent,
    GymComponent,
    GroupProgramsComponent,
    ChildrensClubComponent,
    MartialArtsComponent,
    ExtraServicesComponent,
    HighlightPipe,
    CursivePipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
  providers: [LoggingService, TrainerService, RequestService, TrainerDetailGuard, UnsearchedTermGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
