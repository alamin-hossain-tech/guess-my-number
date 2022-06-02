'use strict';

let randNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randNumber);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayHeader = function (header) {
  document.querySelector('.head_tittle').textContent = header;
};

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

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== randNumber) {
    if (score > 1) {
      displayMessage(guess > randNumber ? '⬆️ Too High!!!' : '⬇️ Too Low!!!');
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
  // } else if (guess > randNumber) {
  //   if (score > 1) {
  //     displayMessage('⬆️ Too High!!!');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     displayHeader('Try Again 😔');
  //   } else {
  //     displayMessage('You Lost The Game');
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.guess').disabled = true;
  //     document.querySelector('.check').disabled = true;
  //   }
  // } else if (guess < randNumber) {
  //   if (score > 1) {
  //     displayMessage('⬇️ Too Low!!!');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     displayHeader('Try Again 😔');
  //   } else {
  //     displayMessage('You Lost The Game');
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.guess').disabled = true;
  //     document.querySelector('.check').disabled = true;
  //   }
  // }
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
