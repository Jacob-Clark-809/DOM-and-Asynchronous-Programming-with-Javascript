document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = form.querySelector('#name').value;
    let quantity = form.querySelector('#quantity').value || "1";

    let listItem = document.createElement('li');
    listItem.textContent = quantity + ' ' + name;
    document.querySelector('#grocery-list').appendChild(listItem);

    form.reset();
  });
});
