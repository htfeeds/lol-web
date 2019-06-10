import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private titleService: Title, private renderer: Renderer2) { }

  ngOnInit() {
    this.titleService.setTitle(Constants.APP_NAME + "| 404");
    this.renderer.addClass(document.body, "gray-bg");
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, "gray-bg");
  }

}
