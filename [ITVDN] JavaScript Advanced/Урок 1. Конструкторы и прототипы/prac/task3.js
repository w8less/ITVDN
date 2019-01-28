var Human = function(name,secondName,sex){
	// свойство экземпляра
	this.name = name;
	this.surname = secondName;
	this.sex = sex;
	// метод экземпляра
	this.talk = function(){
		document.write("hello i`m : " + Human.kind + " my name`s " + this.name + " my surname`s " + this.surname + " i`m a " + this.sex + "<hr/>");
	};
}
// свойство функции-конструктора
Human.kind = "human";
// метод функции конструктора
Human.talk2 = function(){
		document.write("hello i have argument : " + this.name + "<hr/>");
	};

var man = new Human("Alex","Granovetskyi","boy");
man.talk();
man.constructor.talk2();
Human.talk2();

