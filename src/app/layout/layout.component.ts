import { SettingsService } from './../core/services/settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed: boolean;
  constructor(
    private setting: SettingsService
  ) {
  }

  ngOnInit() {
    this.changeCollapsed(this.setting.layout.collapsed);
  }

  changeCollapsed(collapsed: boolean) {
    this.isCollapsed = collapsed;
  }
}
