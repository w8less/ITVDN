function Books(author, year){
	// svoistva ekz
	this.author = author;
	this.year = year; 
	// metod ekz
	this.show = function(){
		document.write("some info about book :<br/>" + "author --->" + this.author + "<br/> year --->" + this.year)
	}	
}
// svoistva func konstr
Books.title = "some";

// metod func konstr

Books.onlyAuthor = function(){
	alert("Author hui");
}
var book1 = new Books("David" , 1985);
book1.show();
Books.onlyAuthor();