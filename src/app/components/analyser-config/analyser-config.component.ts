import { Component, OnInit } from '@angular/core';
import * as config from "src/assets/config.json";

@Component({
  selector: 'app-analyser-config',
  templateUrl: './analyser-config.component.html',
  styleUrls: ['./analyser-config.component.css']
})
export class AnalyserConfigComponent implements OnInit {

  listenerClasses = [{ label: 'Select listener', value: '' }];
  parserClasses = [{ label: 'Select parser', value: '' }];
  protocolFiles = [{ label: 'Select file', value: '' }];

  checksum;
  queryParams;
  mapCodes;

  constructor() { }

  ngOnInit() {
    config.listenerClasses.forEach(listenerClass => this.listenerClasses.push({ label: listenerClass.name, value: listenerClass.name }));
    config.parserClasses.forEach(parserClass => this.parserClasses.push({ label: parserClass.name, value: parserClass.name }));
    config.protocolFiles.forEach(file => this.protocolFiles.push({ label: file.name, value: file.name }));
  }

  saveChecksum(checksum){
    this.checksum = checksum;
  }
  
  saveQueryParams(queryParams){
    this.queryParams = queryParams;
  }

  saveMapCodes(mapCodes){
    this.mapCodes = mapCodes;
  }

  save(form){
    console.log(JSON.stringify(this.mapCodes));
  }

}
