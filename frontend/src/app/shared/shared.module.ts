import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * All the 'dumb' components and pipes should be implemented here.
 * These components don’t import and inject services from core
 * or other features in their constructors.
 * They should receive all data though attributes in the template of the component using them.
 * This all sums up to the fact that SharedModule doesn’t have any dependency to the rest of our application.
 *
 * It is also the perfect place to import and re-export Angular Material components.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
