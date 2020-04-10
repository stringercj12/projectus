import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [DashboardComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
  ]
})
export class DashboardModule { }
