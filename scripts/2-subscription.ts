import { interval, Subscription } from 'rxjs';

const subscription1: Subscription = interval(10).subscribe((value) =>
  console.log(value)
);
setTimeout(() => {
  console.log(subscription1.closed);
  subscription1.unsubscribe();
  console.log(subscription1.closed);
}, 50);

//! multiple subscriptions

// const subscription2 = interval(10).subscribe((value) =>
//   console.log('1-', value)
// );
// const subscription3 = interval(10).subscribe((value) =>
//   console.log('2-', value)
// );
// const subscription4 = interval(10).subscribe((value) =>
//   console.log('3-', value)
// );

// setTimeout(() => {
//   console.log(
//     'CLOSED STATUS',
//     subscription2.closed,
//     subscription3.closed,
//     subscription4.closed
//   );
//   subscription2.unsubscribe();
//   subscription3.unsubscribe();
//   subscription4.unsubscribe();
//   console.log(
//     'CLOSED STATUS',
//     subscription2.closed,
//     subscription3.closed,
//     subscription4.closed
//   );
// }, 50);

//! multiple subscriptions (with add)

// const subscription5 = interval(10).subscribe((value) =>
//   console.log('1-', value)
// );
// const subscription6 = interval(10).subscribe((value) =>
//   console.log('2-', value)
// );
// subscription5.add(subscription6);
// const subscription7 = interval(10).subscribe((value) =>
//   console.log('3-', value)
// );
// subscription5.add(subscription7);

// setTimeout(() => {
//   console.log(
//     'CLOSED STATUS',
//     subscription5.closed,
//     subscription6.closed,
//     subscription7.closed
//   );
//   subscription5.unsubscribe();
//   console.log(
//     'CLOSED STATUS',
//     subscription5.closed,
//     subscription6.closed,
//     subscription7.closed
//   );
// }, 50);

//! Subscription object (when you don't know which subscription is created first)

// const masterSubscription = new Subscription();

// const subscription8 = interval(10).subscribe((value) =>
//   console.log('1-', value)
// );
// masterSubscription.add(subscription8);
// const subscription9 = interval(10).subscribe((value) =>
//   console.log('2-', value)
// );
// masterSubscription.add(subscription9);
// const subscription10 = interval(10).subscribe((value) =>
//   console.log('3-', value)
// );
// masterSubscription.add(subscription10);

// setTimeout(() => {
//   console.log(
//     'CLOSED STATUS',
//     subscription8.closed,
//     subscription9.closed,
//     subscription10.closed
//   );
//   masterSubscription.unsubscribe();
//   console.log(
//     'CLOSED STATUS',
//     subscription8.closed,
//     subscription9.closed,
//     subscription10.closed
//   );
// }, 50);
