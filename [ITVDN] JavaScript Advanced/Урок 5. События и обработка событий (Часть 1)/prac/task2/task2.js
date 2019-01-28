if(window.addEventListener){
    window.addEventListener("load",init,false);
}
else if (window.attachEvent){
    window.attachEvent("load",init);
};
function init() {
    var btn = get("click");
    if(btn.addEventListener){
        btn.addEventListener("click",function(){
            alert("hello");
        },false);
    }
    else if(btn.attachEvent){
        btn.attachEvent("click",function(){
            alert("hello");
        });
    };
};
function get(id) {
    return document.getElementById(id);
};