import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialsModule } from './angular-materials.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AngularMaterialsModule],
  exports: [CommonModule, ReactiveFormsModule, FormsModule, AngularMaterialsModule],
})
export class SharedModule {}
