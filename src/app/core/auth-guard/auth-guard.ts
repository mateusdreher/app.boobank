import { ShowMessagesService } from '@core/messages/show-messages.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../providers/auth/auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, private msg: ShowMessagesService){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        this.authService.currentUserSessionSubject.subscribe(
            (event) => {
                if (event.session == null && event.expired) {
                    this.msg.error("Sua sessão expirou. Por favor faça o login novamente");
                    this.router.navigate(['/login']);
                }
                if (event.session == null && !event.expired) {
                    this.router.navigate(['/register']);
                }
            }
        );

        const currentUserLogged = this.authService.currentUserSessionValue;

        if (currentUserLogged) {
            return true;
        }

        this.router.navigate(['/register']);
    }
}