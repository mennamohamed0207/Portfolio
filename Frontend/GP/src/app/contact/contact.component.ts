import { Component } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public gmail="menamohamed0207@gmail.com";
  public github="https://github.com/mennamohamed0207/";
  public linkedin="https://www.linkedin.com/in/menna-mohamed-15ba5821b/";
  public facebook="https://www.facebook.com/profile.php?id=100004080760812";
  public phone="01013222936";
  public resume="https://drive.google.com/file/d/1NgtddzWF-ClE6diD82lTqtcnvSgvWubK/view?usp=sharing";
  constructor() {}

  ngOnInit(): void {
  }

  
}