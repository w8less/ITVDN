var input = prompt("vvedit chislo");
var sq = Math.sqrt(input);
input = parseInt(input);
sq = parseInt(sq);
var sign;
var proste;
var chastka;
// vkladeni func
function task(x){
	if (x == 0){
		alert("error");
	}
	else if (x > 0){
		sign = "positive" ;
		document.write( sign + "<hr/>");
	}
	else{ 
		sign = "negative";
		document.write( sign + "<hr/>");
	}

// div
	function div(x){

	if (x % 2 == 0){
		chastka = "dilutsya bez ostachi na 2";
	    document.write(chastka + "<hr/>");
	}

	if (x % 3 == 0){
		chastka = "dilutsya bez ostachi na 3";
	    document.write(chastka + "<hr/>");
	}

	if (x % 5 == 0){
		chastka = "dilutsya bez ostachi na 5";
	    document.write(chastka + "<hr/>");
	}

	if (x % 6 == 0){
		chastka = "dilutsya bez ostachi na 6";
	    document.write(chastka + "<hr/>");
	}

	if (x % 9 == 0){
		chastka = "dilutsya bez ostachi na 9";
	    document.write(chastka + "<hr/>");
	}
}

// proste or ni
	function prime(x){

		if (((Math.abs(x) % 2 == 0) && (Math.abs(x) != 2))||(x < 1)) // любое четное число - составное
		     document.write("Составное число");

		else if (Math.abs(x) == 2)//число 2 простое
		     document.write("Простое число");
 
		else{ // число нечетное
		     k=Math.round(Math.sqrt(x));
		     var flag = false;		             
		     for(i=2; i<k+1; i++)
		        if(Math.abs(x) % i==0)
		        {
		          document.write("Составное число");
		          flag = true;
		          break;
		         }
		            
		     if (flag == false)
		       document.write("Простое число");
		}
	}

	div(input);
	prime(input);
}
	task(input);
