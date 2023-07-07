document.addEventListener('DOMContentLoaded', () => {
  let list = document.querySelector('article ul');
  let modalLayer = document.querySelector('#modal-layer');
  let modal = document.querySelector('#modal');
  let closeModal = document.querySelector('.close');


  list.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
      e.preventDefault();

      let link = e.target;

      if (link.tagName === 'IMG') {
        link = link.parentNode;
      }

      let name = link.dataset.name;
      let imgSrc = link.dataset.imageSource;
      let text = link.dataset.text;

      modal.querySelector('img').setAttribute('src', imgSrc);
      modal.querySelector('h3').textContent = name;
      modal.querySelector('p').textContent = text;

      modalLayer.setAttribute('class', 'show');
      modal.setAttribute('class', 'show');
    }
  });

  closeModal.addEventListener('click', (e) => {
    e.preventDefault();

    modalLayer.setAttribute('class', 'hide');
    modal.setAttribute('class', 'hide');
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      modalLayer.setAttribute('class', 'hide');
      modal.setAttribute('class', 'hide');
    }
  });
});