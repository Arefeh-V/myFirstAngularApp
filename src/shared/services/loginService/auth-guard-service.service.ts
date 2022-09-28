import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './login.service';
import { tokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: tokenStorageService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (!this.tokenService.getToken()) {
      alert(
        'You are not allowed to view this page. You are redirected to login Page'
      );

      this.router.navigate(['/login']);
      return false;

      //var urlTree = this.router.createUrlTree(['login']);
      //return urlTree;
    }

    return true;
    // throw new Error('Method not implemented.');
  }
}
