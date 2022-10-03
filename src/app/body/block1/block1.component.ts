import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block1',
  templateUrl: './block1.component.html',
  styleUrls: ['./block1.component.css'],
})
export class Block1Component implements OnInit {
  public show1: Boolean = true;

  constructor() {}

  ngOnInit() {}
}
