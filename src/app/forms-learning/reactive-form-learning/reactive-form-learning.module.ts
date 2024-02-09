import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormLearningComponent } from './reactive-form-learning.component';

@NgModule({
  declarations: [
    ReactiveFormLearningComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class ReactiveFormLearningModule {}