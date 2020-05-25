import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { saveAs } from 'file-saver';
import * as config from '../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  options = {
    headers: this.headers
  }

  constructor(private http: HttpClient) { }

  getAnalyzers(){
    return this.http.get('/api/getAnalyzers');
  }
  
  getConfiguredAnalyzers(){
    return this.http.get('/api/getConfiguredAnalyzers');
  }

  installAnalyzer(body){
    return this.http.post('/api/installAnalyzer', body, this.options);
  }

  startAnalyzer(body){
    return this.http.post('/api/startAnalyzer', body, this.options);
  }

  stopAnalyzer(body){
    return this.http.post('/api/stopAnalyzer', body, this.options);
  }

  removeAnalyzer(body){
    return this.http.post('/api/removeAnalyzer', body, this.options);
  }

  modifyConfig(body){
    return this.http.post('/api/modifyConfig', body, this.options);
  }

  downloadOutputLogFile(analyzerName){
    let url = `http://${config.api.host}:${config.api.port}/api/downloadOutputLog?analyzerName=${analyzerName}`;
    window.open(url);
  }

  downloadErrorLogFile(analyzerName){
    let url = `http://${config.api.host}:${config.api.port}/api/downloadErrorLog?analyzerName=${analyzerName}`;
    window.open(url);
  }
}
