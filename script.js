$(document).ready(function(){
    // Smooth scrolling for anchor links
    $('a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Adjust font size based on scroll position
    $(window).on('scroll', function() {
        var scrollPos = $(window).scrollTop();
        $('.parallax').each(function() {
            var offset = $(this).offset().top - scrollPos;
            $(this).find('.header').css('font-size', 3 + offset/200 + 'em');
            $(this).find('.paragraph').css('font-size', 1.5 + offset/400 + 'em');
        });
    });
});
