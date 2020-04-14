import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-code-map-entry',
  templateUrl: './code-map-entry.component.html',
  styleUrls: ['./code-map-entry.component.css']
})
export class CodeMapEntryComponent implements OnInit {

  action;
  lisCode;
  code;
  display
  system;
  commCode;
  commSystem;
  anaApCode;
  anaApSystem;
  parameter;
  parameters: any[] = [];

  codeMap: any = {};
  codes;
  selectedCodes = [];
  filteredCodes;

  save: boolean = false;
  filterField: string = 'display';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.codes = this.data.codes;
    this.action = this.data.action;
    if(this.data.action == 'Edit'){
      if(this.data.code.lisCode) this.lisCode = this.data.code.lisCode;
      if(this.data.code.code) this.code = this.data.code.code;
      if(this.data.code.display) this.display = this.data.code.display;
      if(this.data.code.system) this.system = this.data.code.system;
      if(this.data.code.codComunicatie) { this.commCode = this.data.code.codComunicatie.code; this.commSystem = this.data.code.codComunicatie.system };
      if(this.data.code.anaApCod) { this.anaApCode = this.data.code.anaApCod.code; this.anaApSystem = this.data.code.anaApCod.system };
      if(this.data.code.parameters && this.data.code.parameters.length > 0){
        this.data.code.parameters.forEach(parameter => {
          let code = this.codes.find(code => code.code === parameter);
          console.log(code);
          
          this.selectedCodes.push(code);
        })
      }
    }
  }

  addParam(){
    this.parameters.push(this.parameter);
    this.parameter = '';
  }

  addOrEditCodeMap(){
    if(this.lisCode) this.codeMap.lisCode = this.lisCode;
    if(this.code) this.codeMap.code = this.code;
    if(this.display) this.codeMap.display = this.display;
    if(this.system) this.codeMap.system = this.system;
    if(this.commCode || this.commSystem) this.codeMap.codComunicatie = { code: this.commCode, system: this.commSystem };
    if(this.anaApCode || this.anaApSystem) this.codeMap.anaApCod = { code: this.anaApCode, system: this.anaApSystem };
    if(this.selectedCodes && this.selectedCodes.length > 0) {
      this.codeMap.parameters = [];
      this.selectedCodes.forEach(code => {
        this.codeMap.parameters.push(code.code);
      })
    }
    this.save = true;
  }

  filterCodes(event) {
    let query = event.query;
    this.filteredCodes = this.filterCode(query, this.codes);
  }

  filterCode(query, codes: any[]):any[] {
      let reg = /ˆ[0-9]*$/;
      let filtered : any[] = [];
      for(let i = 0; i < codes.length; i++) {
          let code = codes[i];
          if(code.display && !reg.test(query))
            if (code.display.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(code);
            }
          else{
            if (code.code.indexOf(query) == 0) {
              filtered.push(code);
            }
          }
      }
      return filtered;
  }

}
