import { HTTP } from './utils';
const keys = Object.keys  || require('object-keys');

const MAILSERVICE_URL = 'https://mighty-taiga-50462.herokuapp.com/sendmail';

var form = document.getElementById('contact-left');
var overlaySuc = document.getElementById('contact-left-overlay-success');
var overlaySucCloseBtn = document.querySelector('#contact-left-overlay-success-button-group > button');
var overlayFail = document.getElementById('contact-left-overlay-failure');
var overlayFailCloseBtn = document.querySelector('#contact-left-overlay-failure-button-group > button');

var formbutton = document.querySelector('#contact-left button[type="submit"]');

var fields = { 
  fname: document.getElementById('contact-left-form-fname'),
  lname: document.getElementById('contact-left-form-lname'),  
  email: document.getElementById('contact-left-form-email'),
  message: document.getElementById('contact-left-form-message')
};

function showOverlay(overlay) {
  overlay.classList.add('active');
}

form.addEventListener('submit', function (e) {
  
  e.preventDefault();

  
  var mail = {firstName: fields.fname.value, lastName: fields.lname.value, email: fields.email.value, message: fields.message.value};

  keys(fields).forEach(f => fields[f].value = '');

  HTTP.post(MAILSERVICE_URL, mail, (err, resp) => {
    if(err) {
      showOverlay(overlayFail);
      console.log(err);
    } else {
      showOverlay(overlaySuc);
      console.log(resp);
    }

    formbutton.disabled = true;
    formbutton.innerText = 'send';
        
  }); 

  formbutton.disabled = true;
  formbutton.innerText = 'sending..';

});



function closeOverlay(overlay) {
  return function handler(e) {
    formbutton.disabled = false;
    formbutton.innerText = 'send';
    e.preventDefault();
    overlay.classList.remove('active');
  }
}

overlaySucCloseBtn.addEventListener('click', closeOverlay(overlaySuc));
overlayFailCloseBtn.addEventListener('click', closeOverlay(overlayFail));