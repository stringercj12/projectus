import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [HeaderComponent],
  exports:[
    HeaderComponent,
    NgbTooltipModule
  ],
  imports: [
    CommonModule,
    NgbTooltipModule
  ]
})
export class SharedModule { }
