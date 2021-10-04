import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LobbyPageGuardian implements CanActivate {
  constructor(private router: Router) {}

  public canActivate() {
    if (!localStorage.getItem('battleShipCore')) {
      return true;
    }
    return this.router.navigate(['game']);
  }
}
