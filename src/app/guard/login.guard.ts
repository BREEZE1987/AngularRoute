import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

//@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let loggedIn: boolean = Math.random() < 0.5;
    if (!loggedIn) {
      console.log('用户未登录');
    }
    return loggedIn;
  }

}
