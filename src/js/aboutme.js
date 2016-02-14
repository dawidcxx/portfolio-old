import {syntaxHighlight, starify} from './utils';


// from: http://stackoverflow.com/questions/4060004/calculate-age-in-javascript
function calcAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

var json = JSON.stringify({
  firstName: 'Dawid',
  secondName: 'Czarnik',
  age: calcAge(new Date('1995-07-21T00:00:00+00:00')),
  knows: {
    general: [
      'HTML5/CSS3',
      'latest ES6/7 JS',
      'basic PHP',
      'OOP patterns',
      'functional programming techniques',
      'basic SQL'
    ],
    frameworks: {
      frontEnd: ['react + flux(redux)', 'angular 1.X', 'bootstrap'],
      backEnd: ['koa', 'express', 'laravel']
    },
    tooling: ['webpack(SASS & babel loaders)', 'gulp', 'npm / composer'],
    other: ['jquery', 'momentjs(js) / carbon(php)', 'socket.io']
  }
}, null, 2);

var container = document.getElementById('aboutme-details-view-json');
var contents = document.createElement('pre');

contents.innerHTML = syntaxHighlight(json)

container.appendChild(contents);