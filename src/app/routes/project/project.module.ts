import { ProjectRoutingModule } from './project.routing';
import { ProjectListComponent } from './project-list/project-list.component';
import { SharedModule } from './../../shared/shared.module';
import { ProjectComponent } from './project.component';
import { ProjectService } from './project.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    AddProjectComponent
  ],
  providers: [ProjectService],
  entryComponents: [AddProjectComponent]
})
export class ProjectModule { }
