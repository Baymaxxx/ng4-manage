import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectMonitorComponent } from './project-monitor.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  { path: '', component: ProjectMonitorComponent }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ProjectMonitorComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectMonitorModule { }
