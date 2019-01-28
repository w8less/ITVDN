window.onload = function(){
    document.onkeypress = function(e){
        if(e.ctrlKey && e.charCode == 115){
            alert("save");
        };
        if(e.ctrlKey && String.fromCharCode(e.charCode) == "a"){
            alert("select All");
        };
    };
    document.onkeydown = function (e){
        if(e.ctrlKey && e.shiftKey && e.keyCode == 83 ){
            alert("save all");
        };
    }
}