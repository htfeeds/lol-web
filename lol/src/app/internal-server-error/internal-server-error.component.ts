import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-internal-server-error',
  templateUrl: './internal-server-error.component.html',
  styleUrls: ['./internal-server-error.component.css']
})
export class InternalServerErrorComponent implements OnInit {

  constructor(private titleService: Title, private renderer: Renderer2) { }

  ngOnInit() {
    this.titleService.setTitle(Constants.APP_NAME + "| 500");
    this.renderer.addClass(document.body, "gray-bg");
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, "gray-bg");
  }

}
