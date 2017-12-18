import { boxAnimateHover } from './../../../shared/animates/base-click';
import { LocalStorageService } from 'angular-web-storage';
import { Project } from './../../../shared/models/project.model';
import { Component, OnInit, HostListener } from '@angular/core';
import { AddProjectComponent } from '../add-project/add-project.component';
import { Observable } from 'rxjs/Rx';
import { NzModalService } from 'ng-zorro-antd';
import { boxAnimate } from '../../../shared/animates/base-click';
// import { simAnim } from '../../../shared/animates/sim-anim'; => all
import { fadeIn, fadeOut, stretch, shrink, flyIn, flyOut, zoomIn, zoomOut } from '../../../shared/animates/sim-anim';

@Component({
  selector: 'app-project-config',
  templateUrl: './project-config.component.html',
  styleUrls: ['./project-config.component.scss'],
  animations: [boxAnimate, boxAnimateHover, fadeIn, fadeOut, shrink, stretch, flyIn, flyOut, zoomIn, zoomOut]
})
export class ProjectConfigComponent implements OnInit {
  project: Project;
  // 定义开始的状态
  boxState: String = 'right';
  _isTrue: Boolean = true;
  boxHoverState: String = 'out';
  constructor(
    private local: LocalStorageService,
    private confirmSrv: NzModalService,
  ) { }

  ngOnInit() {
  }
  // 绑定一个鼠标移入改变状态
  onMouseEnter(event) {
    console.log(event);
    this.boxHoverState = 'in';
  }
  // 绑定一个鼠标移出改变状态
  onmouseleave() {
    this.boxHoverState = 'out';
  }
  start(): void {
    console.log('开始运动');
    if (this._isTrue) {
      this.boxState = 'left';
    } else {
      this.boxState = 'right';
    }
    this._isTrue = !this._isTrue;
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
