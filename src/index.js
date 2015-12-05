/*
| import styles
*/
import './scss/global.scss';
import './scss/app.scss';
import './scss/landing.scss';
import './scss/aboutme.scss';
import './scss/footer.scss';
import './scss/work.scss';

/*
| section scripts
*/

import './landingbg.js'
import './landingHeading.js';
import './landingButton.js';
import './aboutme.js';
import './work.js'

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

var scrollToTopEls = document.querySelectorAll('[role="scroll-to-top"]');
var scrollToAboutEls = document.querySelectorAll('[role="scroll-to-about"]');
var scrollProjectsEls = document.querySelectorAll('[role="scroll-to-projects"]');
var scrollContactsEls = document.querySelectorAll('[role="scroll-to-contacts"]');

[].forEach.call(scrollToTopEls, (el) => {
  el.addEventListener('click', (e) => {
    scrollToY(0, 300);
  });
});

[].forEach.call(scrollToAboutEls, (el) => {
  el.addEventListener('click', (e) => {
    var target= document.getElementById('landing').getClientRects()[0].height;
    scrollToY(target, 300);
  });
});

/*-------*/