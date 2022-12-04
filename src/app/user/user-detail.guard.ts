import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{ 

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean {
        
            return this.checkIfLogged(state.url);
    }

    checkIfLogged(url: string): boolean {

        return false;
    } 
}