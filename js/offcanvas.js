$(document).ready(function () {
    "use strict";
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
        $('#submenuToggle').toggleClass('glyphicon-menu-right glyphicon-menu-left');
    });
});