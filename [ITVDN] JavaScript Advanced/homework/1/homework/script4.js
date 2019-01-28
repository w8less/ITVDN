function Pcomputer(cpu,video,brand,price){
	this.cpu = cpu;
	this.video = video;
	this.brand = brand;
	this.price = price;

};


var firctPC = new Pcomputer(4, 2 , "lenovo" , 8000);
document.write(firctPC.toString() + "<br/>")
document.write(firctPC.toString() + "<hr/>")

Pcomputer.prototype.toString = function(){
	return "cpu = " + this.cpu + "<br/>video = " + this.video + "<br/>brand = " + this.brand + "<hr/>";
}
var secondPC = new Pcomputer(8, 4 , "lenovo" , 16000);
document.write(secondPC + "<br/>")
document.write(secondPC.toString())
