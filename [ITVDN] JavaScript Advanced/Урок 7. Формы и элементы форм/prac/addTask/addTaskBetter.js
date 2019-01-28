window.addEventListener("load",init,false);
function init(){
    form1.password.onchange = pass;
    form1.passwordValid.onchange = pass;
}
function pass(){
    if (form1.password.value != form1.passwordValid.value){
        form1.password.className = "invalid";
        form1.passwordValid.className = "invalid";
    }
    else{
        form1.password.className = "valid";
        form1.passwordValid.className = "valid";
    }
}