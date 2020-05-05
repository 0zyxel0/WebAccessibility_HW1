
function gotoParentElement(){
    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('li');
    currentDropDownMenu.focus();

}


$(document).keydown(function(e) {
if (e.keyCode == 27 ) { // escape key maps to keycode `27`
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
        gotoParentElement();
        return false;
    }catch (e) {
        return e;
    }
}
});

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
