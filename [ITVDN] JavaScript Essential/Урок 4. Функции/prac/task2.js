var numb = prompt("vvedit chislo");
function test(a){
	if (a == 0){
		document.write("vy vvely '0' ");
	}
	else if(a == null){
		document.write("vy nichogo ne vvely");
	}
	else{
		
		if(a > 0){	
			document.write("dod");
		}
		else if (a < 0){
			document.write("vid");
		}
	
		document.write("<hr/>");

		var k = 0;
		
		for(var i = 2; i <= a; i++){
			if (a%i == 0){
				k += 1;
			} 
		};
		
		if (k == 1){
			document.write("prime");
		}
		else{
			document.write("scladene");
		};
		document.write("<hr/>")
		a = parseInt(a);
		if (a%2 == 0){
			document.write("numb dil na 2" + "</br>");
		};
		if (a%3 == 0){
			document.write("numb dil na 3" + "</br>");
		};
		if (a%5 == 0){
			document.write("numb dil na 5" + "</br>");
		};
		if (a%6 == 0){
			document.write("numb dil na 8" + "</br>");
		};
		if (a%9 == 0){
			document.write("numb dil na 9" + "</br>");
		};
	};
	};

test(numb);