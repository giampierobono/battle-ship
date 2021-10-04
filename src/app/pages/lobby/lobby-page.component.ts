import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-lobby',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.scss'],
})
export class LobbyPageComponent {
  constructor(private router: Router) {}

  public startGame() {
    localStorage.setItem('battleShipCore', '');
    this.router.navigate(['game']);
  }
}
