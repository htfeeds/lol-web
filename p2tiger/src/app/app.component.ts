import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    // initialization of go to
    $.HSCore.components.HSGoTo.init('.js-go-to');
  }
}
