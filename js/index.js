
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
                        $("ul.dropdown-menu").parents('.nav-item').find('.dropdown').addClass('asdf');

                    }
            }
        }
    });

    $(document).keyup(function(e){
        if(e.keyCode == 9 ){
            console.log('tag');
        }
    });


