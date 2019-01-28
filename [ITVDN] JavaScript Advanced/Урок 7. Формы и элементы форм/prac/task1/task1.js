// ?size=medium&components=meat&components=tomato&phoneNuber=322-22-33&address=22фвф
window.addEventListener("load",init,false);
function init(){
    pizza.onchange = function() {
        var summ = 0;
        for (var i = 0; i < pizza.elements.length; ++i) {
            var e = pizza.elements[i];
        if (e.type == "radio" && e.checked) {
            if (e.value == "small") summ += 10;
            else if(e.value == "medium") summ += 12;
            else if(e.value == "large") summ += 15;
        }
        if(e.type == "checkbox" && e.checked){
            if (e.value == "cheese") summ += 2;
            else if(e.value == "meat") summ += 2;
            else if(e.value == "tomato") summ += 2;
        }
        document.getElementById("price").innerHTML = summ + " $";
        };
        pizza.onsubmit = function(){
            alert(summ)
        }
    };

}