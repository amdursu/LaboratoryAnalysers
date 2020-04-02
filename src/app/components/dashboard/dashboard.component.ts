import { Component, OnInit } from '@angular/core';
import * as config from 'src/assets/config.json';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  analysers = config.analysers;
  configuredAnalysers = [];
  draggedElement;

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 5; i++){
      this.configuredAnalysers.push(this.analysers[i]);
    }
  }

  dragStart(event, analyser){
    this.draggedElement = analyser;
  }

  dragEnd(event){
    this.draggedElement = null;
  }

  addAnalyser(event){
    if(this.draggedElement)
      this.configuredAnalysers.push(this.draggedElement);
  }

}
