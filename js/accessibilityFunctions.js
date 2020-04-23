
function fn_increaseFont(){
    var fontSize = $("html").css("fontSize");
    console.log(fontSize);
    fontSize  =  parseFloat(fontSize) + 1 + "px";
    console.log(fontSize);
    $("html").css("fontSize", fontSize );
}


function fn_decreaseFont(){
    var fontSize = $("html").css("fontSize");
    console.log(fontSize);
    fontSize  =  parseFloat(fontSize) - 1 + "px";
    console.log(fontSize);
    $("html").css("fontSize", fontSize );
}
