function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  };

function Human(Name, Surname, age){
	this.firstName = Name;
	this.secondName = Surname;
	this.age = age;

	this.show = function(){
			document.write(this.firstName + "<br/>" + this.secondName + "<br/>"+ this.age + "<hr/>");
		}

};

/*Human.prototype.show = function(){
	document.write(this.firstName + this.secondName + this.age);
};*/

var people = new Array(10);


for (var i = 0; i < people.length; i++){
	people[i] = new Human("Name" + i,"Surame" + i, randomInteger(18,50));
};

document.write("<hr/>");
document.write("po vozrostaniu");
document.write("<hr/>");

people.sort(function(a,b){
	if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  // a должно быть равным b
  return 0;
})

for (var i = 0; i < people.length; i++){
	people[i].show();
};

document.write("<hr/>");
document.write("po ubuvaniu");
document.write("<hr/>");

people.sort(function(a,b){
	if (a.age > b.age) {
    return -1;
  }
  if (a.age < b.age) {
    return 1;
  }
  // a должно быть равным b
  return 0;
})

for (var i = 0; i < people.length; i++){
	people[i].show();
};