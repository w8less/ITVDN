var a = +prompt("vvedit znach a = ");
var b = +prompt("vvedit znach b = ");
var opp = prompt("vvedit opperation");
var result;

function add(a,b){
	return a + b;
}
function sub(a,b){
	return a - b;
}
function mul(a,b){
	return a * b;
}
function div(a,b){	
 	return a / b; 
}

switch(opp){
   case 'add':
	result = add(a, b);
	break;		    
 case 'sub':
  	result = sub(a, b);
  	break;		    
 case 'mul':
  	result = mul(a, b);
  	break;		    
 case 'div':
 	if (b == 0){     
    	document.write("na 0 dil ne mozhna <br/>");
	  	result = "ne isnue";
	  }
	else{
  	result = div(a, b);
  }
  	break;		    
}
	document.write(result);