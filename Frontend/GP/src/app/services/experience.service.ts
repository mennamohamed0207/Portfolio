import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class ExperienceService {

  getExperienceUrl = 'http://127.0.0.1:3000/api/v1/exp/';
  getaboutUrl = 'http://127.0.0.1:3000/api/v1/about/';
  getProjectsUrl = 'http://127.0.0.1:3000/api/v1/project/';
  getContactsUrl='http://127.0.0.1:3000/api/v1/contact/';
  getSkillsUrl='http://127.0.0.1:3000/api/v1/skills/';
  getEducationUrl='http://127.0.0.1:3000/api/v1/edu/';
  constructor(private http: HttpClient) {

  }
  getExperience(): Observable<any> {
    return this.http.get(this.getExperienceUrl);
  }
  getAbout(): Observable<any> {
    return this.http.get(this.getaboutUrl);
  }
  getProjects(): Observable<any> {
    return this.http.get(this.getProjectsUrl);
  }
  getContacts(): Observable<any> {
    return this.http.get(this.getContactsUrl);
  }
  getSkills(): Observable<any> {
    return this.http.get(this.getSkillsUrl);
  }
  getEducation(): Observable<any> {
    return this.http.get(this.getEducationUrl);
  }

  postExperienceUrl='http://127.0.0.1:3000/api/v1/exp';
  deleteExperienceUrl='http://127.0.0.1:3000/api/v1/exp/';
  updateExperienceUrl='http://127.0.0.1:3000/api/v1/exp/';

  addExperience(experienceForm: any): Observable<any> {
    return this.http.post(this.postExperienceUrl, experienceForm.value);
  }
  deleteExperience(id: any): Observable<any> {
    return this.http.delete(this.deleteExperienceUrl + id);
  }
  editExperience(id:any): Observable<any> {
    return this.http.put(this.updateExperienceUrl + id, id);
  }

  postEducationUrl='http://127.0.0.1:3000/api/v1/edu';
  deleteEducationUrl='http://127.0.0.1:3000/api/v1/edu/';
  updateEducationUrl='http://127.0.0.1:3000/api/v1/edu/';
  addEducation(educationForm: any): Observable<any> {
    return this.http.post(this.postEducationUrl, educationForm.value);
  }
  deleteEducation(id: any): Observable<any> {
    return this.http.delete(this.deleteEducationUrl + id);
  }
  editEducation(id:any): Observable<any> {
    return this.http.put(this.updateEducationUrl + id, id);
  }
  deleteSkillUrl='http://127.0.0.1:3000/api/v1/skills/'
  updateSkillUrl='http://127.0.0.1:3000/api/v1/skills/'
  addSkillUrl='http://127.0.0.1:3000/api/v1/skills/'
  deleteSkill(id: any): Observable<any> {
    return this.http.delete(this.deleteSkillUrl + id);
  }
  updateSkill(id:any): Observable<any> {
    return this.http.put(this.updateSkillUrl + id, id);
  }
  addSkill(skillForm: any): Observable<any> {
    return this.http.post(this.addSkillUrl, skillForm.value);
  }
  editSkill(id:string):Observable<any>{
    return this.http.put(this.updateSkillUrl+id,id)
  }
  deleteContactUrl='http://127.0.0.1:3000/api/v1/contact/'
  editContactUrl='http://127.0.0.1:3000/api/v1/contact/'
  addContactUrl='http://127.0.0.1:3000/api/v1/contact/'
  deleteContact(id:string):Observable<any>{
    return this.http.delete(this.deleteContactUrl+id)
  }
  editContact(id:string):Observable<any>{
    return this.http.put(this.editContactUrl+id,id)
  }
  addContact(contactForm:any):Observable<any>{
    return this.http.post(this.addContactUrl,contactForm.value)
  }
  editAbout(id:string,aboutForm:any):Observable<any>{
    console.log(aboutForm.value);
    
    return this.http.put(this.getaboutUrl+id,aboutForm);
  }
  deleteProject(id:string):Observable<any>{ 
    return this.http.delete(this.getProjectsUrl+id)
  }
  addProject(projectForm:any):Observable<any>{
    return this.http.post(this.getProjectsUrl,projectForm.value)
  }
}
