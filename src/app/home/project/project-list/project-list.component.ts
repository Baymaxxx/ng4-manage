import { Project } from './../../../shared/models/project.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Project[];
  selectProject: Project;
  constructor() { }

  ngOnInit() {
    console.log(this.projects);
  }

}
