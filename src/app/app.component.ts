import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  aaa = new ResizeObserver();
  ngOnInit() {
    console.log('111', this.aaa)
  }
}
