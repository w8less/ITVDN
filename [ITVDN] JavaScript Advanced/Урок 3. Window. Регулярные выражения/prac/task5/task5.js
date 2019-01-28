var marq = document.createElement("marquee");
marq.innerHTML = prompt("vvedit text");
marq.setAttribute("behavior","alternate");
marq.setAttribute("direction","right");
marq.setAttribute("bgcolor","#ffcc00");

window.onload = function(){
var cont = document.getElementsByTagName("body")[0];
cont.appendChild(marq);
}