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

	__webpack_require__(13);

	__webpack_require__(15);

	__webpack_require__(17);

	var _landingbg = __webpack_require__(20);

	var _landingbg2 = _interopRequireDefault(_landingbg);

	__webpack_require__(22);

	__webpack_require__(23);

	__webpack_require__(24);

	__webpack_require__(25);

	__webpack_require__(26);

	__webpack_require__(29);

	__webpack_require__(30);

	var _utils = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	| section scripts
	*/

	var landingEl = document.getElementById('landing');

	/*
	| 'ScrollTo' scripts
	| Append a role attr with the right key to add a on click event listener that will scroll to the right section
	| Eg. <a href="javascript:void(0)" role="scroll-to-top">top</a>
	|                                  ~~~~~~~~~~~~~~~~~~
	| Avaible keys
	| | scroll-to-top
	| | scroll-to-about
	| | scroll-to-projects
	| | scroll-to-contacts
	*/

	/*
	| import styles
	*/

	var aboutmeEl = document.getElementById('aboutme');
	var contactEl = document.getElementById('contact');
	var workEl = document.getElementById('work');

	var scrollToTopEls = document.querySelectorAll('[role="scroll-to-top"]');
	var scrollToAboutEls = document.querySelectorAll('[role="scroll-to-about"]');
	var scrollProjectsEls = document.querySelectorAll('[role="scroll-to-projects"]');
	var scrollContactsEls = document.querySelectorAll('[role="scroll-to-contacts"]');

	var landingSize = landingEl.getClientRects()[0].height;
	var aboutMeSize = aboutmeEl.getClientRects()[0].height;
	var workElSize = workEl.getClientRects()[0].height;

	[].forEach.call(scrollToTopEls, function (el) {
	  el.addEventListener('click', function (e) {
	    (0, _utils.scrollToY)(0, 300);
	  });
	});

	[].forEach.call(scrollToAboutEls, function (el) {
	  el.addEventListener('click', function (e) {
	    var target = landingSize;
	    (0, _utils.scrollToY)(target, 300);
	  });
	});

	[].forEach.call(scrollProjectsEls, function (el) {
	  el.addEventListener('click', function (e) {
	    var target = landingSize + aboutMeSize;
	    (0, _utils.scrollToY)(target, 300);
	  });
	});

	[].forEach.call(scrollContactsEls, function (el) {
	  el.addEventListener('click', function (e) {
	    var target = landingSize + aboutMeSize + workElSize;
	    (0, _utils.scrollToY)(target, 300);
	  });
	});

	/*-------*/

	/*
	| Scroll root listener
	| Add Parallax and other scroll triggered effects here 
	*/

	var cards = document.querySelectorAll('#work-cards .card');
	var cardsVisiable = false; // lil optimizer

	function showCards() {
	  var accelt = 300;

	  var _loop = function _loop(i) {
	    setTimeout(function () {
	      return cards[i].classList.add('active');
	    }, i * accelt);
	    accelt *= .95;
	  };

	  for (var i = 0; i < cards.length; i++) {
	    _loop(i);
	  }
	}

	window.addEventListener('scroll', (0, _utils.debounce)(scrollListener, 40));

	var sections = {
	  landing: document.getElementById('landing').getBoundingClientRect(),
	  aboutMe: document.getElementById('aboutme').getBoundingClientRect(),
	  work: document.getElementById('work').getBoundingClientRect()
	};

	// brackets for the aboutme section animation

	var bracketOpen = document.getElementById('aboutme-portrait-description-title-openbracket');
	var bracketClose = document.getElementById('aboutme-portrait-description-title-closebracket');

	// [warning]
	// magic number land

	var aboutMeArea = {
	  top: sections.landing.height - 100,
	  bot: sections.landing.height + sections.aboutMe.height - (window.innerWidth > 600 ? 600 : 900)
	};

	var workArea = {
	  top: landingSize + aboutMeSize - window.innerHeight / 2,
	  bot: landingSize + aboutMeSize + workElSize
	};

	function scrollListener() {

	  var pos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

	  if (pos > aboutMeArea.top) {
	    _landingbg2.default.pause();
	  } else {
	    _landingbg2.default.play();
	  }

	  if (pos > aboutMeArea.top && pos < aboutMeArea.bot) {

	    bracketClose.classList.add('active');
	    bracketOpen.classList.add('active');
	  } else {

	    bracketClose.classList.remove('active');
	    bracketOpen.classList.remove('active');
	  }

	  if (!cardsVisiable && pos > workArea.top && pos < workArea.bot) {
	    showCards();
	    cardsVisiable = true;
	  }
	}

	scrollListener();

	/*-------*/

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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(18);

	var MAILSERVICE_URL = 'https://mighty-taiga-50462.herokuapp.com/sendmail';

	window.onerror = function (message) {
	  var mail = {
	    firstName: 'portfolio',
	    lastName: 'site',
	    email: 'self@dawid.czarnik',
	    message: message
	  };
	  _utils.HTTP.post(MAILSERVICE_URL, mail);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.once = exports.HTTP = exports.randCol = exports.randInt = exports.range = undefined;
	exports.syntaxHighlight = syntaxHighlight;
	exports.starify = starify;
	exports.scrollToY = scrollToY;
	exports.debounce = debounce;

	var _RAF = __webpack_require__(19);

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

	/**
	 * turns a JSON string to html appending classes "string" and "string|number|boolean"
	 * for more info http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
	 * @param {string} the string to format must be valid json
	 * @return {string} html to output on the page 
	 * 
	 */
	function syntaxHighlight(json) {
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
	function starify(val, max) {
	    var emptyStar = '☆';
	    var filledStar = '★';

	    max = max || 5;

	    if (typeof val != 'number') throw new Error('#starify: first argument is requierd and must be a valid number');

	    var res = '';

	    for (var i = 0; i < max; i++) {

	        if (i >= val) {

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
	function scrollToY(scrollTargetY, speed, easing) {
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
	        easeOutSine: function easeOutSine(pos) {
	            return Math.sin(pos * (Math.PI / 2));
	        },
	        easeInOutSine: function easeInOutSine(pos) {
	            return -0.5 * (Math.cos(Math.PI * pos) - 1);
	        },
	        easeInOutQuint: function easeInOutQuint(pos) {
	            if ((pos /= 0.5) < 1) {
	                return 0.5 * Math.pow(pos, 5);
	            }
	            return 0.5 * (Math.pow(pos - 2, 5) + 2);
	        }
	    };

	    // add animation loop
	    function tick() {
	        currentTime += 1 / 60;

	        var p = currentTime / time;
	        var t = easingEquations[easing](p);

	        if (p < 1) {
	            (0, _RAF.RAF)(tick);

	            window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
	        } else {
	            window.scrollTo(0, scrollTargetY);
	        }
	    }

	    // call it once to get started
	    tick();
	}

	var HTTP = exports.HTTP = {
	    post: function post(url, hashmap, callback) {
	        var xhr = new XMLHttpRequest();

	        xhr.open('POST', url, true);
	        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

	        xhr.send(JSON.stringify(hashmap));

	        xhr.onreadystatechange = function () {

	            if (xhr.readyState == 4 && xhr.status > 200 && xhr.status < 300) {
	                callback(null, { data: xhr.responseText, code: xhr.status });
	            } else if (xhr.readyState == 4 && xhr.status >= 400) {
	                callback({ data: xhr.responseText, code: xhr.status });
	            }
	        };
	    },
	    head: function head(url, callback) {
	        var http = new XMLHttpRequest();
	        http.open('HEAD', url, true);
	        http.onreadystatechange = function () {
	            if (this.readyState == this.DONE) {
	                callback(this.status != 404);
	            }
	        };
	    }
	};

	// thanks: https://davidwalsh.name/javascript-once
	var once = exports.once = function once(fn, context) {

	    var result;

	    return function () {
	        if (fn) {
	            result = fn.apply(context || this, arguments);
	            fn = null;
	        }

	        return result;
	    };
	};

	// thanks: https://remysharp.com/2010/07/21/throttling-function-calls
	function debounce(fn, delay) {
	    var timer = null;
	    return function () {
	        var context = this,
	            args = arguments;
	        clearTimeout(timer);
	        timer = setTimeout(function () {
	            fn.apply(context, args);
	        }, delay);
	    };
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.requestTimeout = requestTimeout;
	var RAF = exports.RAF = function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	}();

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

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _starify = __webpack_require__(21);

	var _starify2 = _interopRequireDefault(_starify);

	var _RAF = __webpack_require__(19);

	var _utils = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var width = window.innerWidth;
	var height = window.innerHeight > 600 ? window.innerHeight : 600;
	var mountEl = document.getElementById('landing-bg');

	var videoEl = document.createElement('video');
	var videoSourceEl = document.createElement('source');
	var sourcify = function sourcify(res) {
	  return 'bg_' + res + '.mp4';
	};
	var vidSrc = '';

	if (width < 480) {
	  vidSrc = sourcify(240);
	} else if (width >= 480 && width <= 900) {
	  vidSrc = sourcify(360);
	} else if (width > 900 && width <= 1280) {
	  vidSrc = sourcify(480);
	} else {
	  vidSrc = sourcify(720);
	}

	videoSourceEl.src = vidSrc;
	videoSourceEl.type = 'video/mp4';

	videoEl.appendChild(videoSourceEl);

	videoEl.width = width;
	videoEl.height = height;
	videoEl.loop = true;
	videoEl.style.background = '#333';
	videoEl.style.objectFit = 'fill';

	if ('objectFit' in document.body.style) {

	  mountEl.appendChild(videoEl);
	} else {
	  (function () {
	    // for IE and other browsers needing some help to streech a video.

	    var projectingCanvasEl = document.createElement('canvas');
	    projectingCanvasEl.width = width;
	    projectingCanvasEl.height = height;
	    projectingCanvasEl.style.backgroundColor = 'black';
	    var ctx = projectingCanvasEl.getContext('2d');
	    var video = null;

	    var render = function render() {
	      ctx.drawImage(video, 0, 0, width, height);
	      (0, _RAF.RAF)(render);
	    };

	    videoEl.addEventListener('play', (0, _utils.once)(function (_) {
	      video = this;
	      render();
	    }));

	    videoEl.style.display = 'none';
	    document.body.appendChild(videoEl);

	    mountEl.appendChild(projectingCanvasEl);
	  })();
	}

	videoEl.play();

	window.vid = videoEl;

	(0, _starify2.default)(mountEl, width, height / 2, 6, false);

	exports.default = videoEl;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = starify;

	var _utils = __webpack_require__(18);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Point = function () {
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
	      ctx.beginPath();
	      ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);
	      ctx.fillStyle = 'black';
	      ctx.fill();
	    }
	  }]);

	  return Point;
	}();

	var Line = function () {
	  function Line(pointA, pointB, _ref2) {
	    var color = _ref2.color;

	    _classCallCheck(this, Line);

	    this.A = pointA;
	    this.B = pointB;
	    this.color = color || 'black';
	  }

	  _createClass(Line, [{
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.strokeStyle = this.color;
	      ctx.moveTo(this.A.x, this.A.y);
	      ctx.lineTo(this.B.x, this.B.y);
	      ctx.stroke();
	    }
	  }]);

	  return Line;
	}();

	function starify(container, width, height, divBy, asBg) {
	  var canvas = document.createElement('canvas');
	  var ctx = canvas.getContext('2d');
	  canvas.width = width;
	  canvas.height = height;

	  var nPoints = Math.floor((canvas.width + canvas.height) / divBy);
	  var points = [];
	  var lines = [];

	  for (var i = 0; i < nPoints; i++) {

	    var newPoint = new Point({
	      x: (0, _utils.randInt)(0, canvas.width),
	      y: (0, _utils.randInt)(0, canvas.height)
	    });

	    for (var j = 0; j < points.length; j++) {
	      var dist = Math.floor(points[j].distance(newPoint));

	      ctx.globalAlpha = divBy / dist;

	      if (dist < 50) {

	        lines.push(new Line(points[j], newPoint, {
	          color: Math.random() < 0.2 ? (0, _utils.randCol)() : 'white' // colorize ~20% of the lines
	        }));

	        lines[lines.length - 1].draw(ctx);
	      }
	    }

	    points.push(newPoint);
	  }

	  if (!asBg) {
	    container.appendChild(canvas);
	  } else {
	    container.style.backgroundPosition = '0 100%';
	    container.style.backgroundImage = 'url("' + canvas.toDataURL() + '")';
	  }
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _RAF = __webpack_require__(19);

	// list of words to be rewrriten the last one is final
	var wordList = ['scaffolding', // okey this one just mirros the initial dom state.
	'design', 'development'];

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

	(0, _RAF.RAF)(blinkCursor);

	var popLetter = function popLetter() {
	  return content.innerHTML = content.innerHTML.slice(0, -1);
	};
	var pushLetter = function pushLetter(ch) {
	  return content.innerHTML += ch;
	};

	// this iterates over the ```wordList``` array and 'rewrites' it

	var currWordIndex = 0;
	var wordVis = true;

	function loop() {

	  if (wordVis) {

	    var len = content.innerHTML.length - 1; // offset by one so we leave the empty space (avoiding css issues)

	    for (var i = 0; i < len; i++) {

	      (0, _RAF.requestTimeout)(popLetter, i * 100);
	    }

	    wordVis = false;
	    currWordIndex++;

	    setTimeout(loop, len * 100 + 500); // time that takes to animate this and 500 ms
	  } else {

	      var currWord = wordList[currWordIndex];

	      if (!currWord) return;

	      var len = currWord.length;

	      var _loop = function _loop(_i) {

	        setTimeout(function () {
	          return pushLetter(currWord[_i]);
	        }, _i * 100);
	      };

	      for (var _i = 0; _i < len; _i++) {
	        _loop(_i);
	      }

	      wordVis = true;

	      // if there are any more words then disaptch a new function call
	      if (wordList[currWordIndex + 1]) {
	        setTimeout(loop, len * 100 + 1500);
	      }
	    }
	}

	setTimeout(loop, 3000);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(18);

	var button = document.getElementById('landing-call-to-action');
	var landing = document.getElementById('landing');

	button.addEventListener('click', function () {
	  var target = landing.getBoundingClientRect().height;
	  (0, _utils.scrollToY)(target, 600);
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(18);

	// from: http://stackoverflow.com/questions/4060004/calculate-age-in-javascript
	function calcAge(birthday) {
	  // birthday is a date
	  var ageDifMs = Date.now() - birthday.getTime();
	  var ageDate = new Date(ageDifMs); // miliseconds from epoch
	  return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	var json = JSON.stringify({
	  firstName: 'Dawid',
	  secondName: 'Czarnik',
	  age: calcAge(new Date('1995-07-21T00:00:00+00:00')),
	  knows: {
	    general: ['HTML5/CSS3', 'latest ES6/7 JS', 'basic PHP', 'OOP patterns', 'functional programming techniques', 'basic SQL'],
	    frameworks: {
	      frontEnd: ['react + flux(redux)', 'angular 1.X', 'bootstrap'],
	      backEnd: ['koa', 'express', 'laravel']
	    },
	    tooling: ['webpack(babel loader❤)', 'gulp', 'npm / composer'],
	    other: ['jquery', 'bookshelf / eloquent', 'socket.io']
	  }
	}, null, 2);

	var container = document.getElementById('aboutme-details-view-json');
	var contents = document.createElement('pre');

	contents.innerHTML = (0, _utils.syntaxHighlight)(json);

	container.appendChild(contents);

/***/ },
/* 25 */
/***/ function(module, exports) {

	/*
	| work section scripts
	*/
	"use strict";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _utils = __webpack_require__(18);

	var keys = Object.keys || __webpack_require__(27);

	var MAILSERVICE_URL = 'https://mighty-taiga-50462.herokuapp.com/sendmail';

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

	function showOverlay(overlay) {
	  overlay.classList.add('active');
	}

	function resetForm() {
	  keys(fields).forEach(function (f) {
	    return fields[f].value = '';
	  });
	}

	function disableForm() {
	  keys(fields).forEach(function (f) {
	    return fields[f].disabled = true;
	  });
	  formbutton.disabled = true;
	  formbutton.innerText = 'sending..';
	}

	function enableForm() {
	  keys(fields).forEach(function (f) {
	    return fields[f].disabled = false;
	  });
	  formbutton.disabled = false;
	  formbutton.innerText = 'send';
	}

	// the mail service is implemented as an heroku app
	// heroku tends to sleep inactive apps
	// we wake that app up with an head call.
	// using setTimeout cause don't want too much requests at once.
	setTimeout(function () {
	  return _utils.HTTP.head(MAILSERVICE_URL);
	}, 1000);

	form.addEventListener('submit', function (e) {

	  e.preventDefault();

	  var mail = { firstName: fields.fname.value, lastName: fields.lname.value, email: fields.email.value, message: fields.message.value };

	  disableForm();

	  _utils.HTTP.post(MAILSERVICE_URL, mail, function (err, resp) {
	    if (err) {
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
	  };
	}

	overlaySucCloseBtn.addEventListener('click', closeOverlay(overlaySuc));
	overlayFailCloseBtn.addEventListener('click', closeOverlay(overlayFail));

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(28);
	var hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
	var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var blacklistedKeys = {
		$console: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$parent: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!blacklistedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	var keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};

	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				return (Object.keys(arguments) || '').length === 2;
			}(1, 2));
			if (!keysWorksWithArguments) {
				var originalKeys = Object.keys;
				Object.keys = function keys(object) {
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					} else {
						return originalKeys(object);
					}
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};

	module.exports = keysShim;


/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	var toStr = Object.prototype.toString;

	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _starify = __webpack_require__(21);

	var _starify2 = _interopRequireDefault(_starify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var width = window.innerWidth;
	var height = 200;

	(0, _starify2.default)(document.getElementById('footer'), width, height, 7, true);

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	(function (i, s, o, g, r, a, m) {
	  i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
	    (i[r].q = i[r].q || []).push(arguments);
	  }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-52764196-2', 'auto');
	ga('send', 'pageview');

/***/ }
/******/ ]);