import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../../node_modules/_angular-web-storage@1.0.0@angular-web-storage/core/service';

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
