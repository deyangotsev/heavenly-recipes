import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecondGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    
    let isLogged = localStorage.getItem('user');

        if(isLogged !== null) {
          this.router.navigate(['']);
            return false;
            
        }
        else {
           return true
        }

  }
}
