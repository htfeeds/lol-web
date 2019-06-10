import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../shared/auth/auth.service';
import { SignUpInfo } from '../shared/auth/signup-info';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private titleService: Title,
    private renderer: Renderer2,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(Constants.APP_NAME + ' | Register');
    this.renderer.addClass(document.body, "gray-bg");
  }

  onSubmit() {
    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, "gray-bg");
  }

}
