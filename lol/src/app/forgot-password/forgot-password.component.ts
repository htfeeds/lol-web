import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private titleService: Title, private renderer: Renderer2) { }

  ngOnInit() {
    this.titleService.setTitle(Constants.APP_NAME + ' | Forgot password');
    this.renderer.addClass(document.body, "gray-bg");
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, "gray-bg");
  }

}
