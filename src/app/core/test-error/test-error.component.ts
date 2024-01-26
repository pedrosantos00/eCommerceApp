import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent {
  baseUrl = environment.apiUrl;
  validationErrors : string[] = []

  constructor(private httpClient : HttpClient) {}

  get404Error(){
    this.httpClient.get(this.baseUrl + 'products/52').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get400Error(){
    this.httpClient.get(this.baseUrl + 'buggy/badrequest').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get400ValidationError(){
    this.httpClient.get(this.baseUrl + 'products/fortytwo').subscribe({
      next: response => console.log(response),
      error: error =>
      {
        console.log(error)
        this.validationErrors = error.errors;
      }
    })
  }


  get500Error(){
    this.httpClient.get(this.baseUrl + 'buggy/servererror').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }










}
