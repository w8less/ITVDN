
function selectP(){
    var paragraphs = document.getElementsByTagName("p");
    for(var i = 0; i<paragraphs.length; i++){
        paragraphs[i].style.color = "red";
    };
};

function selectA (){
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].style.color = "green";
    };
};

function selectDiv(){
    var div = document.getElementById("test_div");
    div.style.color = "aqua";
};
