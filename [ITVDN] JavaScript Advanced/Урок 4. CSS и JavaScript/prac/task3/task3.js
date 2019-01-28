window.onload = function(){
    function rotate() {
        var sq1 = document.getElementById("div1");
        var sq2 = document.getElementById("div2");
        var sq3 = document.getElementById("div3");
        sq1.style.left = Math.floor(Math.random()*1200) + "px";
        sq2.style.left = Math.floor(Math.random()*1200) + "px";
        sq3.style.left = Math.floor(Math.random()*1200) + "px";
        sq1.style.top = Math.floor(Math.random()*500) + "px";
        sq2.style.top = Math.floor(Math.random()*500) + "px";
        sq3.style.top = Math.floor(Math.random()*500) + "px";
    }
    setInterval(rotate,333);
}