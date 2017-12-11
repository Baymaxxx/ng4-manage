import { Injectable } from '@angular/core';

export interface Menu {
  // 文本
  text: string;
  // 链接
  link?: string;
  // icon图标
  icon?: string;
  // 是否选中
  _selected?: boolean;
  // 是否隐藏
  hide?: boolean;
  // 二级菜单
  children?: Menu[];
}

@Injectable()
export class MenuService {
  private data: Menu[] = [];
  constructor() { }

  get menus() {
    return this.data;
  }

  add(items: Menu[]) {
    this.data.push(...items);
  }
}
