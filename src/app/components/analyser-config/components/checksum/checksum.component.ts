import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as config from 'src/assets/config.json';

@Component({
  selector: 'checksum',
  templateUrl: './checksum.component.html',
  styleUrls: ['./checksum.component.css']
})
export class ChecksumComponent implements OnInit {

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
    config.checkerFn.forEach(fn => this.checkerFns.push({ label: fn.name, value: fn.name }));
    config.computerFn.forEach(fn => this.computerFns.push({ label: fn.name, value: fn.name }));
  }

  sendChecksum(){
    this.checksum.emit({
      size: this.size, 
      checkerFn: this.checkerFn, 
      computerFn: this.computerFn,
      from: this.from,
      to: this.to
    })
  }

}
