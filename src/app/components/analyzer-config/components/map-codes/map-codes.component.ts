import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CodeMapEntryComponent } from './components/code-map-entry/code-map-entry.component';

@Component({
  selector: 'map-codes',
  templateUrl: './map-codes.component.html',
  styleUrls: ['./map-codes.component.css']
})
export class MapCodesComponent implements OnInit {

  @Input('configCodes') configCodes;
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
            codes: this.configCodes
        }
    });

    addCodeDialog.afterClosed().subscribe(() => {
        if(addCodeDialog.componentInstance.save){
            this.configCodes.push(addCodeDialog.componentInstance.codeMap);
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
            codes: this.configCodes,
            action: 'Edit'
        }
    });

    editCodeDialog.afterClosed().subscribe(() => {
        if(editCodeDialog.componentInstance.save){
            this.configCodes[this.configCodes.indexOf(code)] = editCodeDialog.componentInstance.codeMap;
            this.mapCodes.emit(this.getCodes())
        }
    })
  }

  deleteMapCode(code){
      this.configCodes.splice(this.configCodes.indexOf(code), 1);
      this.mapCodes.emit(this.getCodes());
  }

  getCodes(){
      return this.configCodes;
  }

  onTabOpen(){
      this.addEntryButtonVisible = true;
  }

  onTabClose(){
      this.addEntryButtonVisible = false;
  }

}
