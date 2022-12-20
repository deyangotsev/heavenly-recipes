import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { elementAt, Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class LinkGuardService implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // if (this.auth.isAuthenticated()) {
        //     return true;

        // } else {
        //     this.router.navigate(['']);
        //     return false;
        // }

        let isLogged = localStorage.getItem('user');

        if(isLogged !== null) {
            this.router.navigate(['']);
            return false;
            
        }
        else {
            return true;
        }

        
    }
}

   