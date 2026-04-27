// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Numberrr ';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').valuealue);
// document.querySelector('.guess').value = 23;
// Is this in git hub

// quize app
/*
const question = new Map([
  ['question', 'What is the programming language in the world ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, ['correct']],
  [false, ['try again']],
]);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key == 'number') console.log(`Answer${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));
*/

//funcation to book seat in flight
/*
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightnum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightnum},name` });
  },
};
lufthansa.book(36, 'Ankit');
lufthansa.book(37, 'Ashish');
*/

// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type
          movements__type--${type}">
          ${i + 1} ${type} </div>
          <div class="movements__value">${mov}</div>
      </div>
      `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovement(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//
/*
/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE(used to delete the element from orginal array )
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN

console.log(letters.join(' - '));

const arr = [23, 22, 64];

// AT Method

console.log(arr[0]);
console.log(arr.at(0));

// getting the last element

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// GET ANY ELEMENT FROM THE STING

const str = 'Ankit choudhary';
console.log(str.at(-1));
console.log(str.at(3));
*/
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You have depsoited  ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You have withdrew  ${Math.abs(movement)}`);
  }
}
console.log('----------FOR EACH------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} You have deposit ${mov}`);
  } else {
    console.log(`Movement ${i + 1} You have deposit${Math.abs(mov)}`);
  }
});
*/
/*
// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// SETS
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
