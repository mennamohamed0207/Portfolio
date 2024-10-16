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
      "_id": "66d08512c72eae712d617074",
      "title": "5G diploma",
      "org": "Siemens",
      "fromDate": "2024-08-04T00:00:00.000Z",
      "toDate": "2024-09-29T00:00:00.000Z",
      "description": [
          "There are sessions from professional experts in 5G about the core architecture of 4G and 5G and their usecases. ",
          " There is introduction about the internal tools developed by Siemens"
      ],
      "role": [],
      "tools": [
          "Networks,5G,Cloud"
      ],
      "githubLink": null,
      "__v": 0
  },
  {
      "_id": "66ce229794814b7f7f4b63c6",
      "title": "MEAN Stack Summer Training",
      "org": "NTI",
      "fromDate": "2024-07-12T00:00:00.000Z",
      "toDate": "2024-09-14T00:00:00.000Z",
      "description": [
          "Mastery of essential technologies: JavaScript, Node.js, Express.js, Angular, MongoDB. ",
          " Final project to showcase skills and build a professional portfolio. ",
          " Comprehensive guide to starting and succeeding in freelance web development."
      ],
      "role": [],
      "tools": [
          "Javascript, ",
          " Typescript, ",
          "Nodejs,",
          "ExpressJs, ",
          "Angular,",
          "MongoDB"
      ],
      "githubLink": "https://github.com/mennamohamed0207/NTI-Graduation-Project",
      "__v": 0
  },
  {
      "_id": "66d087d0c72eae712d617088",
      "title": "Summer Training PHP Trach",
      "org": "ITI",
      "fromDate": "2024-07-02T00:00:00.000Z",
      "toDate": "2024-07-29T00:00:00.000Z",
      "description": [
          "The sessions covered a wide range of topics, including hands-on materials and assignments."
      ],
      "role": [],
      "tools": [
          "HTML ",
          "CSS",
          "Javascript",
          "mysql",
          "php",
          "laravel"
      ],
      "githubLink": null,
      "__v": 0
  },
  {
      "_id": "66cc8e342a958f432d6b2688",
      "title": "IT Intern ",
      "org": "Seoudi Supermarkets",
      "fromDate": "2023-08-07T00:00:00.000Z",
      "toDate": "2023-09-08T00:00:00.000Z",
      "description": [
          "Assisted with network setup and system administration tasks within the infrastructure team. ",
          " Attended sessions on web development workflow and IT helpdesk ticket system, enhancing understanding of IT operations."
      ],
      "role": [],
      "tools": [
          "Networks,SQL,ERP"
      ],
      "githubLink": null,
      "__v": 0
  },
  {
      "_id": "66cc8e4e2a958f432d6b268c",
      "title": "Backend Intern",
      "org": "Cargas",
      "fromDate": "2023-07-16T00:00:00.000Z",
      "toDate": "2023-08-09T00:00:00.000Z",
      "description": [
          "Contributed to the HR system website, enhancing employee experience with hotel reservations, unit resorts, coupons, and financial requests. ",
          " Implemented user management, advanced payment for schools, and resort modules."
      ],
      "role": [],
      "tools": [
          "Laravel, MySQL"
      ],
      "githubLink": "https://github.com/mennamohamed0207/CarGas",
      "__v": 0
  },
  {
      "_id": "66cc90252a958f432d6b26a2",
      "title": "Functional verification diploma Simulation Track",
      "org": "Siemens",
      "fromDate": "2023-02-03T00:00:00.000Z",
      "toDate": "2023-04-17T00:00:00.000Z",
      "description": [
          "This diploma has equipped me with advanced skills and knowledge in functional safety engineering, verification, and validation. ",
          "There were Sessions about different topics: Linux Shell Programming & Make files, Verilog, VHDL, and System Verilog, Digital design concepts and FPGA, Software Quality and Testing UI Testing Concepts and Test Automation Web App Test Automation using Selenium (Including java ), Visual Testing Concept, Web Performance/Load Testing Performance Testing,and QA Processes Automation"
      ],
      "role": [],
      "tools": [
          "Selenium"
      ],
      "githubLink": null,
      "__v": 0
  },
  {
      "_id": "66cc8e5f2a958f432d6b2690",
      "title": "Software Engineer Intern",
      "org": "Orange Digital Center",
      "fromDate": "2022-07-16T00:00:00.000Z",
      "toDate": "2022-10-22T00:00:00.000Z",
      "description": [
          "Built an AgriTech service for soil element monitoring, including a prototype and mobile app for farmers to request services and view dashboards, improving agricultural efficiency. ",
          "Secured first place in the Orange Summer Challenge 2022, demonstrating exceptional innovation and technical prowess."
      ],
      "role": [],
      "tools": [
          "Flutter, Arduino, Fab lab devices"
      ],
      "githubLink": "https://github.com/mennamohamed0207/InSoil",
      "__v": 0
  }
];
  private subscription: Subscription | undefined;

  constructor() {

  }








  ngOnInit() {

  }

  ngOnDestroy(): void {

  }
}
