import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as config from 'src/assets/config.json';

@Component({
  selector: 'checksum',
  templateUrl: './checksum.component.html',
  styleUrls: ['./checksum.component.css']
})
export class ChecksumComponent implements OnInit {
  @Input('analyzerConfig') analyzerConfig;
  @Output('checksum') checksum = new EventEmitter<object>();

  size: number;
  checkerFn;
  checkerFns = [{ label: 'Select checkerFn', value: '' }];
  computerFn;
  computerFns = [{ label: 'Select computerFn', value: '' }];
  from;
  to;

  constructor() { }

  ngOnInit() {
    this.size = this.analyzerConfig.checksum.size ? this.analyzerConfig.checksum.size : undefined;
    this.checkerFn = this.analyzerConfig.checksum.checkerFn ? this.analyzerConfig.checksum.checkerFn : undefined;
    this.computerFn = this.analyzerConfig.checksum.computerFn ? this.analyzerConfig.checksum.computerFn : undefined;
    this.from = this.analyzerConfig.checksum.from ? this.analyzerConfig.checksum.from : undefined;
    this.to = this.analyzerConfig.checksum.to ? this.analyzerConfig.checksum.to : undefined;
    config.checkerFn.forEach(fn => this.checkerFns.push({ label: fn.name, value: fn.name }));
    config.computerFn.forEach(fn => this.computerFns.push({ label: fn.name, value: fn.name }));
  }

  sendChecksum(form){
    form.size = form.size !== '' ? Number(form.size) : null;
    form.from = form.from !== '' ? Number(form.from) : null;
    form.to = form.to !== '' ? Number(form.to) : null;
    console.log(form);
    
    this.checksum.emit(form);
  }

}
