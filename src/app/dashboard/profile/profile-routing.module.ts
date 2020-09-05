import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'profile',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'profile',
    //     component:
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
