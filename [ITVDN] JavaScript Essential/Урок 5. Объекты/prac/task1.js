var doc = {
	title: "object",
	body: "content",
	footer: "copyright",
	data: "october",

	app: {
		title: "object app",
		body: "content app",
		footer: "copyright app",
		data: "october app",
	},

 	show: function(){
 		for (arguments in doc){
 			document.write(arguments + "=" + doc[arguments] + "</br>")
 		}
 	}
}
doc.show();