import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { DataService } from 'src/app/services/data.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-download-log-files',
  templateUrl: './download-log-files.component.html',
  styleUrls: ['./download-log-files.component.css']
})
export class DownloadLogFilesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data, private dataService: DataService) { }

  ngOnInit() {
  }

  downloadOutputLog(){
    this.dataService.downloadOutputLogFile(this.data.analyzerName);
  }

  downloadErrorLog(){
    this.dataService.downloadErrorLogFile(this.data.analyzerName);
  }

}
