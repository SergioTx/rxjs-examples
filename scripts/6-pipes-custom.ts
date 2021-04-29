import { interval, Observable, pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

const source = interval(300);

//! basic custom pipe (chaining rxjs operators)

const draw = (symbol: string) =>
  pipe(
    filter((value: number) => value > 0),
    map((value: number) => symbol.repeat(value))
  );

source.pipe(draw('*')).subscribe((value) => {
  console.log(value);
});

//! basic custom logger pipe

// const log = () => pipe(tap((value) => console.log('custom log: ', value)));

// source.pipe(log()).subscribe((value) => {
//   console.log(value);
// });

//! more complex custom pipe (this one does nothing)

// const myOperator = <T>(source: Observable<T>) => {
//   return source;
// };

// source.pipe(myOperator).subscribe((value) => {
//   console.log(value);
// });

//! function that returns a complex custom pipe

// const fnMyOperator2 = (symbol: string) => {
//   const myOperator2 = <T extends number>(source: Observable<T>) => {
//     return source.pipe(
//       filter((value: number) => value > 0),
//       map((value: number) => symbol.repeat(value))
//     );
//   };
//   return myOperator2;
// };

// source.pipe(fnMyOperator2('🍌')).subscribe((value) => {
//   console.log(value);
// });

//! more complex custom pipe that replaces previous observable

// const myOperator3 = <T>(_source: Observable<T>) => {
//   // return a new observable
//   return new Observable((subscriber) => {
//     subscriber.next('🥒');
//     subscriber.complete();
//   });
// };

// source.pipe(myOperator3).subscribe((value) => {
//   console.log(value);
// });
