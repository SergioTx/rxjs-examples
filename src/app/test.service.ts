import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private subject = new BehaviorSubject<string[]>([]);

  observable = this.subject.asObservable();

  next(name: string) {
    const previousValue = this.subject.getValue();
    const nextValue = [...previousValue, name];
    this.subject.next(nextValue);
  }

  removeIndex(index: number) {
    const previousValue = this.subject.getValue();
    const nextValue = previousValue.filter(
      (_value, arrIndex) => index !== arrIndex
    );
    this.subject.next(nextValue);
  }
}
