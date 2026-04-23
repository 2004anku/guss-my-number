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
