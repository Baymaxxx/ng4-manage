import { Project } from './../../shared/models/project.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProjectService {
  url: string = 'https://www.easy-mock.com/mock/59fac4ea40e64216b2511120/joycloud';
  constructor(private http: Http) { }
  filterProjects(filter: string, searchText?: string): Promise<Project[]> {
    return this.http.get(this.url + '/project')
      .toPromise()
      .then(res => {
        let projects = res.json().projects;
        if (searchText) {
          projects = projects.filter(item => item.name.indexOf(searchText) > -1);
        }
        switch (filter) {
          case 'active':
            return projects.filter(item => {
              return item.isActive === true;
            });
          case 'pigeonhole':
            return projects.filter(item => {
              return item.isActive === false;
            });
        }
      });
  }

  getProjectById(id: string): Promise<Project> {
    return this.http.get(this.url + '/project')
      .toPromise()
      .then(res => {
        const projects = res.json().projects;
        const project = projects.find(item => {
          return item.id === id;
        });
        return project as Project;
      });
  }

  addProject(project: Project): Promise<Project> {
    return this.http.post(this.url + '/project', JSON.stringify(project))
      .toPromise()
      .then(() => {
        return project as Project;
      });
  }

}
