import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../providers/auth/auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const currentUserLogged = this.authService.currentUserSessionValue;

        if (currentUserLogged) {
            return true;
        }

        this.router.navigate(['/login']);
    }
}