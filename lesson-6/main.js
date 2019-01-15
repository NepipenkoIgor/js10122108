/*
element.onclick = (event)=>{
  event.preventDefault();
}*/

// log1();
// log1('async', 3);
//
// function log1(type = 'info', value = 1) {
//   console.log(`${type} ===> ${value}`);
// }


// let log2 = function() {
//   console.log(2);
// };
// log2();


// let log = function(a,b,cb) {
//   console.log(cb);
//   cb && cb();
// }
//
// log(log);

// cb/promise(async/await)/generator/observable

// const {x, y} = {x: 1, y:2}
// log1({ x: 1, y: 2 })
//
// function log1({ x, y }) {
//   console.log(`${x} ===> ${y}`);
// }
// document.querySelector('input')
//   .addEventListener('keyup', buttonHandler('username'));
// // const { target: { value } } = event;
//
// function buttonHandler(type) {
//   return function({ target: { value } }) {
//     console.log(`${type} ${value}`);
//   };
// }
// debugger;
// var a = 1;
// function b(){
//   var a = 2
//   console.log('output2', a);
// }
// console.log('output1', a);
//
// b();


// debugger;
//
// function counterFactory() {
//   let count = 0;
//   return function counter() {
//     count++;
//     console.log(`${type} ===> ${count}`);
//   };
// }
//
// let type = 'counter 1';
// let counter1 = counterFactory();
// type = 'counter 2';
// let counter2 = counterFactory();
//
// counter1();
// counter1();
// counter1();
//
// counter2();
// counter2();
// counter2();

// for (var i = 0; i < 5; i++) {
//   setTimeout(((index) => {
//     console.log(index);
//   })(i));
// }
//
// (function(param) {
//   console.log(param);
// })(10);

function counterCreator(step = 1) {
  let privateCounter = 0;
  return {
    increment: function() {
      privateCounter += step;
    },
    decrement: function() {
      privateCounter -= step;
    },
    value: function() {
      return privateCounter;
    },
  };
}

let counter1 = counterCreator();
console.log(counter1);
let counter2 = counterCreator(3);


counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();
console.log(counter1.value());


counter2.increment();
counter2.increment();
counter2.increment();
counter2.decrement();
console.log(counter2.value());