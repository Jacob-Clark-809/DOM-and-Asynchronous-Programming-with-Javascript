let header = [].slice.call(document.body.childNodes).find(node => node.nodeName === 'HEADER');
document.body.insertAdjacentElement('afterbegin', header);

let title = document.querySelector('h1');
header.insertAdjacentElement('afterbegin', title);

let images = [].slice.call(document.querySelectorAll('img'));
let chinStick = images.find(img => img.getAttribute('alt') === 'The chin stick').parentNode;
let babyMop = images.find(img => img.getAttribute('alt') === 'The baby mop').parentNode;

let chinStickCaption = babyMop.lastElementChild;
let babyMopCaption = chinStick.lastElementChild;
chinStick.replaceChild(chinStickCaption, babyMopCaption);
babyMop.appendChild(babyMopCaption);

chinStick.parentNode.firstElementChild.appendChild(chinStick);
babyMop.parentNode.firstElementChild.appendChild(babyMop);
