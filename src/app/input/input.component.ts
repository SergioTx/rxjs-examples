import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

const ENTER_KEY = 'Enter';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  inputValue = '';

  @Output() private add = new EventEmitter<string>();

  onAdd() {
    this.add.emit(this.inputValue);
    this.inputValue = '';
  }

  onKeyPress({ key }: KeyboardEvent) {
    if (key === ENTER_KEY) {
      this.onAdd();
    }
  }
}
