import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BoardMode, BoardPositionsModel, PositionStateEnum, ShotPositionModel } from '../../../models';

@Component({
  selector: 'bs-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent implements OnInit {
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

  public boardSizeArray: number[] = [];

  public trackByRow(index: number) {
    return this.positions[index];
  }

  public onCellClick(row: number, column: number) {
    if (this.boardMode === BoardMode.Game && !this.isTurnOver && !this.positions[row]?.[column]) {
      this.cellClick.emit({ playerIndex: this.playerIndex, row, column });
    }
  }

  public ngOnInit(): void {
    this.boardSizeArray = this.numSequence(this.boardSize);
  }

  private numSequence(n: number): Array<number> {
    return Array(n);
  }
}
