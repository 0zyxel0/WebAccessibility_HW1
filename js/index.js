
//Function to close the sub nav menu with ESC key press
$(document).keydown(function(e) {
    if (e.keyCode == 27 ) { // escape key maps to keycode `27`
        console.log('ESC Key Pressed.');
        if ($(".dropdown-menu").hasClass("show")) {
            $(".dropdown-menu").removeClass("show");
        }
    }
});
$(document).keydown(function(e) {
    if (e.keyCode == 32) {
        event.stopPropagation();
        event.preventDefault();

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
    }
});
