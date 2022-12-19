import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  email: string = '';
  password: string = '';
  rePassword: string = '';

 

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

 

  onSubmit(form: NgForm) {

    
    

    if(this.password != this.rePassword) {
      window.alert('Passwords do not match!');
      return;
    }
    else {
       this.auth.register(this.email, this.password);
    }

   

  }
}
