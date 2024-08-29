import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ExperienceService } from "./services/experience.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DataResolver implements Resolve<any> {
  constructor(private service: ExperienceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getExperience(); // Fetch data here
  }
}
