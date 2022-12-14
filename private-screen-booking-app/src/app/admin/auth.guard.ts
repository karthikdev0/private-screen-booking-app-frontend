import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private jwtHelper: JwtHelperService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem("access_token");

      if(token){
        let detoken = this.jwtHelper.decodeToken(token);
        if(detoken.role === 'ADMIN'){
          return true;
        }
        else{
          return false;
        }
      }




      if (token && !this.jwtHelper.isTokenExpired(token)){
        return true;
      }

      this.router.navigate(["tyzwvy/admin/login"]);
      return false;

  }

}
