const print = (current) => {
  const message = `${'\t'.repeat(current.level)}${current.node.getAttribute(
      'data-label')}`;
  console.log(message);
  document.querySelector('textarea').value += `${message}\n`;
};

const traverse = (node) => {
  document.querySelector('textarea').value = '';
  let level = 0;
  let stack = [{node, level}];

  while (stack.length > 0) {
    const current = stack.pop();
    print(current);

    let children = Array.from(current.node.childNodes).
        filter(n => n.nodeType !== Node.TEXT_NODE && n.getAttribute('id') !== 'result');
    if (children.length > 0) {
      level = current.level + 1;
      children = children.reverse().map((n) => ({node: n, level}));
      stack = stack.concat(...children);
    }
  }
};

const traverseRecursive = (node) => {
  document.querySelector('textarea').value = '';
  let level = 0;
  const process = (node) => {
    print({node, level});

    let children = Array.from(node.childNodes).
        filter(n => n.nodeType !== Node.TEXT_NODE && n.getAttribute('id') !== 'result');
    if (children.length > 0) {
      level++;
      children.forEach(n => process(n));
      level--;
    }
  };
  process(node);
};