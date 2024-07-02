import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { PhoneNumberRegex, StrongPasswordRegex } from 'src/service/strong-password-regex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('onOff', [
      transition(':enter', [style({
          opacity: 0,
          transform: 'translateY(-10%)'
        }),
        animate(300)
      ])
    ])
 ]
})
export class AppComponent {
  loginForm!: FormGroup;

  signUpForm!: FormGroup;
  
  showLogin: boolean = true;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createLoginForm();
    this.createSignUpForm();
  }

  public get emailLogin() {
    return this.loginForm.controls['email'];
  }

  public get passwordLogin() {
    return this.loginForm.controls['password'];
  }

  public get emailSignUp() {
    return this.signUpForm.controls['email'];
  }

  public get passwordSignUp() {
    return this.signUpForm.controls['password'];
  }

  public get mobileNumberSignUp() {
    return this.signUpForm.controls['mobileNumber'];
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  createSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(StrongPasswordRegex)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(PhoneNumberRegex)]]
    });
  }

  change() {
    this.loginForm.reset();
    this.signUpForm.reset();
    this.showLogin = !this.showLogin;
  }

  login() {
    if (this.loginForm.valid) {
      alert('Success! You are logged in!');
      console.info('Login Form (for development purposes only)', this.loginForm.value);
    }
  }

  createAccount() {
    if (this.signUpForm.valid) {
      alert('Success! Your account was created.');
      console.info('Sign Up Form (for development purposes only)', this.signUpForm.value);
    }
  }
}
