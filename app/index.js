import _ from 'lodash';
import name from 'common/common.js';

console.log(name)
console.log(1111111)
function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());