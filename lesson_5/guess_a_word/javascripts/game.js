document.addEventListener('DOMContentLoaded', () => {
  let randomWord = (() => {
    const words = ['apple', 'banana', 'orange', 'pear'];

    return function() {
      if (words.length === 0) return;

      let index = Math.floor((Math.random() * words.length));
      return words.splice(index, 1)[0];
    };
  })();

  function isLetter(charCode) {
    return (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) ||
           (charCode >= 'A'.charCodeAt(0)) && charCode <= 'Z'.charCodeAt(0);
  }

  function keyUpListener(e) {
    let charCode = e.which;
    if (isLetter(charCode)) {
      let char = String.fromCharCode(charCode);
      game.guess(char.toUpperCase());
    }
  }

  class Game {
    constructor() {
      this.randomWord = randomWord;
      this.totalWrongGuesses = 6;
      this.newGame();
    }

    guess(char) {
      if (this.lettersGuessed.includes(char)) return;

      this.lettersGuessed.push(char);
      this.displayGuess(char);

      if (this.word.includes(char)) {
        this.displayLettersInWord(char);
      } else {
        this.incorrectGuesses += 1;
        apples.className = `guess_${this.incorrectGuesses}`;
      }

      if (this.gameStatus()) {
        if (this.gameStatus() === 'won') {
          this.displayWinMessage();
        } else if (this.gameStatus() === 'lost') {
          this.displayLoseMessage();
        }

        this.disableKeyListener();
      }
    }

    disableKeyListener() {
      document.removeEventListener('keyup', keyUpListener);
    }

    enableKeyListener() {
      document.addEventListener('keyup', keyUpListener);
    }

    gameStatus() {
      if (this.incorrectGuesses >= this.totalWrongGuesses) {
        return 'lost';
      } else if (this.word.every(letter => this.lettersGuessed.includes(letter))) {
        return 'won';
      }
    }

    displayWinMessage() {
      this.displayMessage('You have won!');
      replay.style.display = 'block';
      document.body.className = 'win';
    }

    displayLoseMessage() {
      this.displayMessage('You have lost!');
      replay.style.display = 'block';
      document.body.className = 'lose';
    }

    displayGuess(char) {
      let span = document.createElement('span');
      span.textContent = char;
      guesses.appendChild(span);
    }

    displayLettersInWord(char) {
      let spans = spaces.querySelectorAll('span');
      for (let index = 0; index < this.word.length; index += 1) {
        if (char === this.word[index]) {
          spans[index].textContent = char;
        }
      }
    }

    newGame() {
      this.resetDisplay();
      this.chooseWord();
      this.incorrectGuesses = 0;
      this.lettersGuessed = [];
      this.addSpaces();
      this.removeGuesses();

      if (this.word) {
        this.enableKeyListener();
      }
    }

    resetDisplay() {
      this.displayMessage('');
      replay.style.display = 'none';
      apples.className = '';
      document.body.className = '';
    }

    chooseWord() {
      this.word = this.randomWord();
      if (this.word === undefined) {
        this.displayMessage("Sorry, I've run out of words!");
        return;
      }

      this.word = this.word.toUpperCase().split('');
    }

    addSpaces() {
      this.removeSpaces();
      if (this.word) {
        for (let index = 0; index < this.word.length; index += 1) {
          let span = document.createElement('span');
          spaces.appendChild(span);
        }
      }
    }

    removeSpaces() {
      Array.from(spaces.children).forEach(child => {
        if (child.tagName === 'SPAN') {
          child.remove();
        }
      });
    }

    removeGuesses() {
      Array.from(guesses.children).forEach(child => {
        if (child.tagName === 'SPAN') {
          child.remove();
        }
      });
    }

    displayMessage(text) {
      message.textContent = text;
    }
  }

  let apples = document.querySelector('#apples');
  let message = document.querySelector('#message');
  let spaces = document.querySelector('#spaces');
  let guesses = document.querySelector('#guesses');
  let replay = document.querySelector('#replay');
  let game = new Game();

  replay.addEventListener('click', (e) => {
    e.preventDefault();

    game.newGame();
  });
});