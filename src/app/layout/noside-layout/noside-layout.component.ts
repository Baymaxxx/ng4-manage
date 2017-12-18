import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-noside-layout',
  templateUrl: './noside-layout.component.html',
  styleUrls: ['./noside-layout.component.scss']
})
export class NosideLayoutComponent implements OnInit {

  constructor(
    private local: LocalStorageService
  ) { }

  ngOnInit() {
    this.local.remove('project');
  }

}
