import { SettingsService } from './../core/services/settings.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/models/project.model';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isCollapsed: boolean;
  project: Project;
  constructor(
    private setting: SettingsService,
    private local: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.changeCollapsed(this.setting.layout.collapsed);
    this.project = this.local.get('project');
  }

  changeCollapsed(collapsed: boolean) {
    this.isCollapsed = collapsed;
  }
}
