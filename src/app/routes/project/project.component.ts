import { AddProjectComponent } from './add-project/add-project.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from './project.service';
import { Project } from './../../shared/models/project.model';
import { Component, OnInit } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import * as _ from 'lodash';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  currentModal;
  projects: Project[];
  searchText: string;
  nzPageIndex: number;
  addProjectBtnShow: boolean = true;
  thisPageProjects: Project[];
  filter: string;
  isConfirmLoading: boolean = false;
  dataLoading: boolean = true;
  constructor(private projectService: ProjectService,
    private modalService: NzModalService,
    private _message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.params.forEach((params: Params) => {
      this.filter = params['filter'];
      this.searchText = '';
      this.filterProjects(this.filter);
      this.addProjectBtnShow = (this.filter === 'active');
    });
  }

  ngOnInit() {
  }

  filterProjects(filter: string, searchText: string = '') {
    this.dataLoading = true;
    this.projectService.filterProjects(filter, searchText)
      .then(projects => {
        this.projects = _.sortBy(projects, (item) => {
          return -item.createdTime;
        });
        this.getThisPageProjects();
        setTimeout(() => {
          this.dataLoading = false;
        }, 500);
      });
  }

  getThisPageProjects(pageIndex: number = 1) {
    this.thisPageProjects = this.projects.filter((project, index) => {
      return index >= 12 * (pageIndex - 1) && index < 12 * pageIndex;
    });
  }

  nzPageIndexChange(): void {
    this.getThisPageProjects(this.nzPageIndex);
  }

  searchProjects(searchText: string): void {
    console.log(searchText);
    this.filterProjects(this.filter, searchText);
  }

  addPorject(result: any) {
    let project = {
      id: '12345678910', // 项目id
      name: result.projectName, // 项目名称
      status: 0, // 项目状态
      createdTime: new Date().toLocaleDateString(), // 项目创建时间
      isActive: true, // 活动or归档
      principal: result.projectPrincipal, // 项目负责人
      startTime: result.projectStartTime, // 项目开始时间
      endTime: result.projectEndTime// 项目结束时间
    }
    this.projectService.addProject(project)
      .then((project) => {
        this.projects.unshift(project);
        this.getThisPageProjects(this.nzPageIndex);
        this._message.success('项目添加成功！');
      })
  }

  addProjectModal() {
    const subscription = this.modalService.open({
      title: '添加项目',
      content: AddProjectComponent,
      maskClosable: false,
      onOk() {
      },
      onCancel() {
        console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        name: ''
      }
    });
    // 接收modal数据
    subscription.subscribe(result => {
      if (typeof result === 'object') {
        this.addPorject(result);
      }
    });
  }


}
