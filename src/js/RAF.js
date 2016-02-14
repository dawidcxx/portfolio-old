export const RAF = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


/**
 * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
 * @param {function()} fn The callback function
 * @param {int} delay The delay in milliseconds
 */

export function requestTimeout (fn, delay) {
	if( !window.requestAnimationFrame      	&& 
		!window.webkitRequestAnimationFrame && 
		!(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
		!window.oRequestAnimationFrame      && 
		!window.msRequestAnimationFrame)
			return window.setTimeout(fn, delay);
			
	var start = new Date().getTime(),
		handle = new Object();
		
	function loop(){
		var current = new Date().getTime(),
			delta = current - start;
			
		delta >= delay ? fn.call() : handle.value = RAF(loop);
	};
	
	handle.value = RAF(loop);
	return handle;
};