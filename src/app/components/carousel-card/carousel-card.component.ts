import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {

  @Input('analyzerName') analyzerName;
  @Input('analyzerImageURL') analyzerImageURL;

  constructor() { }

  ngOnInit() {
  }

}
