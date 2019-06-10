import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const roles = this.authService.getAuthorities();

    if (roles.indexOf(next.data.authority) > -1) {
      return true;
    }

    // navigate to not found page
    this.router.navigate(['/404']);
    return false;
  }

}
