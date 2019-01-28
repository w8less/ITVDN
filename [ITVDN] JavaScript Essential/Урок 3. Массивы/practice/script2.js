
var matr = Array(5);
for (var i = 0; i < matr.length; i++){
	matr[i] = Array(5);
};

for (var row = 0; row < matr.length; row++ ){
	for(var col = 0; col < matr[row].length; col++ ){
		matr[row][col] = Math.floor(Math.random() * 19) - 9;
		
	}
}

for (var row = 0; row < matr.length; row++ ){
	for(var col = 0; col < matr[row].length; col++ ){
		document.write(matr[row][col]);
	}
	document.write("</br>");
}
document.write("<hr>")
for (var row = 0; row < matr.length; row++ ){
	for(var col = 0; col < matr[row].length; col++ ){
		if (row == col){
			if(matr[row][col] < 0){
				matr[row][col] = 0;
			}
			else if(matr[row][col] > 0){
				matr[row][col] = 1;
			};
		};
		
	}
}

for (var row = 0; row < matr.length; row++ ){
	for(var col = 0; col < matr[row].length; col++ ){
		document.write(matr[row][col]);
	}
	document.write("</br>");
}


