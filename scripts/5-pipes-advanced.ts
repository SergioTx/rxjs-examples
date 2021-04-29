import { combineLatest, concat, from, interval, race } from 'rxjs';
import {
  concatMap,
  map,
  mergeMap,
  switchMap,
  take,
  withLatestFrom,
} from 'rxjs/operators';

const source = interval(5000);
const secondSource = interval(1000);

const sourceMapped = source.pipe(map((v) => 'first:' + v));
const secondSourceMapped = secondSource.pipe(map((v) => 'second:' + v));

const completeSource = from([1, 2, 3, 4, 5]);
const completeSecondSource = from([6, 7, 8, 9, 10]);

//! obtain latest from another observable

source
  .pipe(
    withLatestFrom(secondSource),
    map(([first, second]) => {
      return `First Source (5s): ${first} Second Source (1s): ${second}`;
    })
  )
  .subscribe((val) => console.log(val));

//! when one emits, emit the last value from each

// combineLatest([source, secondSource]).subscribe(([first, second]) =>
//   console.log(first, second)
// );

//! when one finished, continue with the next one

// concat(completeSource, completeSecondSource).subscribe((value) => {
//   console.log(value);
// });

//! only use the first observable that finishes (same as Promise.race)

// race(sourceMapped, secondSourceMapped).subscribe((value) => {
//   console.log(value);
// });

//! transform observables (switchMap, mergeMap/flatMap and concatMap)

//! mergeMap doesn't stop inner subscription after the outer subscription emits again. USE WITH CAUTION

// sourceMapped
//   .pipe(
//     mergeMap((value) => {
//       console.log('INNER Subscription', value);
//       // return a new observable
//       return secondSourceMapped;
//     })
//   )
//   .subscribe((value) => {
//     console.log('OUTER Subscription', value);
//   });

/*
INNER Subscription first:0
OUTER Subscription second:0
OUTER Subscription second:1
OUTER Subscription second:2
OUTER Subscription second:3
INNER Subscription first:1
OUTER Subscription second:4
OUTER Subscription second:0
OUTER Subscription second:5
OUTER Subscription second:1
OUTER Subscription second:6
OUTER Subscription second:2
OUTER Subscription second:7
OUTER Subscription second:3
OUTER Subscription second:8
INNER Subscription first:2
OUTER Subscription second:4
OUTER Subscription second:9
OUTER Subscription second:0
OUTER Subscription second:5
OUTER Subscription second:10
OUTER Subscription second:1
OUTER Subscription second:6
 */

//! switchMap does, so it's a safer alternative

// sourceMapped
//   .pipe(
//     switchMap((value) => {
//       console.log('INNER Subscription', value);
//       // return a new observable
//       return secondSourceMapped;
//     })
//   )
//   .subscribe((value) => {
//     console.log('OUTER Subscription', value);
//   });

/*
INNER Subscription first:0
OUTER Subscription second:0
OUTER Subscription second:1
OUTER Subscription second:2
OUTER Subscription second:3
INNER Subscription first:1
OUTER Subscription second:0
OUTER Subscription second:1
OUTER Subscription second:2
OUTER Subscription second:3
INNER Subscription first:2
OUTER Subscription second:0
OUTER Subscription second:1
OUTER Subscription second:2
OUTER Subscription second:3
INNER Subscription first:3
OUTER Subscription second:0
OUTER Subscription second:1
OUTER Subscription second:2
OUTER Subscription second:3
*/

//! concatMap waits until inner observable completes to continue with outer emission

// sourceMapped
//   .pipe(
//     concatMap((value) => {
//       console.log('INNER Subscription', value);
//       // return a new observable
//       return completeSource;
//     })
//   )
//   .subscribe((value) => {
//     console.log('OUTER Subscription', value);
//   });

/*
INNER Subscription first:0
OUTER Subscription 1
OUTER Subscription 2
OUTER Subscription 3
OUTER Subscription 4
OUTER Subscription 5
INNER Subscription first:1
OUTER Subscription 1
OUTER Subscription 2
OUTER Subscription 3
OUTER Subscription 4
OUTER Subscription 5
INNER Subscription first:2
OUTER Subscription 1
OUTER Subscription 2
OUTER Subscription 3
OUTER Subscription 4
OUTER Subscription 5
*/
