import {RAF} from './RAF';

/**
 * generate array 0...n
 * example range(5) => [0, 1, 2, 3, 4]
 * 
 * @param  {Number} n the number till which generate
 * @return {Array<Number>}  Array of numbers from 0..n
 */
export const range = n => Array.apply(null, Array(n)).map((_, i) => i);

/**
 * Genearte an random Integer in the given range
 * @param  {Number} min bottom flor
 * @param  {Number} max top flor
 * @return {Number} Random number in between min and max param.
 */
export const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


/**
 * Generate a random 16bit color
 * @return {String} Color string
 */
export const randCol = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16); 


/**
 * turns a JSON string to html appending classes "string" and "string|number|boolean"
 * for more info http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
 * @param {string} the string to format must be valid json
 * @return {string} html to output on the page 
 * 
 */
export function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}



/**
 * @param  {number} stars given 
 * @param  {number} maximum stars (defaults to 5)
 * @return {string} formated utf8 string, eg. ★★★☆☆
 */
export function starify(val, max) {
  var emptyStar = `\u2606`;
  var filledStar = `\u2605`;
  
  max = max || 5;
  
  if(typeof val != 'number') throw new Error('#starify: first argument is requierd and must be a valid number');
  
  var res = '';
  
  for(let i = 0; i < max; i++) {
    
    if(i >= val) {
      
      res += emptyStar;  
      
    } else {
      
      res += filledStar;
      
    }
    
  }
  
  return res;
}

/**
 * from http://stackoverflow.com/questions/12199363/scrollto-with-animation
 * @param  {number} scrollTargetY where to scroll 
 * @param  {number} speed how long should it take in ms 
 * @param  {string} easing easing function one of easeOutSine | easeInOutSine | easeInOutQuint
 * @return {undefined} 
 */
export function scrollToY(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollY = window.scrollY,
        scrollTargetY = scrollTargetY || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var PI_D2 = Math.PI / 2,
        easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            RAF(tick);

            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            window.scrollTo(0, scrollTargetY);
        }
    }

    // call it once to get started
    tick();
}


export const HTTP = {
  post(url, hashmap, callback) {
    var xhr = new XMLHttpRequest();
    
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    
    xhr.send(JSON.stringify(hashmap));
    
    xhr.onreadystatechange = function () {

      if(xhr.readyState == 4 && xhr.status > 200 && xhr.status < 300) {
        callback(null, {data: xhr.responseText, code: xhr.status});
      } else if (xhr.readyState == 4 && xhr.status >= 400) {
        callback({data: xhr.responseText, code: xhr.status});
      }

    };

  },
  head(url, callback) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, true);
    http.onreadystatechange = function () {
        if(this.readyState == this.DONE) {
            callback(this.status != 404);
        }
    }
  }
}