import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { resetGame } from '../../../store/actions/reset-game.actions';

@Injectable()
export class GamePageEffects {
  public resetGame$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(resetGame),
        tap(() => localStorage.removeItem('')),
        tap(() => this.router.navigate(['lobby']))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>, private router: Router) {}
}
