import { BattleShipGameEffects } from '../battle-ship-game.effects';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { getAllBoats, hitPlayerBoat } from '../../boats';
import { mockAllBoats, mockBoatShapes, mockGameSettings } from '../../../mocks/game-objcts';
import { marbles } from 'rxjs-marbles';
import {
  addSunkBoat,
  nextTurn,
  savePlayerMove,
  setPlayerTurn,
  setWinnerPlayer,
  tryShoot,
} from '../battle-ship-game.actions';
import { PositionStateEnum } from '../../../models';
import { getCurrentPlayerSunkBoats, getPlayerTurn } from '../battle-ship-game.selectors';
import { getBoatShapes } from '../../boats-shapes';
import { getCurrentGameNumberOfPlayers } from '../../players';
import { getGameSettings } from '../../game-settings';

describe('BattleShipGameEffects', () => {
  let effect: BattleShipGameEffects;
  let actions$: Observable<Action>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          BattleShipGameEffects,
          provideMockActions(() => actions$),
          provideMockStore({
            initialState: {},
            selectors: [
              {
                selector: getAllBoats,
                value: mockAllBoats,
              },
              {
                selector: getPlayerTurn,
                value: 1,
              },
              {
                selector: getBoatShapes,
                value: mockBoatShapes,
              },
              {
                selector: getCurrentGameNumberOfPlayers,
                value: 2,
              },
              {
                selector: getGameSettings,
                value: mockGameSettings,
              },
              {
                selector: getCurrentPlayerSunkBoats,
                value: {},
              },
            ],
          }),
        ],
      })
        .compileComponents()
        .then(() => {
          effect = TestBed.inject(BattleShipGameEffects);
        });
    })
  );

  describe('analyzeShot$', () => {
    it(
      'should only save player move if MISS',
      marbles((m) => {
        actions$ = m.hot('a', { a: tryShoot({ playerIndex: 0, row: 2, column: 5 }) });
        m.expect(effect.analyzeShot$).toBeObservable(
          m.hot('a', {
            a: savePlayerMove({
              shotPosition: {
                playerIndex: 0,
                row: 2,
                column: 5,
              },
              state: PositionStateEnum.MISS,
            }),
          })
        );
        m.flush();
      })
    );

    it(
      'should save player move and mark boat pos as HIT',
      marbles((m) => {
        actions$ = m.hot('a', { a: tryShoot({ playerIndex: 1, row: 2, column: 5 }) });
        m.expect(effect.analyzeShot$).toBeObservable(
          m.hot('(ab)', {
            a: savePlayerMove({
              shotPosition: {
                playerIndex: 1,
                row: 2,
                column: 5,
              },
              state: PositionStateEnum.HIT,
            }),
            b: hitPlayerBoat({ position: { playerIndex: 0, row: 2, column: 5 }, boatIndex: 0 }),
          })
        );
        m.flush();
      })
    );
  });

  describe('checkBoatIsSunk$', () => {
    let cloneBoats;

    const setHits = (hits: number = 0) => {
      cloneBoats = [...mockAllBoats];
      cloneBoats[0][0].hits = hits;
      getAllBoats.setResult(cloneBoats);
    };

    it(
      'should dispatch addSunkBoat if boat sunk',
      marbles((m) => {
        setHits(4);
        actions$ = m.hot('a', { a: hitPlayerBoat({ boatIndex: 0, position: { playerIndex: 0, row: 2, column: 5 } }) });
        m.expect(effect.checkBoatIsSunk$).toBeObservable(
          m.hot('a', { a: addSunkBoat({ boatIndex: 0, sunkByPlayerIndex: 1, boatBelongsToPlayerIndex: 0 }) })
        );
        m.flush();
      })
    );

    it(
      'should not dispatch any action if boat not sunk',
      marbles((m) => {
        setHits();
        actions$ = m.hot('a', { a: hitPlayerBoat({ boatIndex: 0, position: { playerIndex: 0, row: 2, column: 5 } }) });
        m.expect(effect.checkBoatIsSunk$).toBeObservable(m.hot('-'));
        m.flush();
      })
    );
  });

  describe('checkIsGameOver$', () => {
    it(
      'should dispatch setWinnerPlayer',
      marbles((m) => {
        getCurrentPlayerSunkBoats.setResult([{} as any, {} as any, {} as any, {} as any]); // we only check length
        actions$ = m.hot('a', { a: addSunkBoat({ boatIndex: 0, boatBelongsToPlayerIndex: 1, sunkByPlayerIndex: 0 }) });
        m.expect(effect.checkIsGameOver$).toBeObservable(m.hot('a', { a: setWinnerPlayer({ winnerPlayerIndex: 1 }) }));
        m.flush();
      })
    );

    it(
      'should not dispatch any action',
      marbles((m) => {
        actions$ = m.hot('a', { a: addSunkBoat({ boatIndex: 0, boatBelongsToPlayerIndex: 1, sunkByPlayerIndex: 0 }) });
        m.expect(effect.checkIsGameOver$).toBeObservable(m.hot('-'));
        m.flush();
      })
    );
  });

  describe('selectNextPlayer$', () => {
    it(
      'should set next player if not last',
      marbles((m) => {
        getPlayerTurn.setResult(0);
        actions$ = m.hot('a', { a: nextTurn() });
        m.expect(effect.selectNextPlayer$).toBeObservable(m.hot('a', { a: setPlayerTurn({ playerIndex: 1 }) }));
        m.flush();
      })
    );

    it(
      'should set next player to first one if last',
      marbles((m) => {
        actions$ = m.hot('a', { a: nextTurn() });
        m.expect(effect.selectNextPlayer$).toBeObservable(m.hot('a', { a: setPlayerTurn({ playerIndex: 0 }) }));
        m.flush();
      })
    );
  });
});
