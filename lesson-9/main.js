/******** Cache ************ */

// let val  = {};
// console.log(val.toString());
// function getUser(user) {
//   return user.id + Math.random()
// }

// function chached(fn) {
//   const cache = new Map();
//   return function (user) {
//     if (!cache.has(user)) {
//        cache.set(user,fn(user));
//     }
//     return cache.get(user);
//   }
// }

// const cachedFn = chached(getUser)  // 
// let user = {id: 2};
// console.log(cachedFn(user));
// console.log(cachedFn({id: 1}));
// console.log(cachedFn(user));
// console.log(cachedFn(user));
// console.log(cachedFn({id: 2}));
/******** Cache  end************ */


/******** Debounce************ */
// const searchField = document.body.querySelector('.search');
// searchField.addEventListener('input', debounce(eventHandler, 300))

// function eventHandler({ target: { value } }) {
//   console.log(value)
// }


// function debounce(fn, delay) {
//   let timerId;
//   return function (...args) {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       fn.apply(this, args)
//     }, delay)
//   }
// }
/******** Debounce  end************ */

/****** Event loop  ******/
// task1 -----------------task2(timeout1) ----------------- task3(timeout2)
// start
// end
// microTask( Promise 1)
// microTask( Promise 2)

// macro setTimeout, setInternal, setImmediate,
// micro Promises,

// console.log('start');
// setTimeout(()=> console.log('timeout 1'));
// setTimeout(()=> console.log('timeout 2'));
// Promise.resolve().then(()=> console.log('Promise 1'));
// Promise.resolve().then(()=> console.log('Promise 2'));
// console.log('end');

/****** Event loop  end ******/

/******** Throttle ************ */

// document.addEventListener('mousemove', throttle(eventHandler, 1000))
// function eventHandler({ clientX }) {
//   console.log(clientX)
// }

// function throttle(fn, delay) {

//   let isBusy = false;
//   let lastArgs = null;

//   return function (...args) {
//     if (isBusy) {
//       lastArgs = args;
//       return;
//     }
//     isBusy = true;

//     setTimeout(() => {
//       isBusy = false;
//       if (lastArgs) {
//         fn.apply(this, args)
//       }
//     }, delay)

//    // fn.apply(this, args)
//   }

// }
/******** Throttle  end************ */

function User(firstName, surname) {
  this.firstName = firstName;
  this.surname = surname;
}

User.prototype.getName = function () {
  return `${this.firstName} ${this.surname}`;
}


function Teacher(firstName, surname, subject, room) {
  User.call(this, firstName, surname)
  this.subject = subject;
  this.room = room;
}

Teacher.prototype = Object.create(User.prototype);
Teacher.prototype.constructor = Teacher;


Teacher.prototype.getRoom = function () {
  return `${this.room}`;
}

let user1 = new User('Vlad', 'Loban');
let teacher1 = new Teacher('Igor', 'Nepipenko', 'javascript', 300);

 console.log(user1);
 console.log(teacher1.getName());
 console.log(teacher1.getRoom());
// console.log(user());


// console.log(user1.getName());
// console.log(user1.__proto__);
// console.log(user1.__proto__ === User.prototype);

// let strObj = new String('str')
// console.log(strObj.__proto__);
// console.log(strObj.__proto__ === String.prototype);

// class User {

// }

// class Teacher extends User {}