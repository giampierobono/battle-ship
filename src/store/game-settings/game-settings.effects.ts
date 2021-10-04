import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { setGameSettings } from './game-settings.actions';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { addPlayers, AddPlayersPayloadModel, getCurrentGameNumberOfPlayers } from '../players';
import { addBoatsToPlayer, getTotalNumberOfBoats } from '../boats';
import { select, Store } from '@ngrx/store';
import { CoreState } from '../common';
import { getBoatShapes } from '../boats-shapes';
import { getGameSettings } from './game-settings.selectors';
import { IGameSettingsState } from './game-settings.reducer';
import { createBoatsForAllPlayers, createPlayers } from '../../utils';
import { MappedBoatShapesModel } from '../../models';

@Injectable()
export class GameEffects {
  public createPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setGameSettings),
      withLatestFrom(this.store.pipe(select(getCurrentGameNumberOfPlayers))),
      withLatestFrom(this.store.pipe(select(getTotalNumberOfBoats))),
      filter(
        ([[, currentExistingPlayers], currentExistingBoats]) =>
          currentExistingPlayers === 0 && currentExistingBoats === 0
      ),
      map(([[{ numOfPlayers }]]) => addPlayers({ players: createPlayers(numOfPlayers) }))
    )
  );

  public createBoats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPlayers),
      withLatestFrom(this.store.pipe(select(getGameSettings))),
      withLatestFrom(this.store.pipe(select(getBoatShapes))),
      map(
        ([[{ players }, { boatsPerPlayer, boardSize }], shapes]: [
          [AddPlayersPayloadModel, IGameSettingsState],
          MappedBoatShapesModel
        ]) => addBoatsToPlayer({ boats: createBoatsForAllPlayers(players, boatsPerPlayer, boardSize, shapes) })
      )
    )
  );

  constructor(private actions$: Actions, private store: Store<CoreState>) {}
}
