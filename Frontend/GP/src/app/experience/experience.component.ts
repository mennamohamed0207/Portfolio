import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {

  timeline = [
    {
      "title": "IT Intern",
      "org": "Seoudi Supermarket",
      "fromDate": "Aug.2023",
      "toDate": "Sep.2023",
      "description": ["Assisted with network setup and system administration tasks within the infrastructure team.",
        "Attended sessions on web development workflow and IT helpdesk ticket system, enhancing understanding of IT operations."],
      "tools": ["Networks", "SQL", "ERP"]
    },
    {
      "title": "Backend Intern",
      "org": "Cargas",
      "fromDate": "Jul.2023",
      "toDate": "Aug.2023",
      "description": ["Contributed to the HR system website, enhancing employee experience with hotel reservations, unit resorts, coupons, and financial requests.",
        "Implemented user management, advanced payment for schools, and resort modules."],
      "githubLink": "https://github.com/mennamohamed0207/CarGas",
      "tools": ["Laravel", "MySQL"]
    },
    {
      "title": "Functional Verification Diploma Simulation Track Training",
      "org": "Siemens",
      "fromDate": "Feb.2023",
      "toDate": "Apr.2023",
      "description": [""],
      "tools": ["", ""]
    },

    {
      "title": "Trainee",
      "org": "Orange Digital Center",
      "fromDate": "Jul.2022",
      "toDate": "Oct.2022",
      "description": ["Built an AgriTech service for soil element monitoring including a protards, improving agricultural efficiency",
        "Secured first place in the Orange Summer Challenge 2022, demonstrating exceptional innovation and technical prowess."],
      "githubLink": "https://github.com/mennamohamed0207/InSoil",
      "tools": ["Flutter", " Arduino", "Fab Lab devices"]
    },


  ];
  private subscription: Subscription | undefined;

  constructor() {

  }








  ngOnInit() {

  }

  ngOnDestroy(): void {

  }
}
