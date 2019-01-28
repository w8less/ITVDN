function add(a,b){
	alert(a + b);
};
function sub(a,b){
	alert(a - b);
};
function mul(a,b){
	alert(a * b);
};
function div(a,b){
	if(b == 0){
		alert("eror na 0 dil ne mozhna");
	}
	else{alert(a / b);}
	
};

var op1 = prompt("vvedit 1-e chislo");
var operation = prompt("vvedit diyu ( + - * /)");
var op2 = prompt("vvedit 2-e chislo");
op1 = parseInt(op1);
op2 = parseInt(op2);
switch(operation){
	case "+":
		add(op1,op2);
		break;
	case "-":
		sub(op1,op2);
		break;
	case "*":
		mul(op1,op2);
		break;
	case "/":
		div(op1,op2);
		break;
	default:
		alert("tokoi operatsii nemae v spusku");
};
