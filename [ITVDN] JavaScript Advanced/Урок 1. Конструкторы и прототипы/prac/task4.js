var Circle = function(r){ 
	this.r = r;
};

Circle.prototype.getArea = function(){
	// area of circle
	return Math.PI * this.r**2;
};

Circle.prototype.valueOf = function() {
	return this.getArea();
};

var circle1 = new Circle(1);
var circle2 = new Circle(2);
document.write(circle1 + "<hr/>");
document.write(circle1.getArea() + "<hr/>");


document.write(circle1 + circle2 + "<hr/>");
document.write(circle2.valueOf() + "<hr/>");
