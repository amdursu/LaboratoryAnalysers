import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'paths',
  templateUrl: './paths.component.html',
  styleUrls: ['./paths.component.css']
})
export class PathsComponent implements OnInit {

  @Input('analyzerConfig') analyzerConfig;
  @Output('paths') paths = new EventEmitter<object>();

  tmp; completed; results; query; logs;

  constructor() { }

  ngOnInit() {
    this.tmp = this.analyzerConfig.paths.tmp ? this.analyzerConfig.paths.tmp : undefined;
    this.completed = this.analyzerConfig.paths.completed ? this.analyzerConfig.paths.completed : undefined;
    this.results = this.analyzerConfig.paths.results ? this.analyzerConfig.paths.results : undefined;
    this.query = this.analyzerConfig.paths.query ? this.analyzerConfig.paths.query : undefined;
    this.logs = this.analyzerConfig.paths.logs ? this.analyzerConfig.paths.logs : undefined;
  }

  sendPaths(form){
    this.paths.emit(form);
  }

}
