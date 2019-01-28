window.onload = function(){
    btn = document.getElementById("button");
    btn.style.position = "absolute";
    btn.onmouseover = function(){
        btn.style.left = Math.floor(Math.random()*1250) + "px";
        btn.style.top = Math.floor(Math.random()*550) + "px";
    }
}