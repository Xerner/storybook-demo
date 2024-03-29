import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotStandaloneComponent } from './not-standalone/not-standalone.component';
import { NotStandalone2Module } from './notstandalone2.module';

@NgModule({
  declarations: [
    NotStandaloneComponent,
  ],
  imports: [
    CommonModule,
    NotStandalone2Module
  ],
  exports: [
    NotStandaloneComponent,
  ],
  providers: [],
})
export class NotStandaloneModule {}
