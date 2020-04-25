
//Function to close the sub nav menu with ESC key press
$(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
        console.log('ESC Key Pressed.');
        if ($(".dropdown-menu").hasClass("show")) {
            $(".dropdown-menu").removeClass("show");
        }
    }
});


    $('.dropdown-toggle').focus( function () {
        $(this).siblings('.dropdown-menu').addClass('show');
    }).blur(function(){
        $(this).siblings('.dropdown-menu').removeClass('show');
    });


$('.dropdown-menu a').keydown(function(e){
    switch(e.which){
        case 36: // home
            e.preventDefault();
            $(this).closest('.dropdown-menu').find('a:first').focus();
            break;
        case 35: // end
            e.preventDefault();
            $(this).closest('.dropdown-menu').find('a:last').focus();
            break;
    }
});