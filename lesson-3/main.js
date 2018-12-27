// while(){}
//
// do{} while()

// for (let i = 0; i < 10; i++) {
// }
//
// for (let a of [1, 2, 3]) {
// }
// for (let a in {a: 1, b: 2}) {
// }

// let point = [{x: 1}, {y: 2}, {z: 3}];
// let arr2 = Array(10);
// let arr3 = Array(1, 2, 3, 4, 5);
// console.log(point);
// console.log(arr2);
// console.log(arr3);
// console.log(typeof arr1);
// console.log(point instanceof Array);
// console.log(Array.isArray(point));
// console.log(arr2.fill({name: ''}, 2, 5));
//
// arr2[100] = 'hi all';
//
// console.log(arr2);

// let x = point[0];
// let y = point[1];
// let z = point[2];
// let {point: [x, y, z]} = {point: [1, 2, 3]};
// let [{x: poinX}, {y: pointY}] = [{x: 1}, {y: 1}];
// console.log(poinX, pointY);

// let point = {
//     coordX: {value: 1},
//     coordY: {value: 2},
//     coordZ: {value: 3},
// };
// console.log(point);
// //let x = point.coordX.value;
//
// let {coordX: {value: x}, coordY: {value: y}, coordZ: {value: z}} = point;
//
// point.coordX.value = 4;
// console.log(x, y, z);

// let point = [
//     {value: 1},
//     {value: 2},
//     {value: 3},
// ];
//
// let [x, {value: y}, {value: z}] = point;
// point[0].value = 6;
// console.log(x, y, z);

// let [{value1}, {value2}, {value3}] = [{value1: 1}, {value2: 1}, {value3: 1}];

// let arr1 = [1, [{name: 'Igor'}], null, 3, undefined, 4, true, NaN, '', 0, {name: 'Vlad'}, {}];
// let arr1 = [{name: 'Igor', role: 'superadmin', age: 7},
//     {name: 'Evgenia', role: 'user', age: 20},
//     {name: 'Yla', role: 'user', age: 20},
//     {
//         name: 'Serg',
//         role: 'user',
//         age: 5
//     }];

// let arr2 = arr1.slice(1,3);
// console.log('PUSH', arr1.push(10));
// console.log(arr1);
// console.log('POP', arr1.pop());
// console.log(arr1);
// let arr2 = [...arr1.slice(0, 2), 10, ...[4, 5], ...arr1.slice(2, arr1.length)];
//let arr3 = arr1.splice(1,0,'my string');
// console.log(arr1.concat(1, 2));
// console.log(arr1);
// console.log(arr3);
// let forEach = arr1.forEach((value, index, arr) => {
//     console.log('value', value);
//     console.log('index', index);
//     console.log('arr', arr);
// });
//
// console.log(forEach);

// let map = arr1.map((value, index, arr) => {
//     console.log('value', value);
//     console.log('index', index);
//     console.log('arr', arr);
//     return {value};
// });
// console.log(map);
// cb = (value): boolean
// let users = arr1.filter((user) => user.role === 'user');
// console.log(users);

// let arr2 = ['igor', 'anya', 'bob'];
// let arr3 = [11, 1, -1, 10, 0, 5];
// let arr4 = [{i}, 1, -1, 10, 0, 5];
// const trueSorting = arr1.sort((user2, user1) => {
//     console.log(user1, user2)
//     if (user1.age > user2.age) {
//         return -1;
//     }
//     if (user1.age < user2.age) {
//         return 1;
//     }
//     return 0;
// })
// // console.log(arr2.sort());
// console.log(trueSorting);

// let notAdaults = arr1.some((user) => user.age <= 20);
// console.log(notAdaults);
// let permissions = [
//     {
//         _id: 8818,
//         name: 'Igor',
//         permission: true,
//     },
//     {
//         _id: 9129,
//         name: 'Max',
//         permission: false,
//     },
//     {
//         _id: 142,
//         name: 'Anna',
//         permission: true,
//     },
//     {
//         _id: 88,
//         name: 'Evgenia',
//         permission: false,
//     },
// ];
//
// let _id = 142;
// let index = permissions.findIndex((user) => user._id === _id);
// console.log(permissions[index]);
// _id = 9129;
// index = permissions.findIndex((user) => user._id === _id);
// console.log(permissions[index]);
//
//
//
//
// let usersWithPermission = permissions.reduce((hashMap, user) => {
//     hashMap[user._id] = {name: user.name, permission: user.permission};
//     return hashMap;
// },{});
//
// console.log(usersWithPermission[_id]);
// _id = 9129;
// console.log(usersWithPermission[_id]);

// let person1 = {
//     info: {
//         bonus: 30
//     },
//     name: 'Igor',
//     age: 32
// }
// let person2 = {
//     name: 'Igor',
//     age: 32,
//     info: {
//         bonus: 30,
//     }
// }

// const objStr1 = JSON.stringify(person1);
// const objStr2 = JSON.stringify(person2);
// console.log(objStr1);
// console.log(objStr2);
// console.log(objStr1 === objStr2);
// let a = {b: undefined};
// let c = {a: undefined};
// let a = {"1": indefined};
// let b = {1: undefined};
//
// function deepEqual(value1, value2) {
//     if (value1 === value2) {
//         return true;
//     }
//     if (value1 === null || value2 === null) {
//         return false;
//     }
//
//     if (typeof value1 !== 'object' || typeof value2 !== 'object') {
//         return false;
//     }
//
//     if (Object.keys(value1).length !== Object.keys(value2).length) {
//         return false;
//     }
//     return Object.keys(value1).every((key) => {
//         if (!value2.hasOwnProperty(key)) {
//             return false;
//         }
//         return deepEqual(value1[key], value2[key]);
//     });
// }
//
// // console.log(deepEqual(person1, person2));
// console.log(deepEqual(a, b));
//
// let styles = `position: fixed;
//               width: 100%;
//               height: 80%;
//               border:1px solid red;
//               `;
//
//
// function styleToObject(stylesString) {
//     return stylesString
//         .split(';')
//         .map(style => style.trim())
//         .filter(Boolean)
//         .map(style => style.split(':'))
//         .reduce((styles, [styleName, styleValue]) => {
//             styles[styleName] = styleValue.trim();
//             return styles;
//         }, {});
// }
//
// styleToObject(styles);

// let account = {
//     name: 'Igor'
//     , age: 32,
// };


