/* global Handlebars */

document.addEventListener('DOMContentLoaded', () => {
  function loadTemplates() {
    let templates = {};
    Array.from(document.querySelectorAll('script[type="text/x-handlebars"]'))
      .forEach(template => {
        let key = template.id;
        templates[key] = Handlebars.compile(template.innerHTML);

        if (template.dataset.type === 'partial') {
          Handlebars.registerPartial(key, template.innerHTML);
        }
      });

    return templates;
  }

  function renderPage(e) {
    photos = e.target.response;
    renderSlides();

    let firstPhoto = photos[0];
    renderPhotoHeader(firstPhoto);
    renderComments(firstPhoto.id);
  }

  function renderSlides() {
    let photosHtml = templates.photos({ photos });
    slides.innerHTML = photosHtml;
    document.querySelector('#slides figure').classList.replace('hide', 'show');
  }

  function renderPhotoHeader(photo) {
    let photoHtml = templates['photo_information'](photo);
    photoHeader.innerHTML = photoHtml;
  }

  function likeOrFavorite(e) {
    e.preventDefault();

    if (e.target.tagName === 'A') {
      let anchor = e.target;

      let request = new XMLHttpRequest();
      let data = JSON.stringify({ photo_id: anchor.dataset.id });
      request.open('POST', anchor.href);
      request.setRequestHeader('content-type', 'application/json');
      request.responseType = 'json';

      request.addEventListener('load', (e) => {
        anchor.textContent = anchor.textContent
                                   .replace(/\d+/mg, request.response.total);
      });

      request.send(data);
    }
  }

  function renderComments(photoId) {
    let queryString = `photo_id=${photoId}`;
    let getComments = new XMLHttpRequest();
    getComments.open('GET', `/comments?${queryString}`);
    getComments.responseType = 'json';

    getComments.addEventListener('load', () => {
      let comments  = getComments.response;
      let commentsHtml = templates['photo_comments']({ comments });
      commentsList.innerHTML = commentsHtml;
    });

    getComments.send();
  }

  function findDisplayedPhotoIndex(figures) {
    return Array.from(figures).findIndex(figure => {
      return figure.classList.contains('show');
    });
  }

  function hidePhoto(figures, index) {
    figures[index].classList.replace('show', 'hide');

  }

  function displayPhoto(index) {
    figures[index].classList.replace('hide', 'show');
    renderPhotoHeader(photos[index]);
    renderComments(figures[index].dataset.id);
  }

  function updateForm(figures, index) {
    newCommentForm.querySelector('input[name="photo_id"]').value = figures[index].dataset.id;
  }

  let photos;
  let figures;
  let templates = loadTemplates();
  let slides = document.querySelector('#slides');
  let photoHeader = document.querySelector('header');
  let commentsList = document.querySelector('#comments ul');
  let prev = document.querySelector('.prev');
  let next = document.querySelector('.next');
  let newCommentForm = document.querySelector('form');

  let getPhotos = new XMLHttpRequest();
  getPhotos.open('GET', '/photos');
  getPhotos.responseType = 'json';

  getPhotos.addEventListener('load', (e) => {
    renderPage(e);
    figures = document.querySelectorAll('#slides figure');
  });

  getPhotos.send();

  prev.addEventListener('click', (e) => {
    e.preventDefault();

    let currentIndex = findDisplayedPhotoIndex(figures);
    let previousIndex = currentIndex !== 0 ? currentIndex - 1 : figures.length - 1;

    hidePhoto(figures, currentIndex);
    displayPhoto(previousIndex);
    updateForm(figures, previousIndex);
  });

  next.addEventListener('click', (e) => {
    e.preventDefault();

    let currentIndex = findDisplayedPhotoIndex(figures);
    let nextIndex = currentIndex !== figures.length - 1 ? currentIndex + 1 : 0;

    hidePhoto(figures, currentIndex);
    displayPhoto(nextIndex);
    updateForm(figures, nextIndex);
  });

  photoHeader.addEventListener('click', likeOrFavorite);

  newCommentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(newCommentForm);
    let params = new URLSearchParams(data);
    let keyValuePairs = params.toString();

    let request = new XMLHttpRequest();
    request.open(newCommentForm.method, newCommentForm.action);
    request.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    request.responseType = 'json';

    request.addEventListener('load', () => {
      let commentHtml = templates.photo_comment(request.response);
      commentsList.insertAdjacentHTML('beforeEnd', commentHtml);
      newCommentForm.reset();
    });

    console.log(keyValuePairs);
    request.send(keyValuePairs);
  });
});