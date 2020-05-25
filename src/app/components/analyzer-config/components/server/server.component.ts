import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { config } from 'rxjs';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input('configServer') configServer;
  @Output('server') server = new EventEmitter<object>();

  host;
  port;

  constructor() { }

  ngOnInit() {
    this.host = this.configServer.host ? this.configServer.host : undefined;
    this.port = this.configServer.port ? this.configServer.port : undefined;
  }

  sendServer(form){
    console.log(form);
    
    this.server.emit(form);
  }

}
