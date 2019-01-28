var matr = new Array(5);


//create matr

for(var i = 0; i < matr.length; i++){
	matr[i] = new Array(5);
}
// create random numeric

var min = -100;
var max = 100;
var l = Math.floor(Math.random() * (max - min + 1)) + min;

//innicialize

for(var row = 0; row < matr.length; row++){
	for(var col = 0; col < matr[row].length; col++){
		matr[row][col] =  (row + 1) * Math.floor(Math.random() * (max - min + 1)) + min;
	}
}


//document.write(matr)
document.write("<hr/>");
for(var row = 0; row < matr.length; row++){
	for(var col = 0; col < matr[row].length; col++){	
	document.write(matr[row][col]);
	}
	document.write("<br/>");
}
document.write("<hr/>");

// 1 0 

for(var row = 0; row < matr.length; row++){
	for(var col = 0; col < matr[row].length; col++){	
	if (+matr[row][col] > 0) {
		matr[row][col] = 1; 
	}
	else {
		matr[row][col] = 0;
	}

	}
}

//document.write(matr)
for(var row = 0; row < matr.length; row++){
	for(var col = 0; col < matr[row].length; col++){	
	document.write(matr[row][col]);
	}
	document.write("<br/>");
}
document.write("<hr/>");

