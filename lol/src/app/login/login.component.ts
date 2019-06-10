import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TokenStorageService } from '../shared/auth/token-storage.service';
import { AuthService } from '../shared/auth/auth.service';
import { AuthLoginInfo } from '../shared/auth/login-info';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(
    private titleService: Title,
    private renderer: Renderer2,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      this.router.navigate(['/admin']);
    } else {
      this.titleService.setTitle(Constants.APP_NAME + ' | Login');
      this.renderer.addClass(document.body, "gray-bg");
    }
  }

  onSubmit() {
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.router.navigate(['/admin']);
        //this.reloadPage();
      },
      error => {
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, "gray-bg");
  }

}
