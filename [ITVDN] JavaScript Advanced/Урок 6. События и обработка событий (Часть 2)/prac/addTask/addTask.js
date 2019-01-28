window.onload = function(){
    var sq = document.getElementById("block");
    var x = getStyle(sq,"left");
    var y = getStyle(sq,"top");
    x = parseInt(x.substring(0,x.length-2));
    y = parseInt(y.substring(0,y.length-2));
    document.onkeydown = function(e){
        console.log(e.keyCode);
        switch (e.keyCode) {
            case 39:
                x = x + 10;
                sq.style.left = x + "px";
                break;
            case 37:
                x = x - 10;
                sq.style.left = x + "px";
                break;
            case 38:
                y = y - 10;
                sq.style.top = y + "px";
                break;
            case 40:
                y = y + 10;
                sq.style.top = y + "px";
                break;

        }
    }
};
function getStyle(element, styleName) {
    if (element.currentStyle) { // получение доступа к Computed стилям для IE
        return element.currentStyle[styleName];
    }
    else if (window.getComputedStyle) { 
        return window.getComputedStyle(element, null)[styleName];
    }
};