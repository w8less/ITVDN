window.onload = function(){
    var up = get("up"),
        down = get("down"),
        right = get("right"),
        left = get("left"),
        sq = get("block"),
        x = 0,
        y = 0;

        down.onclick = function(){
            y = y + 100;
            sq.style.top = y + "px"; 
        }
        up.onclick = function(){
            y = y - 100;
            sq.style.top = y + "px"; 
        }
        left.onclick = function(){
            x = x - 100;
            sq.style.left = x + "px"; 
        }
        right.onclick = function(){
            x = x + 100;
            sq.style.left = x + "px"; 
        }
}
function get(id){
    return document.getElementById(id);
}