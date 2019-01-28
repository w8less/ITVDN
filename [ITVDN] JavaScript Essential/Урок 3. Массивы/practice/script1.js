	var N = prompt("vvedit k-st elem masivy");
	var arr = Array(+N);

	for (var i = 0; i < arr.length; i++){
		arr[i] = Math.floor(Math.random() * 1001) - 500;
	};
	document.write(arr.join(" | "));
	document.write("<hr>");

	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum += arr[i]; 
	};
	document.write("summa el masivy =  " + sum);
	document.write("<hr>");

	var max = arr[0];
	for (var i = 0; i < arr.length; i++){
		if(max < arr[i]){
			max = arr[i];
		};
	};
	document.write("max el =  " + max);
	document.write("<hr>");

	var min = arr[0];
	for (var i = 0; i < arr.length; i++){
		if(min > arr[i]){
			min = arr[i];
		};
	};
	document.write("min el =  " + min);
	document.write("<hr>");

	var midle = sum / arr.length;
	document.write("ser znach =  " + midle);
	document.write("<hr>");

	var newArr = Array();
	for (var i = 0; i < arr.length; i++){
		if(arr[i]%2 != 0){
			newArr.push(arr[i]);
		}
	};
	document.write("neparni znach" + newArr.join(" | "));
	document.write("<hr>");


