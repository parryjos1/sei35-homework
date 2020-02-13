// const domTraversal = function ( node ) {
//   console.log('on node ', node);
//   children = node.children
//   // console.log(children, children.length);
//   console.log(children);
//   if (!children) {
//     console.log('leaving');
//     return
//   } else {
//     console.log('traversing the ', node);
//     for (let i = 0; i < children.length; i++) {
//       console.log(children.length, i);
//       console.log(children[i])
//       childOfChild = children[i].children
//       domTraversal(childOfChild)
//     }
//   }
//   console.log(' leaving function');
// }


const domTraversal = function ( children ) {

  for (var i = 0; i < children.length; i++) {
    console.log(children[i])
    childOfChild = children[i].children
    console.log(childOfChild);
    domTraversal(childOfChild)
  }
}

domTraversal( document.body.children )


// const domTraversal02 = function ( node ) {
//
//   if (node.length > 0) {
//     children = node.children
//   } else {
//     children = node
//   }
//
//   for (var i = 0; i < children.length; i++) {
//     console.log(children[i])
//     childOfChild = children[i].children
//     console.log(childOfChild);
//     domTraversal02(childOfChild)
//   }
// }
//
// domTraversal02( document.body )

// const traverseDOM = node ={

  // iterative version: use a while loop
  // - the function starts by getting node.children, adding it to an array of nodes to visit, then looping over the array, printing out the details of each node as it *removes node from the arrays

// };
// const traverseDOMrecursive = node = {

  // print the current node details( nodeName, className ), and then loop through all of node .children nodes and call the function recursively with each of the children

// };

// traverseDOM( document.body );
