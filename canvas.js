var canvas=document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// to draw the canvas
var c= canvas.getContext("2d");
c.fillStyle="lightpink";
c.fillRect(40 ,50 ,100 ,100);




// lets draw a line
c.beginPath();
c.moveTo(300,50);
c.lineTo(200,200);
// to color the line
c.strokeStyle="red";
c.stroke();
