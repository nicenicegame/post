import { Injectable } from '@angular/core';
import { AuthService } from './auth.service'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAuth = this.authService.getIsAuth()
    if (!isAuth) {
      this.router.navigate(['/login'])
    }
    return isAuth
  }
}
