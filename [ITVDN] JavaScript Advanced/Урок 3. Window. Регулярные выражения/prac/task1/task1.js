window.onload = function(){
    var second = 0;
    var minut = 0;
    var hour = 0;
    var timer;
    var startB = get("startButton"); 
    var stopB = get("stopButton");
    var resetB = get("resetButton");
    startB.onclick = function(){
        timer = setInterval(sec,1000);
    }
    stopB.onclick = function(){
        clearInterval(timer);
    }
    resetB.onclick = function(){
        clearInterval(timer);
        h.innerHTML = "00";
        m.innerHTML = "00";
        s.innerHTML = "00";
    }
    var h = get("hours");
    var m = get("minutes");
    var s = get("seconds");

    function sec(){
        second++;
        if (second<10){
            s.innerHTML = "0" + second; 
        }
        else{
            s.innerHTML = second
        }
        if(second == 60){
            second = 0;
            minut++;
            if (minut<10){
                m.innerHTML = "0" + minut; 
            }
            else{
                m.innerHTML = minut
            }  
        }
        if(minut == 60){
            minut = 0;
            hour++;
            if (hour<10){
                h.innerHTML = "0" + hour; 
            }
            else{
                h.innerHTML = hour
            }  
        }
    }
}
function get(id){
    return document.getElementById(id);
}