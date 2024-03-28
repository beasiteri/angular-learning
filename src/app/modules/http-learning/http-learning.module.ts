import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpLearningComponent } from './components/http-learning.component';

@NgModule({
  declarations: [
    HttpLearningComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class HttpLearningModule { }