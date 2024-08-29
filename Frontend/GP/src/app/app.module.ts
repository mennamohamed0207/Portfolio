import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { GithubCardComponent } from './projects/github-card/github-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, InMemoryCache } from '@apollo/client';
import { GithubCalenderComponent } from './github-calender/github-calender.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SkillsComponent,
    ContactComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    FooterComponent,
    GithubCardComponent,
    GithubCalenderComponent,
    DashboardComponent,
    LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,   
    ApolloModule,
    FormsModule,
    ReactiveFormsModule 
  
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
