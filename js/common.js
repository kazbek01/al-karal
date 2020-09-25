$(document).ready(function () {
    $('.call-menu').click(function(){
        $('body').toggleClass('scroll-locked');
        $('.nav-xs').toggleClass('nav-showed');
        $('.overlay').toggleClass('overlay-showed');
    });
    $('.close-menu').click(function(){
        $('body').removeClass('scroll-locked');
        $('.nav-xs').removeClass('nav-showed');
        $('.overlay').removeClass('overlay-showed');
    });
});







