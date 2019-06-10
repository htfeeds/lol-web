import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-sidebar-nav',
  templateUrl: './account-sidebar-nav.component.html',
  styleUrls: ['./account-sidebar-nav.component.css']
})
export class AccountSidebarNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // initialization of malihu scrollbar
    $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

    // initialization of show animations
    $.HSCore.components.HSShowAnimation.init('.js-animation-link');

    // initialization of form validation
    $.HSCore.components.HSValidation.init('.js-validate', {
      rules: {
        confirmPassword: {
          equalTo: '#password'
        }
      }
    });

    // initialization of forms
    $.HSCore.helpers.HSFocusState.init();
  }

}
