// 'use strict';
// console.log(this);
//
// function fn() {
//   console.log(this);
// }
//
// fn();

// function getContext() {
//   console.log(this);
// }

// function getFullName() {
//   console.log(this);
//   return `${this.firstName} ${this.lastName}`;
// }

// console.log(getFullName());

// let account = {
//   firstName: 'Igor',
//   lastName: 'Nepipenko',
//   getFullName
//   // getFullName: function(title, subtitle) {
//   //   console.log(this);
//   //   return `${title} ${subtitle} ${this.firstName} ${this.lastName}`;
//   // }
// };

// setTimeout(function() {
//   // const fn = account.getFullName;
//   // const args = ['junior', 'developer'];
//   // console.log(fn.call(account, ...args));
//   // console.log(fn.apply(account, args));
//   // console.log(account.getFullName('developer'));
// }, 2000);


/**some example**/

// function getFullName(title, subtitle) {
//   console.log(this);
//   return `${title} ${subtitle} ${this.firstName} ${this.lastName}`;
// }
//
//
// function bind(context) {
//   const fn = this;
//   return function(...args) {
//     return fn.apply(context, args);
//   };
// }
//
// let account = {
//   firstName: 'Igor',
//   lastName: 'Nepipenko',
//   getFullName
// };
//
// Function.prototype.bind = bind;
//
// //const fn = bind(getFullName, account);
// const fn = getFullName.bind(account); // new function with context
//
// setTimeout(function() {
//   console.log(fn('junior', 'developer'));
// }, 2000);
//
// account = null;


/**********************/

/**some example **/



function logDecorator(fn) {
  return function(...args) {
    console.log(args);
    return fn.apply(this, args);
  };
}

function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}

let account = {
    firstName: 'Igor',
    lastName: 'Nepipenko',
    getFullName: logDecorator(getFullName)
  };

console.log(account.getFullName(1,2,3));

// alert = logDecorator(alert);
//
// alert('hi js');
// alert('we are developers');

/**********************/


// console.log(account.getFullName());

// console.log(account);

// const button = document.body.querySelector('.my_button');
// button.onclick = getFullName;
// const eventHandler = account.getFullName; //getFullName
// button.addEventListener('click', eventHandler);


// setTimeout(account.getFullName, 2000)


/***THIS **/
// script => window or undefined if 'use strict'
// in object this is object if call on it account.getFullName()
// if eventHandler => this is element
// setTimeout => this is window

// const str = 'developer';
//
// const newStr =
//   Array.prototype.map.call(str,(l, i) => {
//     const condition = i % 2 === 0;
//     return condition
//       ? l.toUpperCase()
//       : l;
//   })
//   .join('');
//
// console.log(newStr);