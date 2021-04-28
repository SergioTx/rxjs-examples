import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
  list = this.testService.observable;

  constructor(private testService: TestService) {
    // To show repainting
    console.log('Constructor TestComponent');
  }

  removeElement(index: number) {
    this.testService.removeIndex(index);
  }
}
