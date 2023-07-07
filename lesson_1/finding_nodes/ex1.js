function returnParagraphs(node) {
  let result = [];

  for (let index = 0; index < node.childNodes.length; index += 1) {
    let currentChild = node.childNodes[index];
    if (currentChild.nodeName === 'P') {
      result.push(currentChild);
    }
  }

  return result;
}
