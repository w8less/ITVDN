
function createP(){
    var par = document.createElement("p");
    par.innerHTML = "paragraph";
    document.body.appendChild(par);
    var x = document.getElementsByTagName("p");
    if (x.length == 10) {
        for (var i = 0; i < 10; i++){
            document.body.removeChild(x[0]);
        };
    };

};
