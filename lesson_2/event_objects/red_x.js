document.addEventListener('mousemove', (e) => {
  let x = document.querySelector('.x');
  x.style.left = String(e.clientX) + 'px';
  x.style.top = String(e.clientY) + 'px';
});

document.addEventListener('keydown', (e) => {
  let hor = document.querySelector('.horizontal');
  let ver = document.querySelector('.vertical');
  if (e.key === 'b') {
    hor.style.background = 'blue';
    ver.style.background = 'blue';
  } else if (e.key === 'g') {
    hor.style.background = 'green';
    ver.style.background = 'green';
  } else if (e.key === 'r') {
    hor.style.background = 'red';
    ver.style.background = 'red';
  }
});