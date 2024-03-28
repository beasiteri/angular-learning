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
import { NavbarComponent } from './modules/routing-learning/navbar/navbar.component';
import { HomeComponent } from './modules/routing-learning/home/home.component';
import { GithubProfileComponent } from './modules/routing-learning/github-profile/github-profile.component';
import { NotFoundComponent } from './modules/routing-learning/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { GithubFollowersComponent } from './modules/routing-learning/github-followers/github-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpLearningComponent,
    TemplateDrivenFormLearningComponent,
    ReactiveFormLearningComponent,
    FormArrayLearningComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    GithubFollowersComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'http-learning', component: HttpLearningComponent },
      { path: 'followers/:username', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'template-driven-form-learning', component: TemplateDrivenFormLearningComponent },
      { path: 'reactive-form-learning', component: ReactiveFormLearningComponent },
      { path: '**', component: NotFoundComponent },
    ]),
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
