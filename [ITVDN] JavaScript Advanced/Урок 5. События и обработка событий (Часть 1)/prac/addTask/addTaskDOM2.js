addEventListener("load",init,false);
function init(){
    var btnPlus = get("btn+");
    var btnMinus = get("btn-");
    var btnMul = get("btn*");
    var btnDiv = get("btn/");

    btnPlus.addEventListener("click",function(){
        var nmb1 = parseInt(get("nmb1").value);
        var nmb2 = parseInt(get("nmb2").value);
        alert(plus(nmb1,nmb2));
    },false)
    btnMinus.addEventListener("click",function(){
        var nmb1 = parseInt(get("nmb1").value);
        var nmb2 = parseInt(get("nmb2").value);
        alert(minus(nmb1,nmb2));
    },false)
    btnMul.addEventListener("click",function(){
        var nmb1 = parseInt(get("nmb1").value);
        var nmb2 = parseInt(get("nmb2").value);
        alert(mul(nmb1,nmb2));
    },false)
    btnDiv.addEventListener("click",function(){
        var nmb1 = parseInt(get("nmb1").value);
        var nmb2 = parseInt(get("nmb2").value);
        alert(div(nmb1,nmb2));
    },false)
}
function get(id){
    return document.getElementById(id);
}
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