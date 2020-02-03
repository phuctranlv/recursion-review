var getElementsByClassName = function(className) {
  // some initializing steps
  var outputArray = [];
  var startNode = document.body;

  var getElementsRecursively = function(className, thisNode) {
    if (thisNode === undefined) {
      return;
    }
    // console.log(thisNode.classList.value)
    if (thisNode.classList !== undefined) {
      // console.log('passed classlist lenght');
      if (thisNode.classList.contains(className)) {
        outputArray.push(thisNode);
      }
    }

    var childNodes = thisNode.childNodes; // array of children
    // base case - if no children
    if (childNodes.length !== 0) {
      // console.log('detected child');
      for (var i = 0; i < childNodes.length; i++) {
        getElementsRecursively(className, childNodes[i]);
      }
    }
  };

  getElementsRecursively(className, startNode);
  return outputArray;
};