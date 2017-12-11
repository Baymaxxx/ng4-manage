import { Router } from '@angular/router';
import { MenuService, Menu } from './../../core/services/menu.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isCollapsed: boolean;

  menus: Menu[];
  constructor(public menuS: MenuService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.menus = this.menuS.menus;
  }

}
