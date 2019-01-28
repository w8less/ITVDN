window.onload = function(){
    var divs = document.getElementsByTagName("div");
    var btn = document.getElementById("button");
    var count = 0;
    btn.onclick = function(){
        for (var i = 0; i < divs.length; i++){
            divs[i].style.backgroundColor = "darkgreen";
        };
        divs[count++ % divs.length].style.backgroundColor = "red";
    };
}