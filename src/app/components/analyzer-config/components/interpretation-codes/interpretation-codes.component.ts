import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'interpretation-codes',
  templateUrl: './interpretation-codes.component.html',
  styleUrls: ['./interpretation-codes.component.css']
})
export class InterpretationCodesComponent implements OnInit {

  @Input('configInterpretationCodes') configInterpretationCodes;
  @Output('interpretationCodes') interpretationCodes = new EventEmitter<object>();

  edit: boolean[] = [];
  lisCode; code; display;
  editLis = []; editCode = []; editDisplay = [];

  constructor() { }

  ngOnInit() {
  }

  addCode(lisCode, code, display){
    this.configInterpretationCodes.push({lisCode, code, display});
    this.interpretationCodes.emit(this.configInterpretationCodes);
    this.lisCode = '';
    this.code = '';
    this.display = '';
  }

  modifyCode(code, i){
    this.editLis[i] = code.lisCode;
    this.editCode[i] = code.code;
    this.editDisplay[i] = code.display;
    this.edit[i] = true;
  }

  saveCode(code, i){
    let index = this.configInterpretationCodes.indexOf(code);
    this.configInterpretationCodes[index] = { 
      lisCode: this.editLis[i],
      code: this.editCode[i],
      display: this.editDisplay[i]
    };

    this.edit[i] = false;

    this.interpretationCodes.emit(this.configInterpretationCodes);
  }

  deleteCode(code){
    this.configInterpretationCodes.splice(this.configInterpretationCodes.indexOf(code), 1);
    this.interpretationCodes.emit(this.configInterpretationCodes);
  }

}
