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