function Human(name, surname, age ) {
	// body...
	this.name = name ;
	this.surname = surname;
	this.age = age;
}
Human.prototype.tsenz = function(){
	if (this.age >= 18){
		document.write(this.name + " can watched 18+ movie`s <br/>" );
	}
	else{
		document.write(this.name + " can`t watched 18+ movie`s <br/> ");
	}
};

var human1 = new Human("Alex", "McClain", 19);
var human2 = new Human("Jane", "McClain", 10);

human1.tsenz();
human2.tsenz();