var hr,mn,sc
var hourangle, secondangle, minangle
function setup(){
createCanvas(400,400)
angleMode(DEGREES)
}

function draw(){
background('black')
translate(200,200)
rotate(-90)

hr = hour()
mn = minute()
sc = second()

secondangle = map(sc,0,60,0,360)
minangle = map(mn,0,60,0,360)
hourangle = map(hr%12,0,12,0,360)

push();
rotate(secondangle);
stroke('purple');
strokeWeight(4);
line(0,0,100,0);
pop()

push();
rotate(minangle);
stroke('red');
strokeWeight(4);
line(0,0,75,0);
pop()

push();
rotate(hourangle);
stroke('green');
strokeWeight(4);
line(0,0,50,0);
pop()

strokeWeight(10)
stroke('purple')
noFill()
arc(0,0,300,300,0,secondangle)
stroke('red')
arc(0,0,280,280,0,minangle)
stroke('green')
arc(0,0,260,260,0,hourangle)
}