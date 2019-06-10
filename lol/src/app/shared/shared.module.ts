import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptorProviders } from './auth/auth-interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [HttpInterceptorProviders]
    }
  }
}
