
function customScroll() {
    $(document)
        .on('click', 'a[href^="#"]', function(e){
            e.preventDefault();

            var target = $(this).attr('href');
            var parent = $(this).parent().get(0).tagName;

            if (parent == 'LI'){
                $('#toggle-menu').prop('checked', false);
                $('html, body').scrollTop($(target).offset().top);
            } else {

                var _pos = $(target).offset().top;
                var position = ((target == '#start') ? _pos - 100 : _pos - 50);

                $('html, body').animate({ scrollTop: position}, 'slow', 'swing', function() {});
            }
    });
}
