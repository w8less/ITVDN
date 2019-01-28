function get(id){
    return document.getElementById(id);
};

var window1,
    window2,
    window3; 

function less1(){
    window1 = window.open("lesson1.html","Window Name","width=200,height=200,left=200,top=200");
    get("lesson1").setAttribute("href","javascript:close1()")
    get("lesson1").innerHTML = "JS Lesson 1 (open)"
}

function close1() {
    window1.close()
    get("lesson1").setAttribute("href","javascript:less1()")
    get("lesson1").innerHTML = "JS Lesson 1"
}    

function less2(){
    window2 = window.open("lesson2.html","Window Name","width=200,height=200,left=200,top=200");
    get("lesson2").setAttribute("href","javascript:close2()")
    get("lesson2").innerHTML = "JS Lesson 2 (open)"
}

function close2() {
    window2.close()
    get("lesson2").setAttribute("href","javascript:less2()")
    get("lesson2").innerHTML = "JS Lesson 2"
}   

function less3(){
    window3 = window.open("lesson3.html","Window Name","width=200,height=200,left=200,top=200");
    get("lesson3").setAttribute("href","javascript:close3()")
    get("lesson3").innerHTML = "JS Lesson 3 (open)"
}

function close3() {
    window3.close()
    get("lesson3").setAttribute("href","javascript:less3()")
    get("lesson3").innerHTML = "JS Lesson 3"
}   