import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-project';
  
  showLogin: boolean = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  passwordFormControl = new FormControl('', [Validators.required]);

  mobileNumberFormControl = new FormControl('', [Validators.required]);

  change() {
    this.showLogin = !this.showLogin;
  }
}
