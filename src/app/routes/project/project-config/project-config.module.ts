import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectConfigComponent } from './project-config.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  { path: '', component: ProjectConfigComponent }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ProjectConfigComponent
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectConfigModule { }
