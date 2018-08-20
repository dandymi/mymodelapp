import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const LAYOUT_ROUTES = [
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(LAYOUT_ROUTES, {useHash: true})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
