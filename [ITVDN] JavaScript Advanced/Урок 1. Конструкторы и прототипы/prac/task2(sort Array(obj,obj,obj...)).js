var Human = function(human,a){
	this.name = human,
	this.age = Math.floor(Math.random()*21)*(a+1)
};
var mas = new Array(10);
for (var i = 0; i < mas.length ; i++){
	mas[i] = new Human('human_'+i + " his age" ,i);
};


mas.sort(function(x,y){
	if (x.age < y.age )
		return 1;
	if (x.age > y.age)
		return -1;
	return 0;
});

for(var i = 0; i < mas.length; i++){
	document.write(mas[i].name + "  " + mas[i].age + "</br>");
};
document.write("<hr/>")
for(var i = 0; i < mas.length; i++){
	document.write(mas[i].name + "  " + mas[i].age + "</br>");
};
document.write("<hr/>")

