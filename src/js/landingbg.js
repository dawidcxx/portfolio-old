var width = window.innerWidth;
var height = (window.innerHeight > 600) ? window.innerHeight : 600;

var landingBgEl = document.getElementById('landing-bg');
var videoEl = document.getElementById('bg-video');
var video = null;

var canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext('2d');

landingBgEl.appendChild(canvas);

function render() {
  requestAnimationFrame(render);
  ctx.drawImage(video, 0, 0, width, height);
}

videoEl.addEventListener('play', function () {
  video = this;
  requestAnimationFrame(render);
});

videoEl.play();