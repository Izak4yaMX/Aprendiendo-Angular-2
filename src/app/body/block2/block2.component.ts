import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-block2',
  templateUrl: './block2.component.html',
  styleUrls: ['./block2.component.css'],
})
export class Block2Component implements OnInit {
  array = ['Alberto', 'Brian', 'Carlos', 'Daniel', 'Esteban', 'Fernando'];

  constructor() {}

  ngOnInit() {}
}
