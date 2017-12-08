import { MenuService } from './menu.service';
import { SettingsService } from './settings.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

/**
 * 用于启动应用时获取该应用的默认配置数据。
 */
@Injectable()
export class StartupService {

  constructor(
    private setting: SettingsService,
    private menu: MenuService,
    private httpClient: HttpClient
  ) { }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get('assets/app-data.json')
        .subscribe((res: any) => {
        this.setting.setApp(res.app);
        this.setting.setUser(res.user);
        this.menu.add(res.menu);
        resolve(res);
      }, (err: HttpErrorResponse) => {
        resolve(null);
      });
    });
  }
}
