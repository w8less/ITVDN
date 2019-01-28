window.onload = function (){
    var number = Math.floor(Math.random()*100)+1;

    do {
        question = prompt("enter number in range (1,100)");
        if (+question < number){
            alert("your number is smaler");
        }
        else if(+question > number){
            alert("your number is biger");
        }
        else{
            alert("congratulations you WIN!");
        }
    } while (+question != number);
}