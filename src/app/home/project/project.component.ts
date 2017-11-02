import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from './../../core/services/project.service';
import { Project } from './../../shared/models/project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Project[];
  constructor(private projectService: ProjectService,
              private router:Router,
              private route:ActivatedRoute) { 
                this.route.params.forEach((params: Params) => {
                  let filter = params['filter'];
                  this.filterProjects(filter);
                })
              }

  ngOnInit() {
  }
  
  filterProjects(filter: string) {
    this.projectService.filterProjects(filter)
      .then(projects => {
        this.projects = projects;
      })
  }
}
