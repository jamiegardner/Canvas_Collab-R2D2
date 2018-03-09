var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function drawRect(x,y,w,h,c) {
    ctx.fillStyle = c;
    ctx.fill();
    ctx.fillRect(x,y,w,h);
}

drawRect(331,320,340,391,'#fff'); <!-- R2D2 Body Section -->
drawRect(320,320,-65,424,'#fff'); <!-- R2D2 Leftarm Section -->
drawRect(265,478,-11,200,'#82abdd'); <!-- R2D2 Leftarm inner-rectangle Section -->
drawRect(297,700,-21,21,'#e7e7e7'); <!-- R2D2 Leftarm inner-square Section -->
drawRect(331,320,-11,160,'#e7e7e7'); <!-- R2D2 Leftarm to Head Connector -->

drawRect(472,752,48,34,'#fff'); <!-- R2D2 Middlefoot Connector -->


<!-- R2D2 Leftfoot Section -->
ctx.beginPath();
ctx.moveTo(320,743);
ctx.lineTo(345,743);
ctx.lineTo(369,826);
ctx.lineTo(215,826);
ctx.lineTo(239,743);
ctx.fillStyle = '#fff';
ctx.fill();
ctx.closePath();

<!-- R2D2 Underbelly Section -->
ctx.beginPath();
ctx.moveTo(369,711);
ctx.lineTo(393,752);
ctx.lineTo(609,752);
ctx.lineTo(634,711);
ctx.lineTo(369,711);
ctx.fillStyle = '#e7e7e7';
ctx.fill();
ctx.closePath();

<!-- R2D2 Middlefoot Section -->
ctx.beginPath();
ctx.moveTo(472,785);
ctx.lineTo(444,785);
ctx.lineTo(420,869);
ctx.lineTo(571,869);
ctx.lineTo(547,785);
ctx.fillStyle = '#fff';
ctx.fill();
ctx.closePath();

<!-- R2D2 Head Section -->
ctx.beginPath();
ctx.moveTo(332,319);
ctx.bezierCurveTo(340,100,660,100,670,319);
ctx.fillStyle = '#e7e7e7';
ctx.fill();

drawRect(486,786,19,69,'#e7e7e7'); <!-- R2D2 Middlefoot inner-rectangle  -->