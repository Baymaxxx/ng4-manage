import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from './services/settings.service';
import { LocalStorageService } from 'angular-web-storage';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthGuard, AuthService, SettingsService, LocalStorageService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
