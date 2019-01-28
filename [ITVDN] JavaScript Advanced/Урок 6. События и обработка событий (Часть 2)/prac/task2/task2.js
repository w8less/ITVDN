window.onload = function (){
    var p = document.getElementsByTagName("p");
    document.onkeypress = function(e){
        if (String.fromCharCode(e.charCode) == "g"){
            for (var i = 0; i < p.length; i++) {
                p[i].style.color = "green";                
            }
        }
        else if(String.fromCharCode(e.charCode) == "b"){
            for (var i = 0; i < p.length; i++) {
                p[i].style.color = "blue";                
            }
        }
        else if(String.fromCharCode(e.charCode) == "r"){
            for (var i = 0; i < p.length; i++) {
                p[i].style.color = "red";                
            }
        }
        else {
            for (var i = 0; i < p.length; i++) {
                p[i].style.color = "black";                
            }
        }
    }
}