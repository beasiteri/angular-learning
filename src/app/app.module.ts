import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TemplateDrivenFormLearningComponent } from './forms-learning/template-driven-form-learning/template-driven-form-learning.component';
import { ReactiveFormLearningComponent } from './forms-learning/reactive-form-learning/reactive-form-learning.component';
import { FormArrayLearningComponent } from './forms-learning/reactive-form-learning/form-array-learning/form-array-learning.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormLearningComponent,
    ReactiveFormLearningComponent,
    FormArrayLearningComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    TemplateDrivenFormLearningComponent,
    ReactiveFormLearningComponent,
    FormArrayLearningComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
