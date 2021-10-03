import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { setGameSettings } from './game-settings.actions';
import { map, withLatestFrom } from 'rxjs/operators';
import { addPlayers, AddPlayersPayloadModel } from '../players';
import { createBoatsForAllPlayers, createPlayers } from 'store-tools';
import { addBoatsToPlayer } from '../boats';
import { select, Store } from '@ngrx/store';
import { CoreState } from '../common';
import { getBoatShapes } from '../boats-shapes';
import { MappedBoatShapesModel } from 'models';
import { getGameSettings } from './game-settings.selectors';
import { IGameSettingsState } from './game-settings.reducer';

@Injectable()
export class GameEffects {
  public createPlayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setGameSettings),
      map(({ numOfPlayers }) => addPlayers({ players: createPlayers(numOfPlayers) }))
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
