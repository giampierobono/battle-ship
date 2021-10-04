import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { CoreState } from '../common';
import {
  addSunkBoat,
  nextTurn,
  savePlayerMove,
  setPlayerTurn,
  setWinnerPlayer,
  tryShoot,
} from './battle-ship-game.actions';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { getAllBoats, hitPlayerBoat } from '../boats';
import { getCurrentGameNumberOfPlayers } from '../players';
import { getCurrentPlayerSunkBoats, getPlayerTurn } from './battle-ship-game.selectors';
import { getBoatShapes } from '../boats-shapes';
import { getGameSettings } from '../game-settings';
import { PositionStateEnum } from '../../models';
import { getHitBoat } from '../../utils';

@Injectable()
export class BattleShipGameEffects {
  public analyzeShot$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryShoot),
      withLatestFrom(this.store.pipe(select(getAllBoats))),
      switchMap(([{ playerIndex, row, column }, boats]) => {
        const hitBoat = getHitBoat(playerIndex, row, column, boats);
        return [
          savePlayerMove({
            shotPosition: { playerIndex, row, column },
            state: hitBoat ? PositionStateEnum.HIT : PositionStateEnum.MISS,
          }),
          ...(hitBoat
            ? [
                hitPlayerBoat({
                  position: { playerIndex: hitBoat.playerIndex, row, column },
                  boatIndex: hitBoat.boatIndex,
                }),
              ]
            : []),
        ];
      })
    )
  );

  public checkBoatIsSunk$ = createEffect(() =>
    this.actions$.pipe(
      ofType(hitPlayerBoat),
      withLatestFrom(this.store.pipe(select(getPlayerTurn))),
      withLatestFrom(this.store.pipe(select(getBoatShapes))),
      withLatestFrom(this.store.pipe(select(getAllBoats))),
      filter(
        ([
          [
            [
              {
                boatIndex,
                position: { playerIndex },
              },
            ],
            shapes,
          ],
          boats,
        ]) => boats[playerIndex][boatIndex].hits === shapes[boats[playerIndex][boatIndex].shapeKey].shapeSize
      ),
      map(
        ([
          [
            [
              {
                boatIndex,
                position: { playerIndex },
              },
              currentPlayerIndex,
            ],
          ],
        ]) => addSunkBoat({ boatIndex, boatBelongsToPlayerIndex: playerIndex, sunkByPlayerIndex: currentPlayerIndex })
      )
    )
  );

  public checkIsGameOver$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSunkBoat),
      withLatestFrom(this.store.pipe(select(getPlayerTurn))),
      withLatestFrom(this.store.pipe(select(getCurrentGameNumberOfPlayers))), //not needed, use settings
      withLatestFrom(this.store.pipe(select(getGameSettings))),
      withLatestFrom(this.store.pipe(select(getCurrentPlayerSunkBoats))),
      filter(
        ([[[[], numOfPlayers], gameSettings], currentPlayerSunkBoats]) =>
          currentPlayerSunkBoats.length === gameSettings.boatsPerPlayer * (numOfPlayers - 1)
      ),
      map(([[[[, currentPlayerIndex]]]]) => setWinnerPlayer({ winnerPlayerIndex: currentPlayerIndex }))
    )
  );

  public selectNextPlayer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nextTurn),
      withLatestFrom(this.store.pipe(select(getPlayerTurn))),
      withLatestFrom(this.store.pipe(select(getCurrentGameNumberOfPlayers))),
      map(([[, currentPlayer], numOfPlayers]) =>
        setPlayerTurn({ playerIndex: currentPlayer + 1 < numOfPlayers ? currentPlayer + 1 : 0 })
      )
    )
  );

  constructor(private actions$: Actions, private store: Store<CoreState>) {}
}
