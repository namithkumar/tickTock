var h, m, s;
var hAngle, mAngle, sAngle; 

function setup(){
    createCanvas(400,400); 
    angleMode(DEGREES);   
}

function draw(){
    background(0);
    translate(200,200)
    rotate(-90);
    
    h = hour();
    m = minute();
    s = second();

    sAngle = map(s, 0, 60, 0, 360);
    mAngle = map(m,0,60,0,360)
    hAngle = map(h % 12,0,12,0,360)

    push();
    rotate(sAngle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    push();
    rotate(mAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    push();
    rotate(hAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    strokeWeight(10);
    noFill();

    stroke(255,0,0);
    arc(0,0,300,300,0,sAngle);

    stroke(0,255,0);
    arc(0,0,280,280,0,mAngle);

    stroke(0,0,255);
    arc(0,0,260,260,0,hAngle);
}