import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ConfirmationService } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';
import { DownloadLogFilesComponent } from './components/download-log-files/download-log-files.component';
import { Router } from '@angular/router';

@Component({
  selector: 'analyzer-card',
  templateUrl: './analyzer-card.component.html',
  styleUrls: ['./analyzer-card.component.css'],
  providers: [ConfirmationService]
})
export class AnalyzerCardComponent implements OnInit {

  @Input('analyzer') analyzer;
  @Output('analyzerName') analyzerName = new EventEmitter();
  @Output('removedAnalyzer') removedAnalyzer = new EventEmitter();
  

  constructor(private data: DataService, private confirmationService: ConfirmationService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  powerAnalyzer(){
    if(this.analyzer.status !== 'online'){
      this.data.startAnalyzer({ analyzerName: this.analyzer.name }).subscribe((analyzerInfo: any) => {
        this.analyzer.status = analyzerInfo.status;
      })
    } else {
      this.confirmationService.confirm({
        message: 'Are you sure that you want to stop this analyzer?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.data.stopAnalyzer({ analyzerName: this.analyzer.name }).subscribe(res => {
            this.analyzer.status = 'off';
          })
        }
      });
    }
  }

  configAnalyzer(){
    this.router.navigate(['/config'], {
      state: {config: this.analyzer.config}
    });
  }

  removeAnalyzer(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to remove this analyzer?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.data.removeAnalyzer({ analyzerName: this.analyzer.name }).subscribe(res => {
          this.removedAnalyzer.emit(this.analyzer.name);
        });
      }
    });
  }

  openDownloadDialog(){
    let openDialog = this.dialog.open(DownloadLogFilesComponent, {
      width: '550px',
      height: '270px',
      data: {
        analyzerName: this.analyzer.name
      }
    })
  }
}
