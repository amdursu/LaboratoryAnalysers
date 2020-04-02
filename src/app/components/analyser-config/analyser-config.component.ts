import { Component, OnInit } from '@angular/core';
import * as config from "src/assets/config.json";

@Component({
  selector: 'app-analyser-config',
  templateUrl: './analyser-config.component.html',
  styleUrls: ['./analyser-config.component.css']
})
export class AnalyserConfigComponent implements OnInit {

  name;
  listenerClass;
  listenerClasses = [{ label: 'Select listener', value: '' }];
  parserClass;
  parserClasses = [{ label: 'Select parser', value: '' }];

  constructor() { }

  ngOnInit() {
    config.listenerClasses.forEach(listenerClass => this.listenerClasses.push({ label: listenerClass.name, value: listenerClass.name }));
    config.parserClasses.forEach(parserClass => this.parserClasses.push({ label: parserClass.name, value: parserClass.name }));
  }

}
