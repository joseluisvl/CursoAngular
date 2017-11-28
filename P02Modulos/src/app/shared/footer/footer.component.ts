import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public autor: string;
  public empresa: string;
  constructor() {}

  ngOnInit() {
    this.empresa = 'Indra';
    this.autor = 'jlvillapalos';
  }
}
