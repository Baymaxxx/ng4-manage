import { LocalStorageService } from 'angular-web-storage';
import { Project } from './../../../shared/models/project.model';
import { Component, OnInit } from '@angular/core';
import { AddProjectComponent } from '../add-project/add-project.component';
import { Observable } from '../../../../../node_modules/_rxjs@5.5.2@rxjs';
import { NzModalService } from '../../../../../node_modules/_ng-zorro-antd@0.6.0-rc.2@ng-zorro-antd';

@Component({
  selector: 'app-project-config',
  templateUrl: './project-config.component.html',
  styleUrls: ['./project-config.component.scss']
})
export class ProjectConfigComponent implements OnInit {
  project: Project;
  constructor(
    private local: LocalStorageService,
    private confirmSrv: NzModalService,
  ) { }

  ngOnInit() {
  }
  leave(): boolean | Observable<boolean> | Promise<boolean> {
    return new Observable((observer) => {
      this.confirmSrv.confirm({
        title: '确认要离开吗？',
        okText: '离开',
        cancelText: '取消',
        onOk: () => {
          observer.next(true);
          observer.complete();
        },
        onCancel: () => {
          observer.next(false);
          observer.complete();
        }
      });
    });
  }
}
