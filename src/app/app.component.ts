import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StrongPasswordRegx } from 'src/service/strong-password-regex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
      password: ['', [Validators.required, Validators.pattern(StrongPasswordRegx)]],
      mobileNumber: ['', [Validators.required]]
    });
  }

  change() {
    this.showLogin = !this.showLogin;
  }
}
