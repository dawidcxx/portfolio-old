import {syntaxHighlight, starify} from './utils';


var json = JSON.stringify({
  name: 'Dawid',
  surname: 'Czarnik',
  age: 20,
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