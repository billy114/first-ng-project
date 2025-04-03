import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  countCompletedProjects(projects: Array<any>) : number {
    let count = 0;
    projects.forEach(project => {
      if (project.status === 'Completed') {
        count++;
      }
    })
    return count;
  }
}
