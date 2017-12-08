import { Injectable } from '@angular/core';

export interface Menu {
  // 文本
  text: string;
  // 链接
  link?: string;
  // 是否选中
  _selected?: boolean;
}

@Injectable()
export class MenuService {
  private data: Menu[];
  constructor() { }

  get menus() {
    return this.data;
  }

  add(item: Menu[]) {
    this.data.push(...item);
  }
}
