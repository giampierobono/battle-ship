import { GameEffects } from '../game-settings.effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { mockState } from '../../../mocks/store';
import { addPlayers, getCurrentGameNumberOfPlayers } from '../../players';
import { addBoatsToPlayer, getTotalNumberOfBoats } from '../../boats';
import { setGameSettings } from '../game-settings.actions';
import { mockBoatShapesArray } from '../../../mocks/game-objcts';
import { marbles } from 'rxjs-marbles';
import * as gameUtils from '../../../utils';

describe('Game settings effects', () => {
  let effects: GameEffects;
  let actions$: Observable<Action>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          GameEffects,
          provideMockActions(() => actions$),
          provideMockStore({
            initialState: mockState,
            selectors: [
              {
                selector: getCurrentGameNumberOfPlayers,
                value: 0,
              },
              {
                selector: getTotalNumberOfBoats,
                value: 0,
              },
            ],
          }),
        ],
      })
        .compileComponents()
        .then(() => {
          effects = TestBed.inject(GameEffects);
        });
    })
  );

  describe('createPlayers$', () => {
    it(
      'should create players for the new game and dispatch addPlayers',
      marbles((m) => {
        const spyCreatePlayer = jest.spyOn(gameUtils, 'createPlayers').mockImplementation(() => []);
        actions$ = m.hot('a', {
          a: setGameSettings({ boatsPerPlayer: 8, numOfPlayers: 4, boardSize: 8, shapes: mockBoatShapesArray }),
        });
        m.expect(effects.createPlayers$).toBeObservable(m.hot('a', { a: addPlayers({ players: [] }) }));
        m.flush();
        expect(spyCreatePlayer).toHaveBeenCalled();
      })
    );

    it(
      'should not try to create players if already game on going',
      marbles((m) => {
        getCurrentGameNumberOfPlayers.setResult(2);
        getTotalNumberOfBoats.setResult(8);
        actions$ = m.hot('a', {
          a: setGameSettings({ boatsPerPlayer: 8, numOfPlayers: 4, boardSize: 8, shapes: mockBoatShapesArray }),
        });
        m.expect(effects.createPlayers$).toBeObservable(m.hot('-'));
        m.flush();
      })
    );
  });

  describe('createBoats$', () => {
    it(
      'should create boats for all players and dispatch addBoatsToPlayer',
      marbles((m) => {
        const spyCreateBoats = jest.spyOn(gameUtils, 'createBoatsForAllPlayers').mockImplementation(() => []);
        actions$ = m.hot('a', { a: addPlayers({ players: [] }) });
        m.expect(effects.createBoats$).toBeObservable(m.hot('a', { a: addBoatsToPlayer({ boats: [] }) }));
        m.flush();
        expect(spyCreateBoats).toHaveBeenCalled();
      })
    );
  });
});
