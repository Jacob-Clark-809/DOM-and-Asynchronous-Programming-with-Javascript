let divs = document.getElementsByTagName('div');
let divsArray = Array.prototype.slice.call(divs);
let introDivs = divsArray.filter(div => div.classList.contains('intro'));

introDivs.forEach(div => {
  let paragraphs = div.getElementsByTagName('p');
  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphs[index].classList.add('article-text');
  }
});
