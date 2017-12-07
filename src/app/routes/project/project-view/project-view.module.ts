import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectViewComponent } from './project-view.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  { path: ':id', component: ProjectViewComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    ProjectViewComponent
  ],
  exports: [
    RouterModule
  ],
})
export class ProjectViewModule { }
