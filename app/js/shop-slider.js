$(document).ready(function() {    
    const shopSlider = $('#shopSlider');
    
    shopSlider.owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        margin: 2,
        smartSpeed: 500,
        responsive: {
            0 : {
                items: 1,
            },
            1254 : {
                items: 3,
            }
        }

    });
    $('#shopSliderLeft').click(function() {
        shopSlider.trigger('prev.owl.carousel');
    })
    $('#shopSliderRight').click(function() {
        shopSlider.trigger('next.owl.carousel');
    })
});