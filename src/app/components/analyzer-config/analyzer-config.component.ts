import { Component, OnInit } from '@angular/core';
import * as config from "src/assets/config.json";
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-analyzer-config',
  templateUrl: './analyzer-config.component.html',
  styleUrls: ['./analyzer-config.component.css'],
  providers: [ConfirmationService, DataService]
})
export class AnalyzerConfigComponent implements OnInit {

  analyzerConfig;

  listenerClasses = [{ label: 'Select listener', value: '' }];
  parserClasses = [{ label: 'Select parser', value: '' }];
  protocolFiles = [{ label: 'Select file', value: '' }];
  devmode = [{ label: 'Select devmode', value: '' }, { label: 'True', value: true }, { label: 'False', value: false }];

  server;
  paths;
  checksum;
  queryParams;
  mapCodes;
  interpretationCodes;

  separator;

  constructor(private router: Router, private confirmationService: ConfirmationService, private data: DataService) { }

  ngOnInit() {
    config.listenerClasses.forEach(listenerClass => this.listenerClasses.push({ label: listenerClass.name, value: listenerClass.name }));
    config.parserClasses.forEach(parserClass => this.parserClasses.push({ label: parserClass.name, value: parserClass.name }));
    config.protocolFiles.forEach(file => this.protocolFiles.push({ label: file.name, value: file.name }));
    if(window.history.state.config){
      this.analyzerConfig = window.history.state.config;
      // let s: string = this.analyzerConfig.separator.toString();
      // console.log('STRING', String.raw`\r\n`.);
      
    } else {
      alert('Config not loaded!');
      this.router.navigate(['/']);
    }
    
  }

  saveServer(server){
    this.server = server;
  }

  savePaths(paths){
    this.paths = paths;
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

  saveInterpretationCodes(interpretationCodes){
    this.interpretationCodes = interpretationCodes;
  }

  save(form){
    form.astmTransform = this.analyzerConfig.astmTransform;
    form.bundleTransform = this.analyzerConfig.bundleTransform;
    form.name = this.analyzerConfig.name;
    form.configName = this.analyzerConfig.configName;
    form.hms = this.analyzerConfig.hms;
    form.imgURL = this.analyzerConfig.imgURL;
    form.paths = this.paths ? this.paths : this.analyzerConfig.paths;
    form.map = {};
    form.server = this.server ? this.server : this.analyzerConfig.server;
    form.checksum = this.checksum ? this.checksum : this.analyzerConfig.checksum;
    form.map.code = this.mapCodes ? this.mapCodes : this.analyzerConfig.map.code;
    form.query = this.queryParams ? this.queryParams : this.analyzerConfig.query;
    form.map.interpretationCode = this.interpretationCodes ? this.interpretationCodes : this.analyzerConfig.map.interpretationCode;
    form.protocol = form.protocol ? { fileName: form.protocol, directoryPath: this.analyzerConfig.protocol.directoryPath } : this.analyzerConfig.protocol;
    this.confirmationService.confirm({
      message: 'Do you want to restart the analyzer now?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.data.modifyConfig({ config: form }).subscribe(data => {
          this.data.startAnalyzer({ analyzerName: form.configName }).subscribe(start => this.router.navigate(['/']));
        });
      },
      reject: () => {
        this.data.modifyConfig({ config: form }).subscribe(data => this.router.navigate(['/']));
      }
    });
    
  }

}
