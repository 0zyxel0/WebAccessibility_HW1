//Global Variables

let formValid;

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

//Keydown Global Functions for spacebar
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

// This key function contains keypress for esc keys and tab keys
$(document).keyup(function(e){
//Escape key pressed. This function Closes all dropdown menu and closes all aria-expanded attributes to false
    if(e.keyCode === 27){
        if($('a.dropdown-item').is(":focus") === true){
            e.stopPropagation();
            e.preventDefault();
            if($("ul.dropdown-menu").hasClass('show')){
                $('a.dropdown-toggle').attr('aria-expanded','false');
                $("ul.dropdown-menu").removeClass('show');
                // $('e.target').focus();
            }
        }
        else {
            $(e.target).attr('aria-expanded','true');
            // $("ul.dropdown-menu").removeClass('show');
        }
    }


    else if(e.keyCode === 9 ){
        if($('a.nav-link').is(":focus") == true){
            $("ul.dropdown-menu").removeClass('show');
            $("li.dropdown").removeClass('tempBorder');
        }
        console.log('tab key pressed.');
    }
});

// This function is called by the anchor tags to change the aria expanded and open the submenu.
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

//This function is called by the login button to validate the form. if the form has errors it will trigger a focus to the object.
function validateFormsErrorLogin(){
    if($("#login-form input").hasClass('is-invalid')){
        $("#login-form input.is-invalid:first").focus()
    }else{
        return false;
    }
}


//This function is called by the registration button to validate the form. if the form has errors it will trigger a focus to the object.
function validateFormsErrorRegistration(){
    if($("#register-form input").hasClass('is-invalid')){
        $("#register-form input.is-invalid:first").focus()
    }else{
        return false;
    }

}











