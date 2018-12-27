let myKey = 'info';

let obj1 = {
    customInfo: 'some info',
    a: 1,
    1: 'number',
    '!!date_$_now': 1231,
    // [myKey]: 'value for my key',
    info: {
        name: 'Igor'
    }
};

// obj1[myKey] = 'value for my key';

// let str = '!!date_$_now';
// console.log(`obj1.a ==> ${obj1.a}`);
// console.log(`obj1['a'] ==> ${obj1['a']}`);
// console.log(`obj1.customInfo ==> ${obj1.customInfo}`);
// console.log(`obj1.str => ${obj1.str}`);
// console.log(`obj1[str] => ${obj1[str]}`);
// console.log(`obj1.info => ${obj1.info}`);
// console.log(`INFO => ${obj1.info.name}`);
// console.log(`INFO => ${obj1.info['name']}`);
// let obj2 = Object({b: true});
// console.log(obj1, obj2);

// let MY_CONST = {name: 'Igor'};
// MY_CONST = 1;
//
// console.log(MY_CONST);
//
// delete obj1["!!date_$_now"];
// console.log(1111, delete obj1.info);
// delete obj1.myKey;
// console.log(obj1)

// for(let key in obj1 ) {
//     console.log(`{ ${key} : ${obj1[key]} }`);
// }
//
// Object.keys(obj1).forEach((key)=>{
//     console.log(`{ ${key} : ${obj1[key]} }`);
// });
// let obj = {a: 1};
// obj.__proto__ = {b: 2};
// let c = {d: 0};
// let obj = Object.create(c, {a: {enumerable: false, value: 1, configurable: true}});
// // console.log(delete c.d);
// console.log(obj);
//
// for (let key in obj) {
//     // if (!obj.hasOwnProperty(key)) {
//     //     continue;
//     // }
//     console.log(`for in v1  { ${key} : ${obj[key]} }`);
// }
// Object.defineProperty(obj, 'a', {enumerable: true});
// for (let key in obj) {
//     // if (!obj.hasOwnProperty(key)) {
//     //     continue;
//     // }
//     console.log(`for in v2 { ${key} : ${obj[key]} }`);
// }
//
// Object.keys(obj).forEach((key) => {
//     console.log(`Object.keys { ${key} : ${obj[key]} }`);
// });

// let a = {a: 1};
// let b = a;
// console.log(Object.is(a, b));
// let obj = {
//     a: 1,
//     b: 2,
//     get [Symbol.toStringTag](){
//         return 'Hi all this is JS';
//     },
//     [Symbol.iterator]() {
//         const keys = Object.keys(this);
//         let index = 0;
//         return {
//             next() {
//                 if (index > keys.length - 1) {
//                     return {done: true};
//                 }
//                 return {
//                     done: false,
//                     value: keys[index++]
//                 };
//             }
//         };
//     }
// };
// for (let key of obj) {
//     console.log(`for of v1  { ${key} : ${obj[key]} }`);
// }
// console.log(obj.toString());

let account = {
    name: 'Igor',
    surname: 'Nepipenko',
    info: {
        code: 123123
    },
    muInfo(){},
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(obj1) {
        this.name = obj1.name;
        this.surname = obj1.surname;
    }
};
// const {name: myAccountName, info: {code}, surname, age = 33} = account;
// function a({name: myAccountName, info: {code}, surname, age = 33}){
//     console.log(myAccountName);
//     console.log(surname);
//     console.log(age);
//     console.log(code);
// }
//
// a(account);
// Object.assign(
// let newAccount = {...account, name: 'Vladimir', info: {...account.info}};
// console.log(newAccount.name);
// newAccount.name = 'Evgenia';
// console.log(newAccount.name);
// console.log(account.name);
// newAccount.info.code = 1;
// console.log(newAccount.info.code);
// console.log(account.info.code);

// console.log(obj);
//
//
// let fullName = obj.fullName;
// console.log(fullName);
// obj.fullName = {name: 'Evgenia', surname: 'Piskunova'};
// console.log(obj.fullName);

// let num = 3
// let myVar = num > 2
//     ? console.log(' num > 2 ')
//         ? console.log('is not undefined')
//         : console.log(' undefined')
//     : console.log(' num <= 2 ');


// let num = 3
// let myVar = num > 2
//     ? 10
//     : 1;
//
// console.log(myVar);
// 'aaabbcaacc' => '3a2b1c2a2c';
function transform(str) {
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i + 1)) {
            count++;
            continue; // break
        }
        result += count.toString() + str.charAt(i)
        // `${result}${count}${str.charAt(i)}`;
        count = 1;
    }
    return result;
}

console.log(transform('aaabbcaacc'));

point:for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i % 2 === 0) {
            continue point;
        }
        console.log(`i,j => ${i} , ${j}`);
    }
}