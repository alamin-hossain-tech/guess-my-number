'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.head_tittle').textContent = 'Congratulations 🥳';
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 20;
*/

let randNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayHeader = function (header) {
  document.querySelector('.head_tittle').textContent = header;
};

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('❌ No Number!!!');
    displayHeader('put a Valid Number');
  } else if (guess === randNumber) {
    displayMessage('✅ Correct Number!!!');
    displayHeader('Congratulations 🥳');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randNumber;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
  } else if (guess > randNumber) {
    if (score > 1) {
      displayMessage('⬆️ Too High!!!');
      score--;
      document.querySelector('.score').textContent = score;
      displayHeader('Try Again 😔');
    } else {
      displayMessage('You Lost The Game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
    }
  } else if (guess < randNumber) {
    if (score > 1) {
      displayMessage('⬇️ Too Low!!!');
      score--;
      document.querySelector('.score').textContent = score;
      displayHeader('Try Again 😔');
    } else {
      displayMessage('You Lost The Game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  displayHeader('Guess My Number!');
  displayMessage('Start guessing...');
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  // document.querySelector('.number').textContent = randNumber;
});
// document.querySelector('.number').textContent = randNumber;
