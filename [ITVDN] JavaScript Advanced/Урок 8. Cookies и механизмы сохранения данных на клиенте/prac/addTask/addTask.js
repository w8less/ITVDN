window.onload =  function(){
    var now = new Date();
    document.cookie = "date=" + now;
    alert(now);
}