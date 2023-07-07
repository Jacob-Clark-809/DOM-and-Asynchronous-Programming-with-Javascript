document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');
  let content = document.querySelector('.content');
  let cursorInterval;

  textField.addEventListener('click', (e) => {
    e.stopPropagation();
    textField.classList.add('focused');

    if (!cursorInterval) {
      cursorInterval = setInterval(() => textField.classList.toggle('cursor'), 500);
    }
  });

  document.addEventListener('click', () => {
    clearInterval(cursorInterval);
    cursorInterval = undefined;
    textField.classList.remove('focused', 'cursor');
  });

  document.addEventListener('keydown', (e) => {
    if (textField.classList.contains('focused')) {
      if (e.key === 'Backspace') {
        content.textContent = content.textContent.slice(0, content.textContent.length - 1);
      } else if (e.key.length === 1) {
        content.textContent += e.key;
      }
    }
  });
});
