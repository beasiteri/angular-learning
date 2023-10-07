import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';
import { MyFormArrayComponent } from './my-reactive-form/my-form-array/my-form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    MyReactiveFormComponent,
    MyFormArrayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TemplateDrivenFormComponent,
    MyReactiveFormComponent,
    MyFormArrayComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
