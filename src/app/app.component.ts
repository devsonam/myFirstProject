import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  name = 'sonam singh';
  testVar() {
    const a = 55;
    console.log(a);
}
}






