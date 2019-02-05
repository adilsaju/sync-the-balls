// window.onload()=function(){
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 800;
var c = canvas.getContext('2d');


var cx = 100;
var cx2 = 100;
var cx3 = 100;
var gamePts=0;
function playButtonFn() {
    var playbutton = document.querySelector('#b1');
    playbutton.addEventListener('click', function () {
        // console.log("hello world");
        // console.log(cx);
        // console.log(cx2);
        // console.log(cx3);
        if(Math.abs(cx2-cx3)<15&&Math.abs(cx-cx2)<35 && Math.abs(cx-cx3)<35 )
        {
            gamePts+=1;
            console.log("Congrats! You got 1 more point")
        }
        console.log("Current Points: "+gamePts);

    });

}



function animate() {

    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // ctx.clearRect(20, 20, 100, 50);
    // c2.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // c3.clearRect(0, 0, window.innerWidth, window.innerHeight);


    c.beginPath();
    c.arc(cx, 500, 50, 0, 2 * Math.PI);
    cx += 8;
    if (cx > window.innerWidth)
        cx = -(cx) + 1900;
    c.stroke();

    c.beginPath();
    c.arc(cx2, 300, 50, 0, 2 * Math.PI);
    cx2 -= 8;
    if (cx2 < -100)
        cx2 = -(cx2) + 2000;
    c.stroke();

    c.beginPath();
    c.arc(cx3, 700, 50, 0, 2 * Math.PI);
    cx3 -= 16;
    if (cx3 < -100)
        cx3 = -(cx3) + 2000;
    c.stroke();

    requestAnimationFrame(animate);
}
animate();
playButtonFn();
// }