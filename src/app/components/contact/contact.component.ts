import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  reCAPTCHAToken: any = null;
  constructor(private fb: FormBuilder,
    private recaptchaV3Service: ReCaptchaV3Service
  ){

  }
  AddData = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    message: [
      '',
      [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern('^[a-zA-Z0-9 ]*$'),
      ],
    ],
  });
  ngOnInit(): void {
    this.recaptchaV3Service
      .execute('importantAction')
      .subscribe((token: string) => {
        this.reCAPTCHAToken = `Token [${token}] generated`;
      });
     
  }

  add() {


    if (this.reCAPTCHAToken) {
      console.log(this.AddData.value);    
    }

    this.AddData.reset();

}


}
