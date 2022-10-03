import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show1: boolean;
  show2: boolean;
  bloque1_funcion() {
    if (this.show1) {
      return (this.show1 = false);
    }
    return (this.show1 = true);
  }

  bloque2_funcion() {
    if (this.show2) {
      return (this.show2 = false);
    }
    return (this.show2 = true);
  }
}
