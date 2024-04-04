import { MainComponent } from './main.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/core/shared/shared.module';


@NgModule({
  declarations: [MainComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    MainRoutingModule,
    FontAwesomeModule,
    SharedModule,
  ]
})
export class MainModule { }
