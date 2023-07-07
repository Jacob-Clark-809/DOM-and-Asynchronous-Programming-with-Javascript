document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let number1 = Number(document.querySelector('#first-number').value);
    let number2 = Number(document.querySelector('#second-number').value);
    let operator = document.querySelector('#operator').value;

    let result;
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
    }

    document.querySelector('#result').textContent = result;
  });
});