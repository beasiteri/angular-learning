import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpLearningComponent } from './modules/http-learning/components/http-learning.component';
import { TemplateDrivenFormLearningComponent } from './modules/template-driven-form-learning/components/template-driven-form-learning.component';
import { ReactiveFormLearningComponent } from './modules/reactive-form-learning/components/reactive-form-learning.component';
import { FormArrayLearningComponent } from './modules/reactive-form-learning/components/form-array-learning/form-array-learning.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HttpLearningComponent,
    TemplateDrivenFormLearningComponent,
    ReactiveFormLearningComponent,
    FormArrayLearningComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    HttpLearningComponent,
    TemplateDrivenFormLearningComponent,
    ReactiveFormLearningComponent,
    FormArrayLearningComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
