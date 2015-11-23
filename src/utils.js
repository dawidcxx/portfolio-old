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