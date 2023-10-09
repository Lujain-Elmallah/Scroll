$(document).ready(function(){
    // Smooth scrolling for anchor links
    $('a').on('click', function(event) {
        // Check if the anchor has a valid hash value
        if (this.hash !== '') {
            event.preventDefault(); // Prevent the default behavior of anchor links
            const hash = this.hash; // Get the hash value of the clicked anchor link
            // Smoothly scroll to the target element associated with the hash value
            $('html, body').animate({
                scrollTop: $(hash).offset().top // Scroll to the top position of the target element
            }, 800, function(){
                window.location.hash = hash; // Set the hash value in the URL after scrolling
            });
        }
    });

    // Adjust font size based on scroll position
    $(window).on('scroll', function() {
        var scrollPos = $(window).scrollTop(); // Get the current scroll position
        // Iterate through each parallax section with class '.parallax'
        $('.parallax').each(function() {
            var offset = $(this).offset().top - scrollPos; // Calculate the offset from the top
            // Update font size of header elements based on scroll position
            $(this).find('.header').css('font-size', 3 + offset/200 + 'em');
            // Update font size of paragraph elements based on scroll position
            $(this).find('.paragraph').css('font-size', 1.5 + offset/400 + 'em');
        });
    });
});
