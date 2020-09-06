import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { FormProfileComponent } from './form-profile/form-profile.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'form-profile',
        pathMatch: 'full'
      },
      {
        path: 'form-profile',
        component: FormProfileComponent
      },
      {
        path: 'settings-notifications',
        component: FormProfileComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
