import { HTTP } from './utils';
const keys = Object.keys  || require('object-keys');

const MAILSERVICE_URL = 'https://mighty-taiga-50462.herokuapp.com/sendmail';

var form = document.getElementById('contact-left');
var overlay = document.getElementById('contact-left-overlay-success');
var overlayCloseBtn = document.querySelector('#contact-left-overlay-success-button-group > button');


var fields = { 
  fname: document.getElementById('contact-left-form-fname'),
  lname: document.getElementById('contact-left-form-lname'),  
  email: document.getElementById('contact-left-form-email'),
  message: document.getElementById('contact-left-form-message')
};


form.addEventListener('submit', function (e) {
  
  e.preventDefault();

  
  var mail = {firstName: fields.fname.value, lastName: fields.lname.value, email: fields.email.value, message: fields.message.value};

  keys(fields).forEach(f => fields[f].value = '');

  // HTTP.post(MAILSERVICE_URL, mail, (err, resp) => {
    
  // }); 

  overlay.classList.add('active');

});

overlayCloseBtn.addEventListener('click', function (e) {
  e.preventDefault(); 
  overlay.classList.remove('active');
});