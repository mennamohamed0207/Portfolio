import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { DataResolver } from './dataResolver';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "experience",
    component: ExperienceComponent,
  }, {
    path: "skills",
    component: SkillsComponent
  }, {
    path: "projects",
    component: ProjectsComponent
  }, {
    path: "education",
    component: EducationComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
