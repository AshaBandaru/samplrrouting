import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route1Component } from './route1.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Route1Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class Route1Module { }
