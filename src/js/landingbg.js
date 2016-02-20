import starify from './starify';

var width = window.innerWidth;
var height = (window.innerHeight > 600) ? window.innerHeight : 600;
var mountEl = document.getElementById('landing-bg');

var videoEl = document.createElement('video');
var videoSourceEl = document.createElement('source');

videoSourceEl.src = './background.mp4';
videoSourceEl.type = 'video/mp4';

videoEl.appendChild(videoSourceEl);

videoEl.width = width;
videoEl.height = height;
videoEl.loop = true;
videoEl.style.background = '#333';
videoEl.style.objectFit = 'fill';

mountEl.appendChild(videoEl);

videoEl.play();


starify(mountEl, width, height, 12, false);