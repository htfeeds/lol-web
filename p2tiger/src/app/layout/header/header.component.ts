import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // initialization of HSMegaMenu component
    $('.js-mega-menu').HSMegaMenu({
      event: 'hover',
      pageContainer: $('.container'),
      breakpoint: 768,
      hideTimeOut: 0
    });

    // initialization of header
    $.HSCore.components.HSHeader.init($('#header'));

    // initialization of unfold component
    $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
      afterOpen: function () {
        $(this).find('input[type="search"]').focus();
      }
    });
  }

}
