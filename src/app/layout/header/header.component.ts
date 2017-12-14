import { LocalStorageService } from 'angular-web-storage';
import { SettingsService } from './../../core/services/settings.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Project } from '../../shared/models/project.model';
import { zoomIn } from '../../shared/animates/sim-anim';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [zoomIn]
})
export class HeaderComponent implements OnInit {
  username: string;
  @Input() hasCollapsed: boolean;
  project: Project;
  @Output() changeCollapsed: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private settings: SettingsService,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.username = this.storage.get('user').username;
    this.project = this.storage.get('project');
  }

  toggleCollapsedSideabar() {
    this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    this.changeCollapsed.emit(this.settings.layout.collapsed);
  }
}
