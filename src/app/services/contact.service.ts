import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  async postMessage(input: any): Promise<boolean> {
    let emailerResponse: string = '';

    this.http.post(
      'https://atomicnicos.me/cq1QYBEBv1cShnPY8CL/email-owner.php',
      input,
      { responseType: 'text' }
    ).subscribe(
      (result: string) => emailerResponse = result
    )

    console.log(emailerResponse);

    return emailerResponse === '200';
  }
}
