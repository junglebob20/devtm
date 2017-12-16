$(document).ready(function() {
  var circleAnimate1=0;
  var circleAnimate2=0;
    $('.containerCanvas').click(function() {
      circleAnimate1=circleAnimate1+90;
      circleAnimate2=circleAnimate2-90;
        $('#myCanvas4').css({transform:'rotate('+circleAnimate1+'deg)'});
        $('#myCanvas3').css({transform:'rotate('+circleAnimate2+'deg)'});
    });
});
var option={
  staticCircles:[{color:'#ffb84a',lineWidth:3,pStart:2,pEnd:0,segments:true}],
  staticCircles1:[
  	{color:'#aeaeae',lineWidth:3,pStart:0.9,pEnd:1.6,segments:true}],
    staticCircles2:[{color:'#6d6d6d',lineWidth:3,pStart:1.8,pEnd:0.4,segments:true}],
    staticCircles3:
            [{color:'#d8d8d8',lineWidth:35,pStart:0.1,pEnd:0.6,segments:false},
    {color:'#e3e3e3',lineWidth:35,pStart:0.6,pEnd:1.1,segments:false},
    {color:'#d8d8d8',lineWidth:35,pStart:1.1,pEnd:1.6,segments:false},
    {color:'#e3e3e3',lineWidth:35,pStart:1.6,pEnd:2.1,segments:false}],

    first_circle:[{color:'#ffb84a',lineWidth:50,pStart:0.35,pEnd:0.65,segments:false},
    {color:'#ffb84a',lineWidth:50,pStart:0.85,pEnd:1.15,segments:false},
    {color:'#ffb84a',lineWidth:50,pStart:1.35,pEnd:1.65,segments:false},
    {color:'#ffb84a',lineWidth:50,pStart:1.85,pEnd:2.15,segments:false},

    {color:'#ffb84a',lineWidth:3,pStart:2,pEnd:0,segments:true}],

   second_circle:[{color:'#f2f2f2',lineWidth:50,pStart:0.4,pEnd:0.6,segments:false},
    {color:'#d8d8d8',lineWidth:50,pStart:0.6,pEnd:0.9,segments:false},
    {color:'#f2f2f2',lineWidth:50,pStart:0.9,pEnd:1.1,segments:false},
    {color:'#d8d8d8',lineWidth:50,pStart:1.1,pEnd:1.4,segments:false},
    {color:'#f2f2f2',lineWidth:50,pStart:1.4,pEnd:1.6,segments:false},
    {color:'#d8d8d8',lineWidth:50,pStart:1.6,pEnd:1.9,segments:false},
    {color:'#f2f2f2',lineWidth:50,pStart:1.9,pEnd:2.1,segments:false},
    {color:'#d8d8d8',lineWidth:50,pStart:2.1,pEnd:2.4,segments:false}]};
var canvasImgWrap = document.getElementById('myCanvas');
var canvas1 = document.getElementById('myCanvas1');
var canvasLine = document.getElementById('myCanvasLine');
var canvas2=document.getElementById('myCanvas2');
var canvas3=document.getElementById('myCanvas3');
var canvas4=document.getElementById('myCanvas4');
var ctxImgWrap=canvasImgWrap.getContext('2d');
var ctx1 = canvas1.getContext('2d');
var ctxLine = canvasLine.getContext('2d');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');
var ctx4 = canvas4.getContext('2d');
function drawCircle(canvas,context,color, lineWidth,P1,P2,segments){
  var radius=(canvas.width-lineWidth)/2;
  context.beginPath();
	context.arc(canvas.width/2, canvas.height/2, radius, P1 * Math.PI,P2 * Math.PI,segments);
  context.strokeStyle = color;
	context.lineWidth = lineWidth
  context.stroke();
}
function setup(){
  option.staticCircles.forEach(function(e){
  	drawCircle(canvasImgWrap,ctxImgWrap,e.color,e.lineWidth,e.pStart,e.pEnd,e.segments);
  });
	option.staticCircles1.forEach(function(e){
  	drawCircle(canvas1,ctx1,e.color,e.lineWidth,e.pStart,e.pEnd,e.segments);
  });
  option.staticCircles2.forEach(function(e){
  	drawCircle(canvasLine,ctxLine,e.color,e.lineWidth,e.pStart,e.pEnd,e.segments);
  });
  option.staticCircles3.forEach(function(e){
    drawCircle(canvas2,ctx2,e.color,e.lineWidth,e.pStart,e.pEnd,e.segments);
  });
  option.first_circle.forEach(function(e){
    drawCircle(canvas3,ctx3,e.color,e.lineWidth,e.pStart,e.pEnd,e.segments);
  });
  option.second_circle.forEach(function(e){
    drawCircle(canvas4,ctx4,e.color,e.lineWidth,e.pStart,e.pEnd,e.segments);
  });
}
setup();
