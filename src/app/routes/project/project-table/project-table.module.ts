import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTableComponent } from './project-table.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  { path: '', component: ProjectTableComponent }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ProjectTableComponent],
  exports: [
    RouterModule
  ]
})
export class ProjectTableModule { }
