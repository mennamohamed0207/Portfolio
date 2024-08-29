import { Component } from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';
import { ExperienceService } from '../services/experience.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects=[];
  constructor(private dataService:ExperienceService) { }

  ngOnInit(): void {
    this.dataService.getProjects().subscribe(
      (data) => {
        // console.log(data.data);
        this.projects = data.data;
      }
    )
     
   
  }
}
