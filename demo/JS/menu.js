$('document').ready(function () {
    $('.navbar-toggle').on('click', function () {
        $('.collapse, #mainContainer').toggleClass('in');
    });

    
});

$(window).resize(function () {
    if ($(window).width() > 768) {
        $('.collapse, #mainContainer').removeClass('in');
    };
});