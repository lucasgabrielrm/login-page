import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-project';
  
  showLogin: boolean = true;

  change() {
    this.showLogin = !this.showLogin;
  }
}
