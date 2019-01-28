var ask = prompt("k-st mojlivih metodiv dostavky")
var n = +ask;
var fact = 1;
do{
	fact = fact*n;
	n--;

} while(n > 0);
document.write("fact = "+ fact + "<br/>" );
document.write("<hr/>")
