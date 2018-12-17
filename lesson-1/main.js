// let width =  Math.round(3/4)
// let a = 1;
//
// if(a===1) {
//     console.log(a);
// }
//
// // for(let i=1; i<3; i++){
// //
// // }
// //
// // while(a>1){
// //
// // }

// let a = Math.round(3/4);
// console.log(a);
//
// debugger;
// a = a + 2;
//
// let b = 1;
// console.log(b);
//
// 'use strict';
// mistypedVaraible = 17;


/*
number,string, boolean,null, undefined, symbol, bigint
 */

// let decimal = 5.5;
// let hex = 0xf00d;
// let octal = 0o744;
// let binary = 0b1010;
// let myInfinity = Infinity;
// let nan = NaN;
// console.log(typeof decimal);
// console.log(typeof hex);
// console.log(typeof octal);
// console.log(typeof binary);
// console.log(typeof myInfinity);
// console.log(typeof nan);
// // a.toFixed() -> Number(1).

// null, undefined, NaN, '', 0
// let b = 0;
// let a = [1,2];
// if(b === 0) {
//
// }
//
// let b = 5 && true
// let  c =   4 || 6 && true


// let a = 1 + 4;
//
// let b = 'my';
// let c = b.concat('?', '!');
// console.log();

// function calculate(cb = () => {
// }) {
//     //
//     cb();
// }

// calculate();

// let account = {
//     name: 'Igor',
//     age: null
// };
// console.log(account.age);
// console.log(account.info);
// let a = {
//     a: 1,
// };
// let c = {
//     a: 1,
// };
// let b = a;
// // let key = 'a';
// b.a = 2;
//
// console.log(a === b);
// console.log(c === b);

// let a = 1;
// let b = a + 2;
//
// a = 5;
let a = {b: {a:1}};
let b = {b: {a:1}};
console.log(a.b.a === b.b.a);