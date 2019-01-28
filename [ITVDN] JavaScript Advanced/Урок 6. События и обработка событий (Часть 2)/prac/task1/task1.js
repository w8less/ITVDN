window.onload = function (){
    var btn = document.getElementById("save");
    var text = document.getElementById("text");
    var r = "";
    var err = text.value;
    btn.onclick = function(){
        r = text.value;
    }
    text.onkeyup = function(){
        err = text.value;
    }
 
    window.onbeforeunload = function(){
        if(r != err){
            return "are you sure?";
        };
    }
}
