import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My to-do List';
  name :string = 'Cathy';

  constructor() {
    // this.name = 'Cathy 2';
    this.changeName('John');
    console.log(123);
  }

  changeName(name:string):void {
    this.name = name;
  }
}
