document.write("<hr>");
var DOCUM = {
	tit : "HELLO!",
	bod : "mister",
	foot : "it`s a foot",
	dat : 25,

	show :function(){
		document.write(DOCUM.tit + "<br>");
		document.write(DOCUM.bod + "<br>");
		document.write(DOCUM.foot + "<br>");
		document.write(DOCUM.dat + "<br>");
		document.write("<hr>");
	},

	app :{
		tit : function(tit) {
			DOCUM.tit = tit;
	},
		bod : function(bod) {
			DOCUM.bod = bod;
	},
		foot : function(foot) {
			DOCUM.foot = foot;
	},
		dat : function(dat) {
			DOCUM.dat = dat;
	}		
	}

}
DOCUM.show();
DOCUM.app.tit(prompt("vvedit title"));
DOCUM.app.bod(prompt("vvedit body"));
DOCUM.app.foot(prompt("vvedit footer"));
DOCUM.app.dat(prompt("vvedit date"));
DOCUM.show();