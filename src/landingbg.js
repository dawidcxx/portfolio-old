import {randInt, randCol} from './utils';

var container = document.getElementById('landing-bg');
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = (window.innerHeight > 600) ? window.innerHeight : 600;

class Point {
  constructor({x, y}) {
    this.x = x;
    this.y = y;
  }
   
  // calc the distance between two points 
  distance(secondPoint) {
    return Math.sqrt(Math.pow(this.x - secondPoint.x, 2) + Math.pow(this.y - secondPoint.y, 2));
  }
  
  // for debugging 
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'black'
    ctx.fill();
  }
  
}

class Line {
  constructor(pointA, pointB, {color, lineWidth}) {
    this.A = pointA;
    this.B = pointB;
    this.color = color || 'black';
    this.lineWidth = lineWidth || 1;
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.A.x, this.A.y);
    ctx.lineTo(this.B.x, this.B.y);
    ctx.stroke();
  }
}

var nPoints = window.innerWidth > 700 ? Math.floor((canvas.width + canvas.height) / 2) : Math.floor((canvas.width + canvas.height) / 4);
var points = [];
var lines = [];

for(var i = 0; i < nPoints; i++) {
  
  var newPoint = new Point({
    x: randInt(0, canvas.width),
    y: randInt(0, canvas.height)
  });
  
  
  for (var j = 0; j < points.length; j++) {
      var dist = Math.floor(points[j].distance(newPoint))
      
      if(dist < 75) {
        
        lines.push(new Line(
          points[j], newPoint, {
            lineWidth: 7 / dist,
            color: Math.random() < 0.2 ? randCol() : 'white' // colorize ~20% of the lines
          }
        ));
        
        lines[lines.length - 1].draw(ctx);
        
      }
      
  }
  
  points.push(newPoint);
  
}


window.addEventListener('resize', () => {
  lines.forEach(line => line.draw(ctx));
});

container.appendChild(canvas);
