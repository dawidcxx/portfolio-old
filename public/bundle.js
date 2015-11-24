/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(5);

	__webpack_require__(7);

	__webpack_require__(9);

	__webpack_require__(11);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _utils = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var container = document.getElementById('landing-bg');
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight > 600 ? window.innerHeight : 600;

	container.appendChild(canvas);

	var Point = (function () {
	  function Point(_ref) {
	    var x = _ref.x;
	    var y = _ref.y;

	    _classCallCheck(this, Point);

	    this.x = x;
	    this.y = y;
	  }

	  // calc the distance between two points

	  _createClass(Point, [{
	    key: 'distance',
	    value: function distance(secondPoint) {
	      return Math.sqrt(Math.pow(this.x - secondPoint.x, 2) + Math.pow(this.y - secondPoint.y, 2));
	    }

	    // for debugging

	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.fillRect(this.x, this.y, 1, 1);
	    }
	  }]);

	  return Point;
	})();

	var Line = (function () {
	  function Line(pointA, pointB, _ref2) {
	    var color = _ref2.color;
	    var lineWidth = _ref2.lineWidth;

	    _classCallCheck(this, Line);

	    this.A = pointA;
	    this.B = pointB;
	    this.color = color || 'black';
	    this.lineWidth = lineWidth || 1;
	  }

	  _createClass(Line, [{
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.lineWidth = this.lineWidth;
	      ctx.strokeStyle = this.color;
	      ctx.moveTo(this.A.x, this.A.y);
	      ctx.lineTo(this.B.x, this.B.y);
	      ctx.stroke();
	    }
	  }]);

	  return Line;
	})();

	function calcNPoints() {
	  if (window.innerWidth < 400) {

	    return Math.floor((canvas.width + canvas.height) / 40);
	  } else if (window.innerWidth < 800) {

	    return Math.floor((canvas.width + canvas.height) / 30);
	  } else {

	    return Math.floor((canvas.width + canvas.height) / 20);
	  }
	}

	// var nPoints = Math.floor((canvas.width + canvas.height) / 30);
	var nPoints = calcNPoints();
	var points = [];
	var lines = [];

	for (var i = 0; i < nPoints; i++) {

	  var newPoint = new Point({
	    x: (0, _utils.randInt)(0, canvas.width),
	    y: (0, _utils.randInt)(0, canvas.height)
	  });

	  for (var j = 0; j < points.length; j++) {
	    var dist = Math.floor(points[j].distance(newPoint));

	    if (dist < 150) {

	      lines.push(new Line(points[j], newPoint, {
	        lineWidth: 20 / dist,
	        color: Math.random() < 0.50 ? (0, _utils.randCol)() : 'black' // colorize ~50% of the lines
	      }));
	    }
	  }

	  points.push(newPoint);
	}

	lines.forEach(function (line) {
	  return line.draw(ctx);
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * generate array 0...n
	 * example range(5) => [0, 1, 2, 3, 4]
	 * 
	 * @param  {Number} n the number till which generate
	 * @return {Array<Number>}  Array of numbers from 0..n
	 */
	var range = exports.range = function range(n) {
	  return Array.apply(null, Array(n)).map(function (_, i) {
	    return i;
	  });
	};

	/**
	 * Genearte an random Integer in the given range
	 * @param  {Number} min bottom flor
	 * @param  {Number} max top flor
	 * @return {Number} Random number in between min and max param.
	 */
	var randInt = exports.randInt = function randInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	/**
	 * Generate a random 16bit color
	 * @return {String} Color string
	 */
	var randCol = exports.randCol = function randCol() {
	  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _RAF = __webpack_require__(12);

	var wordList = ['developer', 'code artisan', 'react ninja', 'human'];

	var container = document.getElementById('landing-heading-bullshit');
	var content = document.getElementById('landing-heading-bullshit-content');
	var cursor = document.getElementById('landing-heading-bullshit-blinky');

	// this makes the 'cursor' bilnk
	var cursorOn = true;

	function blinkCursor(diff) {

	  if (cursorOn) {

	    cursor.style.display = 'none';
	    cursorOn = false;
	  } else {

	    cursor.style.display = 'inline';
	    cursorOn = true;
	  }

	  (0, _RAF.requestTimeout)(blinkCursor, 500);
	}

	blinkCursor();

	// this iterates over the ```wordList``` array and 'rewrites' it

	function wordWriter() {}

	(0, _RAF.RAF)(wordWriter);

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.requestTimeout = requestTimeout;
	var RAF = exports.RAF = (function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	})();

	/**
	 * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
	 * @param {function()} fn The callback function
	 * @param {int} delay The delay in milliseconds
	 */

	function requestTimeout(fn, delay) {
		if (!window.requestAnimationFrame && !window.webkitRequestAnimationFrame && !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
		!window.oRequestAnimationFrame && !window.msRequestAnimationFrame) return window.setTimeout(fn, delay);

		var start = new Date().getTime(),
		    handle = new Object();

		function loop() {
			var current = new Date().getTime(),
			    delta = current - start;

			delta >= delay ? fn.call() : handle.value = RAF(loop);
		};

		handle.value = RAF(loop);
		return handle;
	};

/***/ }
/******/ ]);