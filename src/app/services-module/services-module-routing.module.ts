import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GymComponent} from './gym/gym.component';
import {GroupProgramsComponent} from './group-programs/group-programs.component';
import {ChildrensClubComponent} from './childrens-club/childrens-club.component';
import {MartialArtsComponent} from './martial-arts/martial-arts.component';
import {ExtraServicesComponent} from './extra-services/extra-services.component';

const routes: Routes = [
  {path: 'gym', component: GymComponent},
  {path: 'group', component: GroupProgramsComponent},
  {path: 'children', component: ChildrensClubComponent},
  {path: 'martial', component: MartialArtsComponent},
  {path: 'extra', component: ExtraServicesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServicesModuleRoutingModule { }
