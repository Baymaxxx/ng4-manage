import { Project } from './../../../shared/models/project.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Project[];
  selectProject: Project;
  constructor(private router: Router,
    private local: LocalStorageService,
    private projectS: ProjectService
  ) { }
  ngOnInit() {
  }
  goDetail(id: string): void {
    this.projectS.getProjectById(id)
      .then(project => {
        this.selectProject = project;
        this.local.set('project', project);
        this.router.navigate(['/view']);
      });
  }
}
