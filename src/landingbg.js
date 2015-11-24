import {randInt, randCol} from './utils';

var container = document.getElementById('landing-bg');
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = (window.innerHeight > 600) ? window.innerHeight : 600;

container.appendChild(canvas);

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
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
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

var nPoints = Math.floor((canvas.width + canvas.height) / 10);
var points = [];
var lines = [];

ctx.shadowBlur = 10;
ctx.shadowColor = '#ff6d00';

for(var i = 0; i < nPoints; i++) {
  
  var newPoint = new Point({
    x: randInt(0, canvas.width),
    y: randInt(0, canvas.height)
  });
  
  
  for (var j = 0; j < points.length; j++) {
      var dist = Math.floor(points[j].distance(newPoint))
      
      if(dist < 128) {
        
        lines.push(new Line(
          points[j], newPoint, {
            lineWidth: 7 / dist,
            color: Math.random() < 0.5 ? randCol() : 'black' // colorize ~50% of the lines
          }
        ));
        ctx.shadowColor = Math.random() > 0.1 ? randCol() : 'black';    
        lines[lines.length - 1].draw(ctx);
        
      }
      
  }
  
  points.push(newPoint);
  
}

// highlight 10 points
for(var i = 0; i < 10; i++) {
  
  lines[randInt(0, lines.length - 1)].A.draw(ctx);
  
}