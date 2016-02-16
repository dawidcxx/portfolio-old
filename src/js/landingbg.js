import starify from './starify';

var width = window.innerWidth;
var height = (window.innerHeight > 600) ? window.innerHeight : 600;

starify(document.getElementById('landing-bg'), width, height, 6, false);