import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { FormNewTeamsComponent } from './form-new-teams/form-new-teams.component';
import { ListMembersTeamsComponent } from './list-members-teams/list-members-teams.component';
import { SharedModule } from 'src/app/core/shared/shared.module';


@NgModule({
  declarations: [TeamsComponent, FormNewTeamsComponent, ListMembersTeamsComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule
  ]
})
export class TeamsModule { }
