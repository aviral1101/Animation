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



// lets make an arc
c.beginPath();
c.arc(250 ,240 , 30 ,0, Math.PI*2,false);
c.stroke();


// function Circle(x,y,dx,dy,radius){
//   this.x=x;
//   this.y=y;
//   this.draw=function(){
//
//   }
// }


/// making a bouncing circle
var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var dx=Math.random()-0.5;
var dy=Math.random()-0.5;
var radius =30;
function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  c.beginPath();
  c.arc(x,y,radius,0,Math.PI*2,false);
  c.strokeStyle="blue";
  c.storke();
  if (x+radius>innerWidth || x-radius<0){
    dx=-dx;
  }
  if (y+radius>innerWidth||y-radius<0){
    dy=-dy;
  }
  x+=dx;
  y+=dy;

}
