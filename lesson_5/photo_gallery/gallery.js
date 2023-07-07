document.addEventListener('DOMContentLoaded', () => {
  function selectPhoto(event) {
    let image = event.target;
    let photoName = image.getAttribute('title');

    showPhoto(photoName);
    activateThumbnail(image);
  }

  function showPhoto(photoName) {
    let previousPhoto = document.querySelector('figure:not(.hide)');
    previousPhoto.classList.add('hide');
    let newPhoto = document.querySelector(`figure[data-name="${photoName}"]`);
    newPhoto.classList.remove('hide');
  }

  function activateThumbnail(image) {
    let previousActive = document.querySelector('ul img.active');
    previousActive.classList.remove('active');
    image.classList.add('active');
  }

  let thumbnails = document.querySelectorAll('ul img');
  for (let index = 0; index < thumbnails.length; index += 1) {
    thumbnails[index].addEventListener('click', selectPhoto);
  }
});