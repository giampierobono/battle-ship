import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BoardMode, BoardPositionsModel, ShotPositionModel } from '../../../models';
import {
  getAllBoatsPositionsForCurrentPlayer,
  getIsCurrentTurnOver,
  getPlayerMoves,
  getPlayerTurn,
  tryShoot,
} from '../../../store/battleship-game';
import { getBoardSize } from '../../../store/game-settings';

@Component({
  selector: 'bs-boards-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardContainerComponent implements OnInit {
  public currentPlayerBoatsPositions$: Observable<BoardPositionsModel> | undefined;

  public currentPlayerMoves$: Observable<BoardPositionsModel> | undefined;

  public currentPlayerIndex$: Observable<number> | undefined;

  public isTurnOver$: Observable<boolean> | undefined;

  public BoardMode = BoardMode;

  public boardSize$: Observable<number> | undefined;

  constructor(private store: Store) {}

  public ngOnInit() {
    this.isTurnOver$ = this.store.pipe(select(getIsCurrentTurnOver));
    this.currentPlayerBoatsPositions$ = this.store.pipe(select(getAllBoatsPositionsForCurrentPlayer));
    this.currentPlayerIndex$ = this.store.pipe(select(getPlayerTurn));
    this.boardSize$ = this.store.pipe(select(getBoardSize));
    this.currentPlayerMoves$ = this.store.pipe(select(getPlayerMoves));
  }

  public onPlayerShot($event: ShotPositionModel) {
    this.store.dispatch(tryShoot($event));
  }
}
