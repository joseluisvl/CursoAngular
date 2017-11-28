import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  public message: string;

  constructor() { }

  ngOnInit() {
    this.message = 'Head init!';
  }

}
