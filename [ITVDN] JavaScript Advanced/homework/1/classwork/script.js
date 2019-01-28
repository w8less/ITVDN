function Box(w,h,d,m){
	this.width = w;
	this.height = h;
	this.depth = d;
	this.material = m;
	Box.prototype.volume = function(){
		return this.width * this.height * this.depth 
	};
	Box.prototype.equal = function(other){
		return this.volume() === other.volume() && this.material === other.material

	};

}
var box1 = new Box (100, 200, 300, "paper");
var box2 = new Box (100, 200, 300, "paper");

var result = box1.equal(box2);
alert(result);