function addClassToParagraphs(node) {
  if (node instanceof HTMLParagraphElement) {
    node.classList.add('article-text');
  }

  let children = node.childNodes;
  for (let index = 0; index < children.length; index += 1) {
    addClassToParagraphs(children[index]);
  }
}