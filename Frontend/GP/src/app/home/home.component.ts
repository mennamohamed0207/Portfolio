import { Component } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dataService: ExperienceService) { }
  about :string = ""
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.dataService.getAbout().subscribe(
      (data) => {
       this.about =data.data[0].about;
      }
    )
  }
  greeting:{
    username: string,
    title: string,
    subTitle: string,
    paragragh: string,
    resumeLink: string}={
      username: "Menna Mohamed Abdelbaset",
      title: "Welcome, I'm Menna",
      subTitle: "A passionate Computer Engineer 👩‍💻",
      resumeLink: "https://drive.google.com/file/d/1wKpkFRLQBiBWQYFYoCnT--nDyHxKO7lC/view?usp=drive_link",
      paragragh:this.about
    };
    ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }

}
