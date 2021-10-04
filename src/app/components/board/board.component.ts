import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BoardPositionsModel, PositionStateEnum, ShotPositionModel } from '../../../models';

export enum BoardMode {
  Game,
  VisualizePlayerBoats,
}
@Component({
  selector: 'bs-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  @Input()
  public boardMode: BoardMode = BoardMode.Game;

  @Input()
  public boardSize: number = 0;

  @Input()
  public playerIndex: number = -1;

  @Input()
  public positions: BoardPositionsModel = {};

  @Input()
  public isTurnOver: boolean = false;

  @Output()
  public cellClick: EventEmitter<ShotPositionModel> = new EventEmitter<ShotPositionModel>();

  public BoardMode = BoardMode;

  public PositionStateEnum = PositionStateEnum;

  public numSequence(n: number): Array<number> {
    return Array(n);
  }

  public onCellClick(row: number, column: number) {
    if (this.boardMode === BoardMode.Game && !this.isTurnOver && !this.positions[row]?.[column]) {
      this.cellClick.emit({ playerIndex: this.playerIndex, row, column });
    }
  }
}
