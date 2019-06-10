import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/auth/auth.service';
import { TokenStorageService } from './shared/auth/token-storage.service';
import { UnauthGuardService } from './shared/guards/unauth-guard.service';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { RoleGuardService } from './shared/guards/role-guard.service';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AccountSidebarNavComponent } from './layout/account-sidebar-nav/account-sidebar-nav.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountSidebarNavComponent,
    NotFoundPageComponent
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
