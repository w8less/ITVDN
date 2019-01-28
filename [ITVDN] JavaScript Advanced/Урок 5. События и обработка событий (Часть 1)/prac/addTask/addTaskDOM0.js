window.onload = function(){
    var btnPlus = document.getElementById("btn+");
    var btnMinus = document.getElementById("btn-");
    var btnMul = document.getElementById("btn*");
    var btnDiv = document.getElementById("btn/");

    btnPlus.onclick = function(){
        var nmb1 = parseInt(document.getElementById("nmb1").value);
        var nmb2 = parseInt(document.getElementById("nmb2").value);
        alert(plus(nmb1,nmb2)); 
    }
    btnMinus.onclick = function(){
        var nmb1 = parseInt(document.getElementById("nmb1").value);
        var nmb2 = parseInt(document.getElementById("nmb2").value);
        alert(minus(nmb1,nmb2)); 
    }
    btnMul.onclick = function(){
        var nmb1 = parseInt(document.getElementById("nmb1").value);
        var nmb2 = parseInt(document.getElementById("nmb2").value);
        alert(mul(nmb1,nmb2)); 
    }
    btnDiv.onclick = function(){
        var nmb1 = parseInt(document.getElementById("nmb1").value);
        var nmb2 = parseInt(document.getElementById("nmb2").value);
        alert(div(nmb1,nmb2)); 
    }
};
function plus(a,b) {
    return a+b; 
};
function minus(a,b) {
    return a-b; 
};
function mul(a,b) {
    return a*b; 
};
function div(a,b) {
    return a/b; 
};