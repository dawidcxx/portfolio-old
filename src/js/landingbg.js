import starify from './starify';
import {RAF} from './RAF';
import {once} from './utils';

var width = window.innerWidth;
var height = (window.innerHeight > 600) ? window.innerHeight : 600;
var mountEl = document.getElementById('landing-bg');

var videoEl = document.createElement('video');
var videoSourceEl = document.createElement('source');
var sourcify = (res) => `bg_${res}.mp4`;
var vidSrc = '';

if(width < 480) {
  vidSrc = sourcify(240);
}

else if (width >= 480 && width <= 900) {
  vidSrc = sourcify(360);
} 

else if (width > 900 && width <= 1280) {
  vidSrc = sourcify(480);
} 

else {
  vidSrc = sourcify(720);
}

videoSourceEl.src = vidSrc;
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
  projectingCanvasEl.style.backgroundColor = 'black';
  let ctx = projectingCanvasEl.getContext('2d');
  let video = null;

  let render = () => {
    ctx.drawImage(video, 0, 0, width, height);
    RAF(render);
  };

  videoEl.addEventListener('play', once(function (_) {
    video = this;
    render();
  }));

  videoEl.style.display = 'none';
  document.body.appendChild(videoEl);

  mountEl.appendChild(projectingCanvasEl);

}

videoEl.play();

window.vid = videoEl;

starify(mountEl, width, height / 2, 6, false);


export default videoEl;