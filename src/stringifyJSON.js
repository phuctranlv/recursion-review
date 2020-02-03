// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // base case
  const niceTypes = ['number', 'boolean'];
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  } else if (obj === null) {
    return ('null');
  } else if (niceTypes.includes(typeof obj)) {
    return (String(obj));
  } else if (Array.isArray(obj)) { // starting recursive cases
    if (obj.length === 0) {
      return '[]';
    }
    var output = ['['];
    for (var i = 0; i < obj.length; i++) {
      output.push(stringifyJSON(obj[i]));
      output.push(',');
    }
    output.pop();
    output.push(']');
    return output.join('');
  } else if (typeof obj === 'object') {
    var objLength = Object.keys(obj).length;
    var objAdded = false;
    if (objLength === 0) {
      return '{}';
    }
    var output = ['{'];
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function' || typeof key === 'function' || key === undefined) {
        continue;
      }
      output.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',');
      objAdded = true;
    }
    if (objAdded) {
      output = output.join('').slice(0, -1);
      output = output + '}';
      return output;
    } else {
      return '{}';
    }

  }
};
