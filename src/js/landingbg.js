import starify from './starify';
import {RAF} from './RAF';

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

if('objectFit' in document.body.style) {
  
  mountEl.appendChild(videoEl);

} else { // for IE and other browsers needing some help to streech a video.

  let projectingCanvasEl = document.createElement('canvas');
  projectingCanvasEl.width = width;
  projectingCanvasEl.height = height;
  let ctx = projectingCanvasEl.getContext('2d');
  let video = null;

  let render = () => {
    ctx.drawImage(video, 0, 0, width, height);
    RAF(render);
  };

  videoEl.addEventListener('play', function (_) {
    video = this;
    render();
  })

  videoEl.style.display = 'none';
  document.body.appendChild(videoEl);

  mountEl.appendChild(projectingCanvasEl);

}

videoEl.play();


starify(mountEl, width, height - 150, 6, false);