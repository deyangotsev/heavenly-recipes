import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {




  constructor(public fireauth: AngularFireAuth, private router: Router) { }

  //login method:

  isLoggedIn:boolean = false;

  async login(email: string, password: string) {

    await this.fireauth.signInWithEmailAndPassword(email, password)
    .then((res) => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user?.uid));
      this.router.navigate(['']);

    }, err => {
      window.alert(err.message);
      this.router.navigate(['/login']);
    })
  };


  async register(email: string, password: string) {

    await this.fireauth.createUserWithEmailAndPassword(email, password)
    .then( () => {
      window.alert('Registration Successful');
      this.router.navigate(['/login']);

    }, err => {
      window.alert(err.message);
      this.router.navigate(['/register']);
    })

  };

   logout() {
    
    this.fireauth.signOut()
    .then( () => {
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      this.router.navigate(['']);

    }, err => {
      window.alert(err.message);
    });
  };

  isAuthenticated() {
    return this.isLoggedIn;
  }

}
