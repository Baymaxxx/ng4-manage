import { SettingsService } from './../core/services/settings.service';
import { Component, OnInit, OnDestroy, AfterViewChecked, DoCheck } from '@angular/core';
import { Project } from '../shared/models/project.model';
import { LocalStorageService } from '../../../node_modules/_angular-web-storage@1.0.0@angular-web-storage/core/service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewChecked, DoCheck {
  isCollapsed: boolean;
  project: Project;
  constructor(
    private setting: SettingsService,
    private local: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.changeCollapsed(this.setting.layout.collapsed);
    console.log(this.project, 1);
  }

  changeCollapsed(collapsed: boolean) {
    this.isCollapsed = collapsed;
  }

  ngDoCheck() {
    this.project = this.local.get('project');
    console.log('ngDoCheck');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }
}
