// const table = document.querySelector('table');
// table.onclick = () => {
//   highlight();
// };
//
// table.onclick = () => {
//   console.log('hi all');
// };
// table.addEventListener('click', highlight);
// table.addEventListener('click', () => {
//   console.log('hi all');
// });

// setTimeout(() => {
//   table.removeEventListener('click', highlight);
// }, 5000);


highlight();
menu(document.querySelector('table'), () => {
  highlight();
  alert('done');
});

function menu(table, cb) {

  const headRow = table.querySelector('thead tr');
  headRow.addEventListener('click', ({ target }) => {
    if (target.dataset.filter !== 'sort') {
      return;
    }
    const rowsArr = [...document.querySelectorAll('table tbody tr')]; // Array.from
    const sortedArr = rowsArr
      .sort((row1, row2) => {
        const [, { textContent: age1 }] = row1.querySelectorAll('td');
        const [, { textContent: age2 }] = row2.querySelectorAll('td');
        if (Number(age1) > Number(age2)) {
          return -1;
        }
        if (Number(age1) < Number(age2)) {
          return 1;
        }
        return 0;
      })
      .reduce((content, tr) => {
        return `${content}<tr>${tr.innerHTML}</tr>`;
      }, '');
    const tableBody = table.querySelector('tbody');
    tableBody.innerHTML = sortedArr;
    cb();
  });

  // for (let cell of headCells) {
  //   cell.addEventListener('click', (event) => {
  //     const td = event.target;
  //     console.log(td.textContent);
  //   });
  // }
}

//
//
function highlight() {
  const rows = document.querySelectorAll('table tbody tr');
  // const rowsArr = [...rows]; Array.from()
  console.log(rows);

  for (let tr of rows) {

    // let { a, b } = { a: 1, b: 2 };
    // let [c, d] = [1, 2];
    // let [{ a }, { b }] = [{ a: 1 }, { b: 1 }];
    //
    // const sum = a + b + c + d;
    const [, { textContent: age }, { textContent: gender }, statusCell] = tr.querySelectorAll('td');
    const status = statusCell.dataset.available;
    console.log(gender);
    Number(age) < 18
      ? tr.style.textDecoration = 'line-through' //tr.setAttribute('style', 'text-decoration: line-through')
      : null;

    gender === 'm'
      ? tr.classList.add('male')
      : tr.classList.add('female');

    switch (status) {
      case 'true' : {
        tr.classList.add('available');
        break;
      }
      case 'false' : {
        tr.classList.add('unavailable');
        break;
      }
      default: {
        tr.setAttribute('hidden', true);
      }

    }

    // status === 'true'
    //   ? tr.classList.add('available')
    //   : status === 'false'
    //      ? tr.classList.add('unavailable')
    //      : null

    // if (status === 'true') {
    //   tr.classList.add('available');
    // } else if (status === 'false') {
    //   tr.classList.add('unavailable');
    // } else {
    //   //
    // }
    console.log(statusCell.dataset.available);
  }
}