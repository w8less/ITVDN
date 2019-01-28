document.write("<hr/>");
var N = prompt("введіть кількість елементів масиву");
var a = Array(+N);
var min = -5;
var max = 5;
document.write(a);
for(i = 0; i < N; i++ ){
	var k = Math.floor(Math.random() * (max - min + 1) + min);
	a[i] = k * (i+1) ;
}
document.write("<hr/>");
document.write(a.join("  |  "));

	//max min 
document.write("<hr/>");
var ma = a[0];
var mi = a[0];
for(i = 0; i < N; i++){
	if (mi > a[i]){
		mi = a[i];
	}
	if (ma < a[i]){
		ma = a[i];
	}
}
document.write("<p> min = " + mi);
document.write("<p> max = " + ma);
	//sum
document.write("<hr/>");
var sum = 0;
for(i = 0; i < N; i++){
	sum = sum + a[i];
}
document.write("<p> sum = "+ sum);

	//arifm
document.write("<hr/>");
var arifm = sum/a.length;
document.write("<p> arifm = " + arifm);

	//odd
document.write("<hr/>");
var odd = [];
for(i = 0; i < N; i++){
	if (a[i] % 2 == 1 || a[i] % 2 == -1) {
		odd.unshift(a[i]);
		}
	}
document.write("<p> odd = " + odd.reverse());
document.write("<hr/>");
