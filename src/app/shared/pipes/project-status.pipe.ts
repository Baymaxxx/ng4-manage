import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'projectStatus'
})
export class ProjectStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 0:
        return '未开始';
      case 1:
        return '进行中';
      case 2:
        return '已结束';
    }
  }

}
