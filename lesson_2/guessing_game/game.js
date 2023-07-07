document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  let input = document.querySelector('#guess');
  let paragraph = document.querySelector('p');
  let link = document.querySelector('a');
  let inputButton = document.querySelector('input[type="submit"]');
  let answer;
  let guesses;

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
    inputButton.disabled = '';
  }

  function disableInput() {
    inputButton.disabled = 'true';
    inputButton.style.background = 'linear-gradient(to bottom, #c4586f 0%, #914051 100%)';
  }

  function enableInput() {
    inputButton.disable = '';
    inputButton.style.background = 'linear-gradient(to bottom, #CC183E 0%, #780E24 100%)';
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    let guess = parseInt(input.value, 10);
    let message;

    guesses += 1;
    if (Number.isNaN(guess)) {
      guesses -= 1;
      message = 'Please enter a valid number';
    } else if (guess === answer) {
      message = `You guessed it! It took you ${guesses} guesses.`;
      disableInput();
    } else if (guess > answer) {
      message = `My number is lower than ${guess}`;
    } else {
      message = `My number is higher than ${guess}`;
    }

    paragraph.textContent = message;
  });

  link.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  });

  newGame();
});
