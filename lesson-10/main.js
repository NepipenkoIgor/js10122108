// function Component(element) {
//   this._element = element;
// }
//
// Component.prototype.hide = function() {
//   this._element.hidden = true;
// }
//
// Menu._counter = 0;
//
// function Menu(element, title, items) {
//   Component.call(this, element);
//
//   Menu._counter++;
//
//   this._title = title;
//   this._items = items;
//   this._render();
//
//   this._element.querySelector('.menu__title')
//     .addEventListener('click', () => {
//       element.classList.toggle('menu--closed');
//     });
// }
//
//
// Menu.prototype = Object.create(Component.prototype);
// Menu.prototype.constructor = Menu;
//
// Menu.prototype._render = function() {
//   this._element.innerHTML = `
//    <span class="menu__title">${this._title}</span>
//   <ul class="menu__items-list">
//     ${this._items.map((item) => `<li class="menu__item">${item}</li>`)
//     .join('')}
//   </ul>`;
// };
//
// Menu.prototype.hide = function() {
//   console.log('animation');
//   Component.prototype.hide.call(this);
// }
//
// Menu.prototype.getCount = function() {
//   return Menu._counter;
// };
//
// // this -> window
// Menu.prototype.close = function() {
//   this._element.classList.add('menu--closed');
// };
//
// Menu.prototype.toggle = function() {
//   this._element.classList.toggle('menu--closed');
// };
//
// let el1 = document.querySelector('#menu1');
// let el2 = document.querySelector('#menu2');
//
// let menu1 = new Menu(el1, 'Main menu', ['User', 'Account']);
// let menu2 = new Menu(el2, 'Sidebar menu', ['User', 'Account', 'Orders', 'JavaScript']);
//
// menu1.close();
//
// setTimeout(() => {
//   menu2.hide();
// }, 3000);
//
// console.log(menu1.getCount());

// User -> <li class="menu__item">User 1</li>


/****/

class Component {
  constructor(element) {
    this._element = element;
  }

  hide() {
    this._element.hidden = true;
  }

}

class Menu extends Component {

  static getStaticCount() {
    return Menu._counter;
  }

  constructor(element, title, items) {
    super(element);
    if (!Menu._counter) {
      Menu._counter = 0;
    }
    Menu._counter++;
    this._title = title;
    this._items = items;
    this._render();
    this._element.querySelector('.menu__title')
      .addEventListener('click', this._eventToggle.bind(this));
  }

  _eventToggle() {
    this._element.classList.toggle('menu--closed');
  }

  _render() {
    this._element.innerHTML = `
   <span class="menu__title">${this._title}</span>
  <ul class="menu__items-list">
    ${this._items.map((item) => `<li class="menu__item">${item}</li>`)
      .join('')}
  </ul>`;
  }

  hide() {
    console.log('animation');
    super.hide();
  }

  getCount() {
    return Menu._counter;
  }

  close() {
    this._element.classList.add('menu--closed');
  }

  toggle() {
    this._element.classList.toggle('menu--closed');
  }

  get title() {
    return `Widget title is ${this._title}`;
  }

}

let el1 = document.querySelector('#menu1');
let el2 = document.querySelector('#menu2');

let menu1 = new Menu(el1, 'Main menu', ['User', 'Account']);
let menu2 = new Menu(el2, 'Sidebar menu', ['User', 'Account', 'Orders', 'JavaScript']);

menu1.close();

setTimeout(() => {
  menu2.hide();
}, 3000);

// console.log(menu1.getCount());
console.log(Menu.getStaticCount());
console.log(menu2.title);