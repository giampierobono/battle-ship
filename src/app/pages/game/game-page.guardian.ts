import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class GamePageGuardian implements CanActivate {
  constructor(private router: Router) {}

  public canActivate() {
    if (localStorage.getItem('battleShipCore') !== null) {
      return true;
    }
    return this.router.navigate(['lobby']);
  }
}
