var Constr = function(arg){
	// свойство экземпляра
	this.property1 = arg;
	// метод экземпляра
	this.ongoing1 = function(){
		document.write("hello i have argument : " + this.property1 + "<hr/>");
	};
}
// свойство функции-конструктора
Constr.property2 = "hello";
// метод функции конструктора
Constr.ongoing2 = function(){
	document.write("hello it`s ongoing2 :  " + this.property2);
};

var variable = new Constr(50);
variable.ongoing1();
variable.constructor.ongoing2();
/*alert(variable.constructor.property2);*/

