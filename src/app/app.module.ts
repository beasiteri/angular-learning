import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';
import { MyFormArrayComponent } from './my-reactive-form/my-form-array/my-form-array.component';
import { PostsComponent } from './http-services/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    MyReactiveFormComponent,
    MyFormArrayComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
