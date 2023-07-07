document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    let keysAndValues = [];
    for (let index = 0; index < form.elements.length; index += 1) {
      let element = form.elements[index];
      let key;
      let value;

      if (element.type !== 'submit') {
        key = encodeURIComponent(element.name);
        value = encodeURIComponent(element.value);
        keysAndValues.push(`${key}=${value}`);
      }
    }

    let data = keysAndValues.join('&');

    let request = new XMLHttpRequest();
    request.open('POST', 'https://lsjs230-book-catalog.herokuapp.com/books');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    request.addEventListener('load', event => {
      if (request.status === 201) {
        console.log(`This book was added to the catalog: ${request.responseText}`);
      }
    });

    request.send(data);
  });
});