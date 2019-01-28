window.onload = function () {
    function getUrl(){
        var args = {};
        var str = window.location.search.substring(1);
        var x = str.split("&");

        for ( i = 0; i < x.length; i++) {
            var pos = x[i].indexOf("=");
            var argname = x[i].substring(0,pos);
            var value = x[i].substring(pos+1);
            args[argname] = value;
        }
        return args;
        
    }
    document.getElementById("button").onclick = function(){
        var result = getUrl();
        (function(){
            var sum = 0;
            for( element in result) {
                sum += parseInt(result[element]);
            }
            var p = document.createElement("p");
            p.innerHTML = sum;
            document.body.appendChild(p)
        })();
    }
}