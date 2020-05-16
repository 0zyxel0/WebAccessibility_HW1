//Function to Increase the Font Size of the Texts in the Page.
function fn_increaseFont(){
    var fontSize = $("html").css("fontSize");
    console.log(fontSize);
    fontSize  =  parseFloat(fontSize) + 1 + "px";
    console.log(fontSize);
    $("html").css("fontSize", fontSize );
}

//Function to Decrease the Font Size of the Texts in the Page.
function fn_decreaseFont(){
    var fontSize = $("html").css("fontSize");
    console.log(fontSize);
    fontSize  =  parseFloat(fontSize) - 1 + "px";
    console.log(fontSize);
    $("html").css("fontSize", fontSize );
}

//Keydown Global Functions
$(document).keydown(function(e) {
    if (e.keyCode == 32) {
        e.stopPropagation();
        e.preventDefault();
        try{
            var checkLink = $(e.target);
            if($(checkLink).is('a') == true){
                if($(checkLink).hasClass('nav-link dropdown-toggle')){
                    document.getElementById(e.target.id).click();
                }
                else {
                    location.href = checkLink.attr('href');
                }
            }else{
                document.getElementById(e.target.id).click();
            }
            console.log('Space Key Pressed');
        }catch (e) {
            return e;
        }
    }
});

$(document).keyup(function(e){
    if(e.keyCode == 27){
        if($('a.dropdown-item').is(":focus") == true){
            e.stopPropagation();
            e.preventDefault();
            if($("ul.dropdown-menu").hasClass('show')){
            }
        }
        else {
            $("ul.dropdown-menu").removeClass('show');
        }
    }


    else if(e.keyCode == 9 ){
        if($('a.nav-link').is(":focus") == true){
            $("ul.dropdown-menu").removeClass('show');
            $("li.dropdown").removeClass('tempBorder');
        }
        console.log('tab key pressed.');
    }
});

function toggle(id, id2) {
    if (document.getElementById(id).classList.contains('show') === false)
    {
        document.getElementById(id2).setAttribute('aria-expanded', 'true');
    }
    if (document.getElementById(id).classList.contains('show') === true)
    {
        document.getElementById(id2).setAttribute('aria-expanded', 'false');
    }
}
