import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  name = "nick";
  date = new Date().toLocaleString();
  data = [
    "one",
    "two",
    "three"
  ];
  href: string = "https://google.com";
  src = "https://avianity.ru/wp-content/uploads/gomel-650x379.jpg";
  width = "50%";

  visible = true;
  hideBlock(): void {
    this.visible = !this.visible;
  }
}
