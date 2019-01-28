window.onload = function (){
    var str = prompt("enter action for ex: '50 -/+ 3' "),
        pos = str.indexOf(" "),  
        op = str.charAt(pos+1),
        n1 = parseInt(str.substring(0,pos)),
        n2 = parseInt(str.substring(pos+2)),
        result;
    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;    
            break;

        default:
            document.write("error");
            break;
    }
    document.write(result);
}