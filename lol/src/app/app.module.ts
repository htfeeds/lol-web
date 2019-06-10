import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TokenStorageService } from './shared/auth/token-storage.service';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { RoleGuardService } from './shared/guards/role-guard.service';
import { UnauthGuardService } from './shared/guards/unauth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    TokenStorageService,    
    AuthGuardService,
    UnauthGuardService,
    RoleGuardService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
