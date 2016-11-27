//var inp;
var aantal=30;
var zinnen=[];


function setup() {
  fullscreen(true);
  createCanvas(windowWidth,windowHeight-20);
  
  background(0);
  for (var i=0;i<aantal;i++){
        var s= random(15,75);
        var c= color(random(155,255),random(155,255),random(155,255));
        var z="Let love rule!";//inp.value();
        textSize(s);
        var l=textWidth(z);
        var x=random(10, width-l-10);
        var y=random(5+s,height-0.5*s);
        zinnen[i]=new Zin(z,s,c,x,y);
  }
  inp = createInput('type je zin en dan rechtermuis');
  inp.input(myInputEvent);
}

function draw() {
  background(0);
  for (var i=0;i<zinnen.length;i++){
    zinnen[i].moves();
    zinnen[i].draws();
  }
}


function mousePressed(){
  if (mouseButton ==RIGHT){
     for (var i=0;i<aantal;i++){
        var s= random(12,55);
        var c= color(random(55,255),random(55,255),random(55,255));
        var z=inp.value();
        textSize(s);
        var l=textWidth(z);
        var x=random(10, width-l-10);
        var y=random(5+s,height-0.5*s);
        zinnen[i]=new Zin(z,s,c,x,y);
     }
  } else if (mouseButton==CENTER){
    background(0);
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight-20);
}

function myInputEvent(){
  console.log('you are typing: ', this.value());
}



  
