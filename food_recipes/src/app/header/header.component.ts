import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  // loggedUser: any = localStorage.getItem('user');
  checkLogged:boolean = false;

  ngOnInit(): void {
    
    if(localStorage.getItem('user') !== null) {
      this.checkLogged = true;
    }
    else {
      this.checkLogged = false;
    }
  }



  showLogout() {
    let element:any = document.getElementById('logout-box');
    element.classList.add("animate__animated", "animate__fadeInDown");
    element.style.display = 'block';

  };

  cancelLogout() {
    let element:any = document.getElementById('logout-box');
    element.classList.remove("animate__animated", "animate__fadeInDown");
    element.style.display = 'none';
    
  };

  logout() {


      this.auth.logout();
      let element:any = document.getElementById('logout-box');
      element.classList.remove("animate__animated", "animate__fadeInDown");
      element.style.display = 'none';
  
  };

  

  
}