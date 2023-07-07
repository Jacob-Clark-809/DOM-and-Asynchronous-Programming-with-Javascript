document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('form');

  form.addEventListener('submit', event => {
    // prevent the browser from submitting the form
    event.preventDefault();

    let data = new FormData(form);

    let request = new XMLHttpRequest();
    request.open('POST', 'https://lsjs230-book-catalog.herokuapp.com/books');

    request.addEventListener('load', () => {
      if (request.status === 201) {
        console.log(`This book was added to the catalog: ${request.responseText}`);
      }
    });

    request.send(data);
  });
});