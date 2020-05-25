import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.css']
})
export class QueryParamsComponent implements OnInit {

  @Input('configParameters') configParameters;
  @Output('queryParams') queryParams = new EventEmitter<object>();

  edit: boolean[] = [];
  name; field; component; frame;
  editName = []; editField = []; editComponent = []; editFrame = [];

  constructor() { }

  ngOnInit() {
  }

  addParam(name, field, component, frame){
    this.configParameters.push({name, field, component, frame});
    this.queryParams.emit({
      query: {
        params: this.configParameters
      }
    })
  }

  modifyParam(param, i){
    this.editName[i] = param.name;
    this.editField[i] = param.field;
    this.editComponent[i] = param.component;
    this.editFrame[i] = param.frame;
    this.edit[i] = true;
  }

  saveParam(param, i){
    let index = this.configParameters.indexOf(param);
    this.configParameters[index] = { 
      name: this.editName[i],
      field: this.editField[i],
      component: this.editComponent[i],
      frame: this.editFrame[i]
    };

    this.edit[i] = false;

    this.queryParams.emit({
      params: this.configParameters
    })
  }

  deleteParam(param){
    this.configParameters.splice(this.configParameters.indexOf(param), 1);
    this.queryParams.emit({
      params: this.configParameters
    })
  }


}
