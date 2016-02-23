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

function showOverlay (overlay) {
  overlay.classList.add('active');
}

function resetForm () {
  keys(fields).forEach(f => fields[f].value = '');
}

function disableForm () {
  keys(fields).forEach(f => fields[f].disabled = true);
  formbutton.disabled = true;
  formbutton.innerText = 'sending..';
}

function enableForm () {
  keys(fields).forEach(f => fields[f].disabled = false);
  formbutton.disabled = false;
  formbutton.innerText = 'send';
}

// the mail service is implemented as an heroku app
// heroku tends to sleep inactive apps
// we wake that app up with an head call.
// using setTimeout cause don't want too much requests at once.
setTimeout(() => HTTP.head(MAILSERVICE_URL), 1000);

form.addEventListener('submit', function (e) {
  
  e.preventDefault();

  
  var mail = {firstName: fields.fname.value, lastName: fields.lname.value, email: fields.email.value, message: fields.message.value};

  disableForm();

  HTTP.post(MAILSERVICE_URL, mail, (err, resp) => {
    if(err) {
      showOverlay(overlayFail);
      console.log(err);
    } else {
      resetForm();
      showOverlay(overlaySuc);
      console.log(resp);
    }
    enableForm();  
  }); 


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