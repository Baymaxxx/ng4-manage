import { ProjectRoutingModule } from './project.routing';
import { ProjectListComponent } from './project-list/project-list.component';
import { SharedModule } from './../../shared/shared.module';
import { ProjectComponent } from './project.component';
import { ProjectService } from './../../core/services/project.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [ProjectComponent, ProjectListComponent],
  providers: [ProjectService]
})
export class ProjectModule { }
