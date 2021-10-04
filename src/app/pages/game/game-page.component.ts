import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { boatShapes } from './constants/game-shapes.constants';
import { BoatModel, PlayerModel } from '../../../models';
import { setGameSettings } from '../../../store/game-settings';
import {
  getCurrentPlayerSunkBoats,
  getIsCurrentTurnOver,
  getIsGameOver,
  getPlayerTurn,
  getSunkBoatPerPlayer,
  getTotalFiredShots,
  nextTurn,
} from '../../../store/battleship-game';
import { resetGame } from '../../store/actions/reset-game.actions';
import { AppState } from '../../store/reducers';

@Component({
  selector: 'bs-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  public turnIsOver$: Observable<boolean> | undefined;

  public currentPlayerSunkBoats$: Observable<Array<{ player: PlayerModel; boat: BoatModel }>> | undefined;

  public sunkBoatsPerPlayer$: Observable<Array<number>> | undefined;

  public isGameOver$: Observable<boolean> | undefined;

  public currentPlayerTurn$: Observable<number> | undefined;

  public totalFiredShots$: Observable<number> | undefined;

  constructor(private store: Store<AppState>) {}

  public ngOnInit() {
    this.store.dispatch(
      setGameSettings({
        boatsPerPlayer: 4,
        numOfPlayers: 2,
        shapes: boatShapes,
        boardSize: 8,
      })
    );
    this.turnIsOver$ = this.store.pipe(select(getIsCurrentTurnOver));
    this.currentPlayerSunkBoats$ = this.store.pipe(select(getCurrentPlayerSunkBoats));
    this.isGameOver$ = this.store.pipe(select(getIsGameOver));
    this.currentPlayerTurn$ = this.store.pipe(select(getPlayerTurn));
    this.totalFiredShots$ = this.store.pipe(select(getTotalFiredShots));
    this.sunkBoatsPerPlayer$ = this.store.pipe(select(getSunkBoatPerPlayer));
  }

  public onNextTurn() {
    this.store.dispatch(nextTurn());
  }

  public restartGame() {
    this.store.dispatch(resetGame());
  }
}
