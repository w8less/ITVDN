var Box = function(h,w,d,m) {
	this.height = h;
	this.width = w;
	this.depth = d;
	this.material = m;
};
Box.prototype.volume = function(){ return this.height*this.width*this.depth};
Box.prototype.equals = function(otherObj){ 
	if (this.volume == otherObj.volume && this.material == otherObj.material){
		return true;
	}
		return false;
};


var box1 = new Box(100,20,5,'iron');
var box2 = new Box(10,20,50,'iron');

document.write(box1.equals(box2));
document.write(box2.equals(box1));
