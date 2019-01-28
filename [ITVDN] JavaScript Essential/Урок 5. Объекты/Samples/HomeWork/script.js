var manager = new Object();
manager.firstName = "Alex";
manager.secondName = "Epic";
manager.age = 21;

var secretary = new Object();
secretary.firstName = "Anastasia";
secretary.secondName = "Yatsishina";
secretary.age = 22;

for(element in manager){
	document.write(manager[element] + "<br>");
}
document.write("<hr>")
for(element in secretary){
	document.write(secretary[element] + "<br>");
}