$(window).on('scroll', function() {
    var windowTop = $(this).scrollTop();
    $('.js-anime').each(function() {
        if(windowTop > $(this).offset().top - 600) {
            $(this).addClass('js-animeOn');
        } else {
            $(this).removeClass('js-animeOn');
        }
    });
});