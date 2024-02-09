import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormArrayLearningComponent } from './form-array-learning.component';

@NgModule({
  declarations: [
    FormArrayLearningComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class FormArrayLearningModule { }