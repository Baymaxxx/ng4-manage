import { SharedModule } from './../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NosideLayoutComponent } from './noside-layout/noside-layout.component';

const COMPONENT = [
  HeaderComponent,
  LayoutComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [...COMPONENT, NosideLayoutComponent],
  exports: COMPONENT
})
export class LayoutModule { }
