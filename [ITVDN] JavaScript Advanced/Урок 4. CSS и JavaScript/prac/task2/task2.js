window.onload = function(){
    var btn = document.getElementById("btn");
    btn.onclick = function(){
        var log = document.getElementById("log");
        var pass = document.getElementById("pass");
        if(log.value == "admin" && pass.value == "12345"){
            document.getElementById("error").style.color = "green";
            document.getElementById("error").innerHTML = "welcome!";
        }
        else if(log.value == "" && pass.value == ""){
            document.getElementById("error").innerHTML = "enter login & password! ";
            pass.style.backgroundColor = "brown";
            log.style.backgroundColor = "brown";
        }
        else if (log.value == "" ){
            document.getElementById("error").innerHTML = "enter login ! ";
            log.style.backgroundColor = "brown";
            pass.style.backgroundColor = "white";
            
        }
        else if(pass.value == ""){
            document.getElementById("error").innerHTML = "enter password ! ";
            log.style.backgroundColor = "white";
            pass.style.backgroundColor = "brown";
        }
        else{
            document.getElementById("error").innerHTML = "";
            log.style.backgroundColor = "white";
            pass.style.backgroundColor = "white";
        }
    }
}