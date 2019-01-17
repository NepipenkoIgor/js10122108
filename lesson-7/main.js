// function sayHi() {
//   return ()=>{};
// }
//
// var funcCode = sayHi;
//
// console.log(funcCode);
//
// var funcResult = sayHi();
//
// console.log(funcResult);
// console.log(funcCode());
//
// funcResult();
// const fn = sum(1);
// fn(2);
//
// function sum(a) {
//   return function(b) {
//     return a + b;
//   };
// }
//
// console.log(sum(1)(2));
// console.log(sum(1)(-2));

//debugger;
//
// function bufferCreator() {
//   let cache = '';
//
//   function buff(value) {
//     cache = `${cache}${value}`;
//     return cache;
//   }
//
//   buff.clear = function(){
//     cache = '';
//   };
//
//   return buff;
// }
//
// const buffer = bufferCreator(); // link to buff;
//
// console.log(Object.keys(buffer));
// buffer('hi');
// buffer.clear();
// buffer(' all');
// console.log(buffer('!!!!'));
// function oneShooter(val) {
//   return function() {
//     return val;
//   };
// }

// debugger;
// function makeArmy() {
//   var shooters;
//   var shooter;
//   shooters = [];
//
//   for (var i = 0; i < 3; i++) {
//     shooter = oneShooter(i);
//     shooters.push(shooter);
//   }
//
//   return shooters;
// }
//
// var army = makeArmy();
//
// console.log(army[0]()); // стрелок выводит 10, а должен 0
// console.log(army[2]()); // стрелок выводит 10...

// debugger;
//
// function sumFn(...args) {
//   return args.reduce((sum, el) => {
//     sum += el
//     return sum;
//   }, 0);
// }
//
// console.log(sumFn(1, 2));
// console.log(sumFn(1, 2, 2));
// console.log(sumFn(1, 2, 2, 0, 3));
//
//
//
// function sum1(arg) {
//   let sum2 = 0;
//   arg.forEach(function(item) { sum2 += item;})
//   return sum2;
// }
//
// sum1([1, 2, 3]);


// function wrapper(obj) {
//   const newO = {...obj};
//   obj.count = 4;
//   return (newO);
// }
//
// let o = { name: 'Igor', count: 1 };
//
// let o1 = wrapper({ name: 'Igor', count: 1 });
//
// console.log(o);
// console.log(o1);

// console.log('GLOBAL ===> ', this)

// 'use strict';
//
// let account = {
//   name: 'Igor',
//   sum: 5,
//   log: function() {
//     console.log('In Account ===>', this.sum);
//   }
// };
// const fn = account.log.bind(account);  // create new function with new this
// const fn = account.log;

// setTimeout(()=>{
//   fn.call(account);// call  with new this
//   // account.log(); // this is account
// }, 3000);

// const fn = account.log;
//
// function wrapper() {
//   console.log('In Wrapper', this);
//   fn();
//   account.log();
// }
//
// wrapper();


// 'use strict';
//
// function fn() {
//
//   console.log(this);
// }
//
// fn();

function makeCounter() {
  var count = 1;
  console.log(count);
  // return function() {
  //   return count += 1;
  // };
}

const counter = makeCounter(); // (*)
const counter2 = makeCounter();

counter();
counter();
counter();
counter2();