import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

// const subject = new Subject<number>();
// subject.subscribe((value) => {
//   console.log('SUBJECT', value);
// });
// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.complete();

//! Subject subscription order

// const subject2 = new Subject<number>();

// subject2.next(1);
// subject2.next(2);
// subject2.subscribe((value) => {
//   console.log('SUBJECT2', value);
// });
// subject2.next(3);
// subject2.complete(); // unsubscribe when complete

//! BehaviorSubject

// const behaviorSubject = new BehaviorSubject<number>(0);
// behaviorSubject.subscribe((value) => {
//   console.log('BEHAVIOR_SUBJECT', value);
// });
// behaviorSubject.next(1);
// behaviorSubject.next(2);
// behaviorSubject.next(3);
// behaviorSubject.complete();

//! BehaviorSubject subscription order

// const behaviorSubject2 = new BehaviorSubject<number>(0);
// behaviorSubject2.next(1);
// behaviorSubject2.next(2);
// behaviorSubject2.subscribe((value) => {
//   console.log('BEHAVIOR_SUBJECT2', value);
// });
// behaviorSubject2.next(3);
// behaviorSubject2.complete();
// // after completion nothing happens, all new subscribers will call complete() and finish instantly
// behaviorSubject2.next(3);
// behaviorSubject2.subscribe({
//   next(value) {
//     // will never be called
//     console.log('BEHAVIOR_SUBJECT2 After Complete', value);
//   },
//   complete() {
//     console.log('Complete');
//   },
// });

//! Other kind of subjects -> ReplaySubject: BehaviorSubject with buffer of more than 1

// const replaySubject = new ReplaySubject(3);
// replaySubject.next(1);
// replaySubject.next(2);
// replaySubject.next(3);
// replaySubject.next(4);
// replaySubject.subscribe((value) => {
//   console.log('REPLAY_SUBJECT', value);
// });
// replaySubject.next(5);
// replaySubject.next(6);
// replaySubject.next(7);
// replaySubject.subscribe((value) => {
//   console.log('REPLAY_SUBJECT Second sub', value);
// });

// replaySubject.complete();

//! Other kind of subjects -> AsyncSubject: emits last value on completion only

const asyncSubject = new AsyncSubject();
asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);
asyncSubject.next(4);
asyncSubject.subscribe((value) => {
  console.log('ASYNC_SUBJECT', value);
});
asyncSubject.next(5); // nothing logged
asyncSubject.next(6); // nothing logged
asyncSubject.subscribe((value) => {
  console.log('ASYNC_SUBJECT Second sub', value);
});

asyncSubject.next(7); // nothing logged
asyncSubject.complete(); // logged 7 in both subcribers
