// window.onload()=function(){
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 800;
var c = canvas.getContext('2d');


var cx3 = window.innerWidth;
var cx = 0;
var cx2 = window.innerWidth;
var gamePts=0;
function playButtonFn() {
    var playbutton = document.querySelector('#b1');
    var scoreBoard=document.querySelector('#score-board')
    playbutton.addEventListener('click', function () {
        // console.log("hello world");
        // console.log(cx);
        // console.log(cx2);
        // console.log(cx3);
        if(Math.abs(cx2-cx3)<15&&Math.abs(cx-cx2)<35 && Math.abs(cx-cx3)<35 )
        {   
            playbutton.style.background="green";
            playbutton.innerHTML="Great job. Go on!";
            gamePts+=1;
            if(gamePts==1)
            scoreBoard.style.color="green";

            console.log("Congrats! You got 1 more point")
        }else
        {
            playbutton.style.background="red";
            playbutton.innerHTML="Please time correctly!";
        }
        console.log("Current Points: "+gamePts);
        scoreBoard.innerHTML=`Current Score: ${gamePts}`;
    });

}



function animate() {

    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    c.beginPath();
    c.arc(cx3, 700, 50, 0, 2 * Math.PI);
    cx3 -= 18;
    if (cx3 < -window.innerWidth)
        cx3 = -(cx3) ;
    c.stroke();

    c.beginPath();
    c.arc(cx, 500, 50, 0, 2 * Math.PI);
    cx += 18;
    if (cx > window.innerWidth)
        cx = -(cx); // 1900 is calibrated value ;)
    c.stroke();

    c.beginPath();
    c.arc(cx2, 300, 50, 0, 2 * Math.PI);
    cx2 -= 18;
    if (cx2 < -window.innerWidth)
        cx2 = -(cx2) ;
    c.stroke();

    requestAnimationFrame(animate);
}
animate();
playButtonFn();
// }