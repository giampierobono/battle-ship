import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  public isEnabled: boolean = true;

  @Input()
  public text: string = '';

  @Output()
  public buttonClick: EventEmitter<void> = new EventEmitter<void>();
}
