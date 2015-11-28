import {scrollToY} from './utils';

var button = document.getElementById('landing-call-to-action'); 
var landing = document.getElementById('landing');

button.addEventListener('click', () => {
  var target = landing.getBoundingClientRect().height;
  scrollToY(target, 600);
});