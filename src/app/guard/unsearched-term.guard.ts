import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {RequestFormComponent} from '../request-form/request-form.component';

@Injectable({
  providedIn: 'root'
})
export class UnsearchedTermGuard implements CanDeactivate<RequestFormComponent> {
  canDeactivate(
    component: RequestFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('UnsearchedTermGuard');
    console.log(currentRoute.params);
    console.log(currentState.url);
    return component.canDeactivate() || window.confirm('Are you sure?');
  }
}
