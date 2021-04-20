import { environment } from './../../../../environments/environment';
import { ContactService } from './../../../services/contact.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.scss']
})
export class MailFormComponent implements OnInit {
  FormData: FormGroup;
  formSuccess: boolean;
  windowDefined: boolean;
  site_key: string = environment.site_key;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit() {
    if ( typeof window !== 'undefined') {
      this.windowDefined = true;
    }
    this.FormData = this.builder.group({
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('', [Validators.required]),
      recaptcha: new FormControl('', [Validators.required])
    });
  }

  async onSubmit(FormData: any): Promise<void> {
    console.log(FormData);
    this.formSuccess = await this.contact.postMessage(FormData);
    console.log(this.formSuccess);
  }

  handleReset() {
    // Intentional WIP
  }

  handleSuccess(event: Event) {
    // Intentional WIP
  }

  handleExpire() {
    // Intentional WIP
  }

  handleLoad() {
    // Intentional WIP
  }
}
