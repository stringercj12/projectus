import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMembersTeamsComponent } from './list-members-teams/list-members-teams.component';
import { TeamsComponent } from './teams.component';


const routes: Routes = [
  {
    path: '',
    component: TeamsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list-members-teams',
        pathMatch: 'full'
      },
      {
        path: 'list-members-teams/:teamsId',
        component: ListMembersTeamsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
