import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}
