

// $('.navbar').get(0).focus();



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
                 var currentDropDownButton = e.target;
                 var currentDropDownMenu = currentDropDownButton.parentNode.querySelector('.dropdown-menu');




                 if ($(e.target).attr( 'aria-expanded') === 'false') {
                     $(e.target).attr('aria-expanded', 'true');
                     currentDropDownMenu.classList.add('show');
                 } else if($(e.target).attr( 'aria-expanded') === 'true') {
                     $(e.target).attr( 'aria-expanded', 'false');
                     currentDropDownMenu.classList.remove('show');
                 }


                 // if($('#nav-bar-content .dropdown-toggle').is(":focus") == true)
                 // {
                 //     var currentDropDownButton = e.target;
                 //     var currentDropDownMenu = currentDropDownButton.parentNode.querySelector('.dropdown-menu');
                 //     var isOpen = currentDropDownMenu.classList.contains('show');
                 //     var dropDownMenus = document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
                 //     for (var j = 0; j < dropDownMenus.length; j++) {
                 //         dropDownMenus[j].classList.remove('show');
                 //     }
                 //     if (!isOpen) {
                 //         currentDropDownMenu.classList.add('show');
                 //     }
                 //     $(e.target).closest('a.nav-link').attr('aria-expanded', function (i, attr) {
                 //         return attr == 'true' ? 'false' : 'true'
                 //     });
                 //     return false;
                 // }
                 else {
                     location.href = checkLink.attr('href');
                 }
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
                $("ul.dropdown-menu").removeClass('show');
                $(e.target).closest('li.nav-item').addClass('tempBorder');
            }
            $(e.target).closest('a.nav-link').attr("aria-expanded","false");
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



function custom_space_click(){
    var hrefLink = $(this).attr('href');
    console.log(hrefLink);

}
