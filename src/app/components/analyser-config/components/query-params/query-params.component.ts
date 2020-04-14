import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.css']
})
export class QueryParamsComponent implements OnInit {

  queryParameters = [
    {
      name: "performer",
      field: 5,
      component: 1,
      frame: "H"
    },
    {
        name: "subject",
        field: 3,
        component: 1,
        frame: "Q"
    }
  ]

  @Output('queryParams') queryParams = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  addParam(name, field, component, frame){
    this.queryParameters.push({name, field, component, frame});
    this.queryParams.emit({
      query: {
        params: this.queryParameters
      }
    })
  }

  deleteParam(param){
    this.queryParameters.splice(this.queryParameters.indexOf(param), 1);
    this.queryParams.emit({
      query: {
        params: this.queryParameters
      }
    })
  }


}
