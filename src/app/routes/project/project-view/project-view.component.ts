import { LocalStorageService } from 'angular-web-storage';
import { Project } from './../../../shared/models/project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {
  project: Project;
  constructor(
    private local: LocalStorageService
  ) { }

  ngOnInit() {
    this.project = this.local.get('project');
    console.log(this.project);
  }

}
