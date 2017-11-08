import { ProjectDetailsComponent } from './project-details.component';
import { Routes } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsRoutingModule } from './details.routing';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectDetailsRoutingModule
  ],
  declarations: [ProjectDetailsComponent]
})
export class ProjectDetailsModule { }
