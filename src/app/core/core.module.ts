import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from './services/settings.service';
import { LocalStorageService } from 'angular-web-storage';
import { MenuService } from './services/menu.service';
import { HttpService } from './services/http.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthGuard,
    AuthService,
    SettingsService,
    LocalStorageService,
    MenuService,
    HttpService
  ]
})
// 既然是允许根模块才需要的核心模块，就不允许在其他地方被导入。所以还需要一个防止不小心的人。
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
