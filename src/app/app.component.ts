import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  length = this.testService.observable.pipe(map((value) => value.length));

  constructor(private testService: TestService) {}

  addElement(nextElement: string) {
    this.testService.next(nextElement);
  }
}
