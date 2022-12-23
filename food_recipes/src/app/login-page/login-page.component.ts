import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  async login(form: NgForm) {

    if(this.email == '' || this.password == '') {
      window.alert('Email and Password fields need to be filled!');
      return;
    }

    try {
      await this.auth.login(this.email, this.password).then(() => form.reset());
    } catch (err) {
      alert(err);
    }
   
    // this.auth.isLoggedIn = true;
    // console.log(this.auth.isLoggedIn);

    

  }


}
