import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'analyser-card',
  templateUrl: './analyser-card.component.html',
  styleUrls: ['./analyser-card.component.css']
})
export class AnalyserCardComponent implements OnInit {

  @Input('analyserName') analyserName;
  @Input('analyserImageURL') analyserImageURL;

  constructor() { }

  ngOnInit() {
  }

}
