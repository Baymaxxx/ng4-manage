import { Project } from './../../../shared/models/project.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Project[];
  selectProject: Project;
  constructor(private router: Router) { }
  ngOnInit() {
    console.log(this.projects);
  }
  goDetail(id: string): void {
    this.router.navigate(['/project', id]);
  }
}
