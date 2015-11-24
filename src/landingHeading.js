import {requestTimeout, RAF} from './RAF';

var wordList = [
  'developer',
  'code artisan',
  'react ninja',
  'human'
];

var container = document.getElementById('landing-heading-bullshit');
var content = document.getElementById('landing-heading-bullshit-content');
var cursor = document.getElementById('landing-heading-bullshit-blinky');



// this makes the 'cursor' bilnk
var cursorOn = true;

function blinkCursor(diff) {
  
  if(cursorOn) {
    
    cursor.style.display = 'none';
    cursorOn = false;
    
  } else {
    
    cursor.style.display = 'inline';
    cursorOn = true;
  }
  
  requestTimeout(blinkCursor, 500);  
}


blinkCursor();
  
// this iterates over the ```wordList``` array and 'rewrites' it 


function wordWriter() {
  
  
  
}

RAF(wordWriter);