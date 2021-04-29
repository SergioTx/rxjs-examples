import { from, interval, of, throwError } from 'rxjs';
import {
  catchError,
  delay,
  filter,
  first,
  last,
  map,
  pluck,
  skipUntil,
  take,
  takeUntil,
  tap,
} from 'rxjs/operators';

const INTERVAL = 1000;

//! basic subscription

interval(INTERVAL).subscribe((value) => {
  console.log('CONTROL INTERVAL', value);
});

//! filter the emitter

// interval(INTERVAL)
//   .pipe(filter((value) => value % 2 === 0))
//   .subscribe((value) => {
//     console.log('PIPE FILTER only even', value);
//   });

//! delay the emission

// interval(INTERVAL)
//   .pipe(delay(1000))
//   .subscribe((value) => {
//     console.log('PIPE DELAY 1s', value);
//   });

//! modify the value

// interval(INTERVAL)
//   .pipe(map((value) => value % 2 === 0))
//   .subscribe((value) => {
//     console.log('PIPE MAP isEven', value);
//   });

// of([1, 2, 3, 4, 5, 6])
//   // different map operators
//   .pipe(map((value) => value.map((arrValue) => arrValue * 2)))
//   .subscribe((value) => {
//     console.log('MAP of map', value);
//   });

//! debug the value / side effects

// interval(INTERVAL)
//   .pipe(
//     tap((value) => {
//       console.log(value);
//     }),
//     map((value) => value % 2 === 0),
//     tap((value) => {
//       console.log(value);
//     })
//   )
//   .subscribe((value) => {
//     console.log('PIPE MAP isEven', value);
//   });

//! control errors

// throwError('This is an error!')
//   .pipe(catchError((value) => of(`I caught: ${value}`)))
//   .subscribe((value) => {
//     console.log(value);
//   });

// interval(INTERVAL)
//   .pipe(
//     map(() => {
//       throw 'This is an error!';
//     }),
//     catchError((error) => of('Error caught', error))
//   )
//   .subscribe((value) => {
//     console.log(value);
//   });

//! obtain certain properties

// from([
//   { name: 'Ana', age: 1 },
//   { name: 'David', age: 2 },
//   { name: 'Francesc', age: 3 },
//   { name: 'Ivan', age: 4 },
//   { name: 'María', age: 5 },
// ])
//   .pipe(pluck('name'))
//   .subscribe((value) => {
//     console.log(value);
//   });

// from([
//   { name: 'Ana', user: { age: 1, realName: 'Aana' } },
//   { name: 'David', user: { age: 1, realName: 'Ddavid' } },
//   { name: 'Francesc', user: { age: 1, realName: 'Ffrancesc' } },
//   { name: 'Ivan', user: { age: 1, realName: 'Iivan' } },
//   { name: 'María', user: { age: 1, realName: 'Mmaría' } },
// ])
//   .pipe(pluck('user', 'realName'))
//   .subscribe((value) => {
//     console.log(value);
//   });

//! complete (and unsubscribe) after one emission

// interval(INTERVAL)
//   .pipe(first())
//   .subscribe({
//     next(value) {
//       console.log(value);
//     },
//     complete() {
//       console.log('COMPLETE');
//     },
//   });

//! complete (and unsubscribe) after one emission that fulfills a condition (like filter + first)

// interval(INTERVAL)
//   .pipe(first((value) => value > 3))
//   .subscribe({
//     next(value) {
//       console.log(value);
//     },
//     complete() {
//       console.log('COMPLETE');
//     },
//   });

//! emit last value before completion

// from(['a', 'b', 'c', 'd', 'e'])
//   .pipe(last())
//   .subscribe({
//     next(value) {
//       console.log(value);
//     },
//     complete() {
//       console.log('COMPLETE');
//     },
//   });

//! complete (and unsubscribe) after a number of emissions

// interval(INTERVAL)
//   .pipe(take(3))
//   .subscribe({
//     next(value) {
//       console.log(value);
//     },
//     complete() {
//       console.log('COMPLETE');
//     },
//   });

//! complete (and unsubscribe) when other emits

// const unsubscriber = interval(INTERVAL).pipe(filter((value) => value > 10));
// interval(INTERVAL)
//   .pipe(takeUntil(unsubscriber))
//   .subscribe((value) => {
//     console.log(value);
//   });

//! dont emit until other emits

// const unsubscriber = interval(INTERVAL).pipe(filter((value) => value > 4));
// interval(INTERVAL)
//   .pipe(skipUntil(unsubscriber))
//   .subscribe((value) => {
//     console.log(value);
//   });
