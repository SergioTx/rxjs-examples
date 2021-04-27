import { EMPTY, from, interval, of, throwError } from 'rxjs';

const promise = new Promise((res) => {
  setTimeout(() => {
    res('Promise resolved');
  }, 50);
});

promise.then((value) => {
  console.log('PROMISE', value);
});

// Simple promise-like observable that emits once and completes
// of('Hola').subscribe((value) => {
//   console.log('OF', value);
// });

// of('Hola').subscribe(
//   (value) => {
//     console.log('OF', value);
//   },
//   undefined,
//   () => {
//     console.log('complete');
//   }
// );

// of('Hola').subscribe({
//   next(value) {
//     console.log('OF', value);
//   },
//   complete() {
//     console.log('complete');
//   },
// });

// Observable that emits one error
// throwError('ERROR').subscribe(undefined, (value) => {
//   console.log('ERROR THROW_ERROR', value);
// });

// throwError('ERROR').subscribe({
//   error(value) {
//     console.log('ERROR THROW_ERROR', value);
//   },
// });

// Observable that only completes
// EMPTY.subscribe(undefined, undefined, () => {
//   console.log('COMPLETE EMPTY');
// });

// EMPTY.subscribe({
//   complete() {
//     console.log('COMPLETE EMPTY');
//   },
// });

// turns any iterable or Promise into a Observable
// from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).subscribe((value) => {
//   console.log('FROM num array', value);
// });

// from('Hi there').subscribe((value) => {
//   console.log('FROM string:', value);
// });

// from(promise).subscribe((value) => {
//   console.log('FROM promise:', value);
// });

// Observable that emits every 500ms. Never completes
// interval(500).subscribe((value) => {
//   console.log('INTERVAL', value);
// });
