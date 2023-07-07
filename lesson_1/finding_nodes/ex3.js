function getElementsByTagName(node, tagName) {
  let result = [];
  (function addElement(node) {
    if (node.nodeName === tagName) {
      result.push(node);
    }

    let children = node.childNodes;
    for (let index = 0; index < children.length; index += 1) {
      addElement(children[index]);
    }
  })(node);

  return result;
}
