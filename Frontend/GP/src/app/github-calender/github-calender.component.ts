import { Component } from '@angular/core';
declare var GitHubCalendar:any;


@Component({
  selector: 'app-github-calender',
  templateUrl: './github-calender.component.html',
  styleUrl: './github-calender.component.css'
})
export class GithubCalenderComponent {
  constructor() { }

  ngOnInit(): void {
    GitHubCalendar(".calendar", "mennamohamed0207", {
      responsive: true,
      tooltips: true
    });
  }
}
