import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectConfigComponent } from './project-config.component';
import { SharedModule } from '../../../shared/shared.module';
import { ProjectModule } from '../project.module';
import { ProjectMonitorComponent } from '../project-monitor/project-monitor.component';
import { AuthGuard } from '../../../core/auth.guard';

const routes: Routes = [
  {
    path: '', component: ProjectConfigComponent,
    canDeactivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ProjectConfigComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectConfigModule { }
