
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
$(document).keydown(function(e) {
    if (e.keyCode == 32) {
        event.stopPropagation();
        event.preventDefault();

        try{
            var currentDropDownButton = event.target;
            var currentDropDownMenu =
                currentDropDownButton.parentNode.querySelector('.dropdown-menu');
            var isOpen = currentDropDownMenu.classList.contains('show');
            var dropDownMenus =
                document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
            for (var j = 0; j < dropDownMenus.length; j++) {
                dropDownMenus[j].classList.remove('show');
            }

            if (!isOpen) {
                currentDropDownMenu.classList.add('show');
            }
            console.log('Space Key Pressed');
            return false;
        }catch (e) {
            return e;
        }
    }
});

$(document).keyup(function(e){
    if(e.keyCode == 27){
        if($('a.dropdown-item').is(":focus") == true){
            event.stopPropagation();
            event.preventDefault();
            if($("ul.dropdown-menu").hasClass('show')){
                $("ul.dropdown-menu").removeClass('show');
                $("ul.dropdown-menu").closest('li.dropdown').filter(function(index){return index === 0;}).focus();

            }
        }
    }
});

$(document).keyup(function(e){
    if(e.keyCode == 9 ){
        if($('a.nav-link').is(":focus") == true){
            $("ul.dropdown-menu").removeClass('show');
        }
        console.log('tab key pressed.');
    }
});
