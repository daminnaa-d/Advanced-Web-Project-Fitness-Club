import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleDetailGuard implements CanActivate {

  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const url = route.paramMap.get('schedule');
    // tslint:disable-next-line:triple-equals
      if (url != 'schedule' && url != null){
      alert('Invalid url is entered!');
      this.router.navigate(['/schedule']);
      return false;
      }
      return true;
  }
}
