import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TemplateDrivenFormLearningComponent } from './components/template-driven-form-learning.component';

@NgModule({
  declarations: [
    TemplateDrivenFormLearningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class TemplateDrivenFormLearningModule { }
