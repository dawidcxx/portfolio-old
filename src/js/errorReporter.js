import {HTTP} from './utils';

const MAILSERVICE_URL = 'https://mighty-taiga-50462.herokuapp.com/sendmail';

window.onerror = function(message) {
  var mail = {
    firstName: 'portfolio',
    lastName: 'site',
    email: 'self@dawid.czarnik',
    message
  };
  HTTP.post(MAILSERVICE_URL, mail);
}