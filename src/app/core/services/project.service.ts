import { Project } from './../../shared/models/project.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProjectService {
  constructor(private http: Http) { }
  filterProjects(filter: string): Promise<Project[]> {
    const url = 'https://www.easy-mock.com/mock/59fac4ea40e64216b2511120/joycloud';
    return this.http.get(url + '/project')
      .toPromise()
      .then(res => {
        let projects = res.json().projects;
        switch (filter) {
          case 'active':
            return projects.filter(item => item.isActive === true);
          case 'pigeonhole':
            return projects.filter(item => item.isActive === false);
        }
      })
  }
}
