window.addEventListener("load",init,false);

function init(){
    form1.fName.onchange = textOnchange;
    form1.lName.onchange = textOnchange;
    form1.login.onchange = textOnchange;
    form1.passwordValid.onchange = passOnchange;
    form1.onsubmit = onsubmitHandler;
}
// метод проверки значения в элементе по регулярному выражению.
function validate(elem, pattern) {
    var res = elem.value.search(pattern);
    if (res == -1) elem.className = "invalid"; // установка CSS класса 
    else elem.className = "valid";
}

function textOnchange(){
    var pattern = /\S/;
    validate(this, pattern);
    if(this.className == "invalid"){
        var err = document.getElementsByTagName("span");
        err[this.name].innerHTML = "* Это обязательое поле";
    };
}
function passOnchange(){
    var err = document.getElementsByTagName("span");
    if(this.value != form1.password.value) err[this.name].innerHTML = "* повторный ввод пароля не совпадает с предыдущим";
    else if (this.value == "")  this.className == "invalid";
    else err[this.name].innerHTML = "";
}
function onsubmitHandler() {

    var invalid = false;

    for (var i = 0; i < form1.elements.length; ++i) {
        var e = form1.elements[i];
        // проверка типа элемента и наличия обработчика события onchange.
        if (e.type == "text" && e.onchange) {
            e.onchange(); // запуск события onchanhe
            if (e.className == "invalid") invalid = true;
        }
        if (e.type == "password" && e.onchange) {
            e.onchange(); // запуск события onchanhe
            if (e.className == "invalid") invalid = true;
        }
    }
    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        return false; // отмена отправки формы.
    }
}
