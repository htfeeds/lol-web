import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-sidebar',
  templateUrl: './topic-sidebar.component.html',
  styleUrls: ['./topic-sidebar.component.css']
})
export class TopicSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // initialization of sticky blocks
    setTimeout(function () {
      $.HSCore.components.HSStickyBlock.init('.js-sticky-block');
    }, 300);
  }

}
