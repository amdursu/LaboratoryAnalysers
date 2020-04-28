import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CodeMapEntryComponent } from './components/code-map-entry/code-map-entry.component';

@Component({
  selector: 'map-codes',
  templateUrl: './map-codes.component.html',
  styleUrls: ['./map-codes.component.css']
})
export class MapCodesComponent implements OnInit {

  codes = [
    {
        code: "300",
        display: "Glucose"
    },
    {
        code: "301",
        display: "Total Protein"
    },
    {
        code: "302",
        display: "Uric Acid"
    },
    {
        code: "303",
        display: "Albumin"
    },
    {
        code: "304",
        display: "Triglycerides"
    },
    {
        code: "305",
        display: "Cholesterol"
    },
    {
        code: "306",
        display: "Amylase"
    },
    
    {
        lisCode: "754",
        code: "754",
        system: "/anaCod",
        codComunicatie: {
            code: "1",
            system: "/codComunicatie"
        },
        anaApCod: {
            code: "_",
            system: "/AnaApCod"
        },
        parameters: [
            "612",
            "613"
        ]
    },
    {
        lisCode: "612",
        code: "612",
        system: "/anaCod",
        display: "VSH 1h",
        codComunicatie: {
            code: "1",
            system: "/codComunicatie"
        },
        anaApCod: {
            code: "_",
            system: "/AnaApCod"
        }
    },
    {
        lisCode: "613",
        code: "613",
        system: "/anaCod",
        display: "VSH 2h",
        codComunicatie: {
            code: "2",
            system: "/codComunicatie"
        },
        anaApCod: {
            code: "_",
            system: "/AnaApCod"
        }
    },
  ];

  @Output('mapCodes') mapCodes = new EventEmitter<object>();

  addEntryButtonVisible: boolean = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addMapCode(){
    let addCodeDialog = this.dialog.open(CodeMapEntryComponent, {
        width: '600px',
        height: '600px',
        data: {
            action: 'Add',
            codes: this.codes
        }
    });

    addCodeDialog.afterClosed().subscribe(() => {
        if(addCodeDialog.componentInstance.save){
            this.codes.push(addCodeDialog.componentInstance.codeMap);
            this.mapCodes.emit(this.getCodes());
        }
            
    });
  }

  editMapCode(code){
    let editCodeDialog = this.dialog.open(CodeMapEntryComponent, {
        width: '600px',
        height: '600px',
        data: {
            code,
            codes: this.codes,
            action: 'Edit'
        }
    });

    editCodeDialog.afterClosed().subscribe(() => {
        if(editCodeDialog.componentInstance.save){
            this.codes[this.codes.indexOf(code)] = editCodeDialog.componentInstance.codeMap;
            this.mapCodes.emit(this.getCodes())
        }
    })
  }

  deleteMapCode(code){
      this.codes.splice(this.codes.indexOf(code), 1);
      this.mapCodes.emit(this.getCodes());
  }

  getCodes(){
      return {
          map: {
              code: this.codes
          }
      }
  }

  onTabOpen(){
      this.addEntryButtonVisible = true;
  }

  onTabClose(){
      this.addEntryButtonVisible = false;
  }

}
