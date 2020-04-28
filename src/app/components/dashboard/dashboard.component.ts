import { Component, OnInit } from '@angular/core';
import * as config from 'src/assets/config.json';
import { DataService } from 'src/app/services/data.service';
import { UUID } from 'angular2-uuid/index';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  analyzers;
  configuredAnalyzers = [];
  draggedElement;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAnalyzers().subscribe(analyzers => this.analyzers = analyzers);
    this.dataService.getConfiguredAnalyzers().subscribe((configuredAnalyzers: any[]) => {
      if(configuredAnalyzers)
        configuredAnalyzers.forEach(analyzer => {
          this.configuredAnalyzers.push(analyzer);
        })
    })
  }

  dragStart(event, analyzer){
    this.draggedElement = analyzer;
  }

  dragEnd(event){
    this.draggedElement = null;
  }

  addAnalyzer(event){
    if(this.draggedElement){
      this.dataService.installAnalyzer({ configName: this.draggedElement.configName }).subscribe((res: any) => {
        let analyzer = { name: res.name, status: undefined, config: res.config };
        this.configuredAnalyzers.push(analyzer);
      })
      
    }
  }

  removeAnalyzer(name){
    this.configuredAnalyzers.splice(this.configuredAnalyzers.findIndex(analyzer => analyzer.name == name), 1);
  }
  
}
