import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {

  @Input('analyserName') analyserName;
  @Input('analyserImageURL') analyserImageURL;

  constructor() { }

  ngOnInit() {
  }

}
