import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotStandalone2Component } from './not-standalone-2/not-standalone2.component';

@NgModule({
  declarations: [
    NotStandalone2Component
  ],
  imports: [ CommonModule ],
  exports: [
    NotStandalone2Component
  ],
  providers: [],
})
export class NotStandalone2Module {}
