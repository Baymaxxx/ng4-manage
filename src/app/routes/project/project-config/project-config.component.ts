import { LocalStorageService } from 'angular-web-storage';
import { Project } from './../../../shared/models/project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-config',
  templateUrl: './project-config.component.html',
  styleUrls: ['./project-config.component.scss']
})
export class ProjectConfigComponent implements OnInit {
  project: Project;
  constructor(
    private local: LocalStorageService
  ) { }

  ngOnInit() {
    // this.project.id = this.local.get('projectId');
  }

}
