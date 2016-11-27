function Zin(zn,s,c,x,y){
 this.zn=zn;
 this.s=s;
 this.c=c;
 this.x=x;
 this.y=y;

this.moves=function(){
  this.x=this.x+random(-2,2);
  this.y=this.y+random(-2,2);
}

this.draws=function(){
  textSize(this.s);
  fill(this.c);
  text(this.zn,this.x,this.y);
}

}