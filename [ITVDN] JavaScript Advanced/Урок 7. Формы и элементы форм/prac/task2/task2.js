window.addEventListener("load",init,false);

function init(){
    var inp = document.getElementById("text")
    if ("watermark" in inp.attributes){
        run();
    }
}
// old
function run() {
    var inp = document.getElementById("text")
    var watermark = inp.attributes["watermark"].nodeValue;
    initInp();

    inp.onfocus = function () {
        if (inp.value == watermark)
        {
            inp.value = "";
            inp.style.color = "black";
            inp.style.fontStyle = "normal";
        }
    }

    inp.onblur = function () {
        if (inp.value == "")
        {
            initInp();
        }
    }

    function initInp()
    {
        inp.value = watermark;
        inp.style.color = "gray";
        inp.style.fontStyle = "italic";
    }
}