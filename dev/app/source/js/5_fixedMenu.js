function fixedMenu() {

    var nav = $('#header');
    var doHeader = $('#do-header-fixed');

    $(window).scroll(function(){
        if ($(this).scrollTop() >= ($(doHeader).offset().top + 42)){
            nav.addClass('fixed');
            $('#header-empty').css('display', 'block');
        } else {
            nav.removeClass('fixed');
            $('#header-empty').css('display', 'none');
        }
    });
}
