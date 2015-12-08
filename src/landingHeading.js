import {requestTimeout, RAF} from './RAF';


// list of words to be rewrriten the last one is final
var wordList = [
  'developer', // okey this one just mirros the initial dom state. 
  'designer',
  'human\u2764'
]

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


RAF(blinkCursor);
 
 const popLetter = () => content.innerHTML = content.innerHTML.slice(0, -1);
 const pushLetter = (ch) => content.innerHTML += ch;
  
// this iterates over the ```wordList``` array and 'rewrites' it 

var currWordIndex = 0;
var wordVis = true;

function loop() {
  
 
  
  if(wordVis) {
    
    var len = (content.innerHTML.length - 1) // offset by one so we leave the empty space (avoiding css issues)
    
    for(var i = 0; i < len; i++) {
      
      requestTimeout(popLetter, i * 100);
   
    }
    
    wordVis = false;
    currWordIndex++;
    
    setTimeout(loop, (len * 100) + 500); // time that takes to animate this and 500 ms
    
  } else {
    
    var currWord = wordList[currWordIndex];
    
    if(!currWord) return;
    
    var len = currWord.length;
    
    for(let i = 0; i < len; i++ ){ 
      
      requestTimeout(() => pushLetter(currWord[i]), i * 100);
      
    }
    
    wordVis = true;
    
    // if there are any more words then disaptch a new function call
    if(wordList[currWordIndex + 1]) {
      setTimeout(loop, (len * 100) + 1500); 
    }
  }
 
}

setTimeout(loop, 3000);