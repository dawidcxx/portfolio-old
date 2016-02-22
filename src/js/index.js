/*
| import styles
*/
import './../scss/global.scss';
import './../scss/app.scss';
import './../scss/landing.scss';
import './../scss/aboutme.scss';
import './../scss/footer.scss';
import './../scss/work.scss';
import './../scss/contact.scss';

/*
| section scripts
*/

import './errorReporter';
import landingVideo from './landingbg.js'
import './landingHeading.js';
import './landingButton.js';
import './aboutme.js';
import './work.js';
import './contactForm';
import './footerbg';

/*
| 'ScrollTo' scripts
| Append a role attr with the right key to add a on click event listener that will scroll to the right section
| Eg. <a href="javascript:void(0)" role="scroll-to-top">top</a>
|                                  ~~~~~~~~~~~~~~~~~~
| Avaible keys
| | scroll-to-top
| | scroll-to-about
| | scroll-to-projects
| | scroll-to-contacts
*/

import {scrollToY} from './utils';

var landingEl = document.getElementById('landing');
var aboutmeEl = document.getElementById('aboutme');
var contactEl = document.getElementById('contact');
var workEl = document.getElementById('work');


var scrollToTopEls = document.querySelectorAll('[role="scroll-to-top"]');
var scrollToAboutEls = document.querySelectorAll('[role="scroll-to-about"]');
var scrollProjectsEls = document.querySelectorAll('[role="scroll-to-projects"]');
var scrollContactsEls = document.querySelectorAll('[role="scroll-to-contacts"]');


var landingSize = landingEl.getClientRects()[0].height;
var aboutMeSize = aboutmeEl.getClientRects()[0].height;
var workElSize  = workEl.getClientRects()[0].height;

[].forEach.call(scrollToTopEls, (el) => {
  el.addEventListener('click', (e) => {
    scrollToY(0, 300);
  });
});

[].forEach.call(scrollToAboutEls, (el) => {
  el.addEventListener('click', (e) => {
    var target = landingSize;
    scrollToY(target, 300);
  });
});

[].forEach.call(scrollProjectsEls, (el) => {
  el.addEventListener('click', (e) => {
    var target = landingSize + aboutMeSize;
    scrollToY(target, 300);
  });
});

[].forEach.call(scrollContactsEls, (el) => {
  el.addEventListener('click', (e) => {
    var target = landingSize + aboutMeSize + workElSize;
    scrollToY(target, 300);  
  });
});

/*-------*/


/*
| Scroll root listener
| Add Parallax and other scroll triggered effects here 
*/

import {debounce} from './utils';

var cards = document.querySelectorAll('#work-cards .card');
var cardsVisiable = false; // lil optimizer

function showCards () {
  let accelt = 300;
  for (let i = 0 ; i < cards.length; i++) {
    setTimeout(() => cards[i].classList.add('active'), i * accelt);
    accelt *= 0.90;
  }
}

window.addEventListener('scroll', debounce(scrollListener, 40));

var sections = {
  landing: document.getElementById('landing').getBoundingClientRect(),
  aboutMe: document.getElementById('aboutme').getBoundingClientRect(),
  work: document.getElementById('work').getBoundingClientRect()
};

// brackets for the aboutme section animation

var bracketOpen = document.getElementById('aboutme-portrait-description-title-openbracket');
var bracketClose = document.getElementById('aboutme-portrait-description-title-closebracket');

// [warning]
// magic number land

var aboutMeArea = {
  top: sections.landing.height - 100,
  bot: sections.landing.height + sections.aboutMe.height - (window.innerWidth > 600 ? 600 : 900)
};

var workArea = {
  top: landingSize + aboutMeSize - window.innerHeight / 2,
  bot: landingSize + aboutMeSize + workElSize
};


function scrollListener() {
  
  var pos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  if(pos > aboutMeArea.top) {
    landingVideo.pause();
  } else {
    landingVideo.play();
  }

  if(pos > aboutMeArea.top && pos < aboutMeArea.bot) {
    
    bracketClose.classList.add('active');
    bracketOpen.classList.add('active');
    
  } else {
    
    bracketClose.classList.remove('active');
    bracketOpen.classList.remove('active');
    
  }
  

  if (!(cardsVisiable) && pos > workArea.top && pos < workArea.bot) {
    showCards();
    cardsVisiable = true;
  }
 
}

scrollListener();

/*-------*/
