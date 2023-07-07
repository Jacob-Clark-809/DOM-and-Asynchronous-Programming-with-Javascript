document.addEventListener('DOMContentLoaded', () => {
  function displayCount() {
    let counter = document.querySelector('.counter');
    counter.textContent = String(140 - charCount) + ' characters remaining';
  }

  let charCount = 0;
  displayCount();

  document.querySelector('.composer').addEventListener('keyup', (e) => {
    let textArea = e.currentTarget.firstElementChild;
    charCount = textArea.value.length;
    displayCount();

    if (charCount > 140) {
      textArea.style.color = 'red';
    } else {
      textArea.style.color = 'black';
    }
  });
});