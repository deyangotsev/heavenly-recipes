import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {

    if(this.email == '' || this.password == '') {
      window.alert('Email and Password fields need to be filled!');
      return;
    }

    this.auth.login(this.email, this.password);
    console.log(this.auth.isLoggedIn);
    this.email = '';
    this.password = '';

  }


}
