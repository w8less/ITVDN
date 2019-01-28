/*  //Прямоугольник
        for (var i = 0; i < 8; i++) {
            document.write("<br/>");
            for (var j = 0; j < 8; j++) {
                document.write("&nbsp * &nbsp");
            }
        }
        document.write("<hr/>");
        document.write("<br/><br/>");
        //trik
for(i = 0 ; i < 8; i++){
	document.write("<br/>");
	for(j = 0; j < i; j++){
		document.write("&nbsp * &nbsp")
	}
}
        document.write("<hr/>");
        document.write("<br/><br/>");*/
        //rivnostor trik

 //Равносторонний треугольник
        var n = 7;
        var l = 0;

        for (var i = 0; i < n; i++) {


            for (var k = 0; k < (2 * n / 2 - i) ; k++) {
                document.write(" &nbsp ");
            }

            for (var j = 0; j < l; j++) {
                document.write("&nbsp * ");

            }
            l++;

            document.write("<br/>");

        }
        document.write("<hr/>");
        //romb
        var n = 8;
        var l = 0;

        for (var i = 0; i < n; i++) {


            for (var k = 0; k < (2 * n / 2 - i) ; k++) {
                document.write(" &nbsp ");
            }

            for (var j = 0; j < l; j++) {
                document.write("&nbsp * ");

            }
            l++;

            document.write("<br/>");

        }
        for (var i = n; i > 0; i--) {


            for (var k = 0; k < (2 * n / 2 - i) ; k++) {
                document.write(" &nbsp ");
            }

            for (var j = 0; j < l; j++) {
                document.write("&nbsp * ");

            }
            l--;

            document.write("<br/>");

        }
        document.write("<hr/>");