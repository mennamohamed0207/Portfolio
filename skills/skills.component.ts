import { Component } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
interface Skill {
  _id: string;
  name: string;
  category: string;
  __v: number;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  constructor(private dataService: ExperienceService) { }
  skills: Skill[] = [
    { _id: "66b9b2e8d78432e38c3ede7c", name: "Angular", category: "Frontend", __v: 0 },
    { _id: "66b9b2e8d78432e38c3ede7c", name: "HTML", category: "Frontend", __v: 0 },
    { _id: "66b9b2e8d78432e38c3ede7c", name: "CSS", category: "Frontend", __v: 0 },
    { _id: "66b9b2e8d78432e38c3ede7c", name: "Javascript", category: "Frontend", __v: 0 },
    { _id: "66b9b30dd78432e38c3ede7e", name: "MongoDB", category: "Databases", __v: 0 },
    { _id: "66b9b31ed78432e38c3ede80", name: "MySQL", category: "Databases", __v: 0 },
    { _id: "66b9b330d78432e38c3ede82", name: "ExpressJs", category: "Backend", __v: 0 },
    { _id: "66b9b342d78432e38c3ede84", name: "Laravel", category: "Backend", __v: 0 },
    { _id: "66b9b351d78432e38c3ede86", name: "C++", category: "Programming Languages", __v: 0 },
    { _id: "66b9b35dd78432e38c3ede8a", name: "Python", category: "Programming Languages", __v: 0 },
    { _id: "66b9b364d78432e38c3ede8c", name: "Java", category: "Programming Languages", __v: 0 },
    { _id: "66b9b36dd78432e38c3ede8e", name: "C", category: "Programming Languages", __v: 0 },
    { _id: "66b9b7aa7011709774fbebfe", name: "PHP", category: "Programming Languages", __v: 0 }
  ];

  getCategories(): string[] {
    return Object.keys(this.categorizedSkills);
  }

  ngOnInit(): void {
 
    this.categorizeSkills();
  }
 public categorizedSkills: { [key: string]: Skill[] } = {};

  categorizeSkills(): void {
    this.skills.forEach(skill => {
      if (!this.categorizedSkills[skill.category]) {
        this.categorizedSkills[skill.category] = [];
      }
      this.categorizedSkills[skill.category].push(skill);
      console.log("categ");
      
      console.log(this.categorizedSkills[skill.category]);
      
    });
  }
}

