import { LocalStorageService } from 'angular-web-storage';
import { SettingsService } from './../../core/services/settings.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../shared/models/project.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;
  @Input() hasCollapsed: boolean;
  @Input() project: Project;
  @Output() changeCollapsed: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private settings: SettingsService,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.username = this.storage.get('user').username;
  }
  toggleCollapsedSideabar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    this.changeCollapsed.emit(this.settings.layout.collapsed);
  }
}
