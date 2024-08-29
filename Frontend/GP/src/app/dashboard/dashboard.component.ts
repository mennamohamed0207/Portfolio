import { Component } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  BioId: any;
  //Forms
  experienceForm!: FormGroup;
  educationForm!: FormGroup;
  skillsForm!: FormGroup;
  contactForm!: FormGroup;
  aboutForm!: FormGroup;
  projectForm!: FormGroup;
  //Data
  experiences: any = [];
  educations: any = [];
  skills: any = [];
  contact: any = [];
  Bio: any = [];
  projects: any = [];
  //Fields
  fieldOfExperience = ['title', 'org', 'fromDate', 'toDate', 'description', 'tools', 'githubLink'];
  fieldOfEducation = ['college', 'department', 'university', 'degree', 'fromDate', 'toDate', 'cumulativeGrade'];
  fieldsOfSkills = ['skill', 'category'];
  fieldsOfContact = ['name', 'link'];
  fieldsOfAbout = ['about'];
  fieldsOfProjects = ['name', 'description', 'link','languages','tools','role'];



  private subscription: Subscription | undefined;
  constructor(private dataService: ExperienceService) { }

  loadExperience(): void {
    this.dataService.getExperience().subscribe((data) => {
      if (data) {
        this.experiences = data.data;
        this.getKeys();
      }
      else {
        this.experiences = [];
      }
    });
  }
  loadEducation(): void {
    this.dataService.getEducation().subscribe((data) => {
      if (data) {
        this.educations = data.data;
        this.getKeys_education();
      }
      else {
        this.educations = [];
      }
    });
  }
  loadSkills(): void {
    this.dataService.getSkills().subscribe((data) => {
      if (data) {
        this.skills = data.data;
      }
      else {
        this.skills = [];
      }
    })
  }
  loadContacts(): void {
    this.dataService.getContacts().subscribe((data) => {
      if (data) {
        this.contact = data.data;
        this.getKeysContact();
      }
      else {
        this.contact = [];
      }
    })
  }
  loadBio(): void {
    this.dataService.getAbout().subscribe((data) => {
      if (data) {
        this.Bio = data.data;
        this.getKeysAbout();
      }
     
    })
  }
  loadProjects()
  {
    this.dataService.getProjects().subscribe((data) => {
      if (data) {
        this.projects = data.data;
        this.getKeysProjects();
      }
     
    })
  }
  getKeys_education() {
    if (this.educations.length > 1) {
      this.fieldOfEducation = Object.keys(this.educations[1]);
      this.fieldOfEducation.splice(0, 1); //deleting _id
      this.fieldOfEducation.splice(this.fieldOfEducation.length - 1, 1); //deleting _v
      // console.log(this.fieldOfEducation);
    }
  }
  getKeysProjects() {
    if (this.projects.length > 1) {
      this.fieldsOfProjects = Object.keys(this.projects[1]);
      this.fieldsOfProjects.splice(0, 1); //deleting _id
      this.fieldsOfProjects.splice(this.fieldsOfProjects.length - 1, 1); //deleting _v
    }
  }
  getKeysAbout() {
    // if (this.Bio.length ) {
      this.fieldsOfAbout = Object.keys(this.Bio[0]);
      this.fieldsOfAbout.splice(0, 1); //deleting _id
      this.fieldsOfAbout.splice(this.fieldsOfAbout.length - 1, 1); //deleting _v
    // }
  }
  getKeys() {
    if (this.experiences.length > 1) {
      this.fieldOfExperience = Object.keys(this.experiences[1]);
      this.fieldOfExperience.splice(6, 1); //deleting _id
      this.fieldOfExperience.splice(0, 1); //deleting _id
      this.fieldOfExperience.splice(this.fieldOfExperience.length - 1, 1); //deleting _v
      // console.log(this.fieldOfExperience);
    }

  }
  getKeys_skills() {
    if (this.skills.length > 1) {
      this.fieldsOfSkills = Object.keys(this.skills[1]);
      this.fieldsOfSkills.splice(0, 1); //deleting _id
      this.fieldsOfSkills.splice(this.fieldsOfSkills.length - 1, 1); //deleting _v
    }
  }
  getKeysContact() {
    if (this.contact.length > 1) {
      this.fieldsOfContact = Object.keys(this.contact[1]);
      this.fieldsOfContact.splice(0, 1); //deleting _id
      this.fieldsOfContact.splice(this.fieldsOfContact.length - 1, 1); //deleting _v
    }
  }
  edit(id: string) {
    const index = this.experiences.findIndex((exp: any) => exp._id === id);
    this.experienceForm.get('title')?.setValue(this.experiences[index].title);
    this.experienceForm.get('org')?.setValue(this.experiences[index].org);
    this.experienceForm.get('fromDate')?.setValue(this.experiences[index].fromDate);
    this.experienceForm.get('toDate')?.setValue(this.experiences[index].toDate);
    this.experienceForm.get('description')?.setValue(this.experiences[index].description.toString());
    this.experienceForm.get('tools')?.setValue(this.experiences[index].tools.toString());
    this.experienceForm.get('githubLink')?.setValue(this.experiences[index].githubLink);
    console.log(this.experienceForm.value);
    

    if (index !== -1) {
      this.delete(id);
    }
  }
  edit_edu(id: string) {
    const index = this.educations.findIndex((edu: any) => edu._id === id);

    this.educationForm.get('college')?.setValue(this.educations[index].college);
    this.educationForm.get('department')?.setValue(this.educations[index].department);
    this.educationForm.get('fromDate')?.setValue(this.educations[index].fromDate);
    this.educationForm.get('toDate')?.setValue(this.educations[index].toDate);
    this.educationForm.get('university')?.setValue(this.educations[index].university);
    this.educationForm.get('degree')?.setValue(this.educations[index].degree);
    this.educationForm.get('CumulativeGrade')?.setValue(this.educations[index].CumulativeGrade);
    if (index !== -1) {
      this.dataService.editEducation(id).subscribe((data) => {
        this.delete_edu(id);
      })
    }

  }
  editSkill(id: string) {
    const index = this.skills.findIndex((edu: any) => edu._id === id);

    this.skillsForm.get('name')?.setValue(this.skills[index].name);
    this.skillsForm.get('category')?.setValue(this.skills[index].category);
    if (index !== -1) {
      this.dataService.editSkill(id).subscribe((data) => {
        this.deleteSkill(id);
        // this.loadSkills();
      })
    }
  }
  editContact(id: string) {
    const index = this.contact.findIndex((edu: any) => edu._id === id);
    this.contactForm.get('name')?.setValue(this.contact[index].name);
    this.contactForm.get('link')?.setValue(this.contact[index].link);
    if (index !== -1) {

      this.deleteContact(id);

    }
  }
  editAbout(id:string):void{
    const index=this.Bio.findIndex((bio:any)=>bio._id===id);
    this.aboutForm.get('about')?.setValue(this.Bio[index].about);
    this.BioId=id;
  
  }
  editProject(id:string):void{
    const index=this.projects.findIndex((project:any)=>project._id===id);
    this.projectForm.get('name')?.setValue(this.projects[index].name);
    this.projectForm.get('description')?.setValue(this.projects[index].description);
    this.projectForm.get('link')?.setValue(this.projects[index].link);
    this.projectForm.get('languages')?.setValue(this.projects[index].languages.toString());
    this.projectForm.get('tools')?.setValue(this.projects[index].tools.toString());
    this.projectForm.get('role')?.setValue(this.projects[index].role);
    if(index!==-1){
      this.deleteProject(id);
    }
  }
  delete(id: string) {
    console.log(id);

    this.dataService.deleteExperience(id).subscribe((data) => {
      // console.log(data);

      // Find the index of the experience with the matching id
      const index = this.experiences.findIndex((exp: any) => exp._id === id);

      // Only splice if the index is found
      if (index !== -1) {

        this.experiences.splice(index, 1);
      }
    });
  }
  deleteProject(id:string){
    this.dataService.deleteProject(id).subscribe((data)=>{
      const index=this.projects.findIndex((project:any)=>project._id===id);
      if(index!==-1){
        this.projects.splice(index,1);
      }
    })
  }
  delete_edu(id: string) {
    this.dataService.deleteEducation(id).subscribe((data) => {
      const index = this.educations.findIndex((edu: any) => edu._id === id);

      if (index !== -1) {
        this.educations.splice(index, 1);
      }
    })
  }
  deleteSkill(id: string) {
    this.dataService.deleteSkill(id).subscribe((data) => {
      const index = this.skills.findIndex((edu: any) => edu._id === id);

      if (index !== -1) {
        this.skills.splice(index, 1);
      }
    })
  }
  deleteContact(id: string) {
    this.dataService.deleteContact(id).subscribe((data) => {
      const index = this.contact.findIndex((contact: any) => contact._id === id);
      if (index !== -1) {
        this.contact.splice(index, 1);
      }

    })
  }


  ngOnInit(): void {
    this.loadExperience();
    this.loadEducation();
    this.loadSkills();
    this.loadContacts();
    this.loadBio();
    this.loadProjects();
    this.experienceForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      org: new FormControl(null, [Validators.required]),
      fromDate: new FormControl(null, [Validators.required]),
      toDate: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      tools: new FormControl(null, [Validators.required]),
      githubLink: new FormControl(null),
    })
    this.educationForm = new FormGroup({
      college: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required]),
      fromDate: new FormControl(null, [Validators.required]),
      toDate: new FormControl(null, [Validators.required]),
      university: new FormControl(null, [Validators.required]),
      degree: new FormControl(null, [Validators.required]),
      CumulativeGrade: new FormControl(null, [Validators.required])
    });
    this.skillsForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
    });
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      link: new FormControl(null, [Validators.required]),
    });
    this.aboutForm = new FormGroup({
      about: new FormControl(null, [Validators.required]),
    });
    this.projectForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      link: new FormControl(null, [Validators.required]),
      languages: new FormControl(null, [Validators.required]),
      tools: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
    })
  
  }

  onSubmit() {
    // if (this.experienceForm.valid) {
      this.dataService.addExperience(this.experienceForm).subscribe((newExperience) => {
        // Assuming the API returns the newly added experience
        this.experiences.push(newExperience.experience);
        this.experienceForm.reset(); // Optional: reset the form after submission
      });
    // }

  }
  onSubmit_edu() {
    // if(this.educationForm.valid){
    this.dataService.addEducation(this.educationForm).subscribe((newEducation) => {
      // Assuming the API returns the newly added education
      this.educations.push(newEducation.education);
      this.educationForm.reset(); // Optional: reset the form after submission
    })
  }
  onSubmitSkill() {
    this.dataService.addSkill(this.skillsForm).subscribe((newSkill) => {
      this.skills.push(newSkill.skill);
      this.skillsForm.reset();
    })
  }
  onSubmitContact() {
    this.dataService.addContact(this.contactForm).subscribe((newContact) => {
      this.contact.push(newContact.data);
      this.contactForm.reset();
    })
  }
  onSubmitAbout() {
    this.dataService.editAbout(this.BioId,this.aboutForm.value).subscribe((data)=>{
      this.Bio=data.about;
      this.loadBio();
        
    })
  }
  onSumbitProject() {
    this.dataService.addProject(this.projectForm).subscribe((newProject) => {
      this.projects.push(newProject.data);
      this.projectForm.reset();
    })
  }
}
