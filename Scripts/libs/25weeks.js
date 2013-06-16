$(document).ready(function(){
    $('.bxslider').bxSlider(
        {
            auto:false,
            useCSS:false,
            tickerHover: true,
            onSliderLoad: function(){
                $('.bxslider').animate({opacity:1});
            }
        });


    $('.small-video').fancybox({
        type: 'iframe',
        openMethod : 'dropIn',
        padding: 0
    });

    (function ($, F) {
        F.transitions.dropIn = function() {
            var endPos = F._getPosition(true);
            endPos.opacity = 0;
            endPos.top = (parseInt(endPos.top, 10) - 400);

            F.wrap.css(endPos).show().animate({
                top: endPos.top + 400,
                opacity: 1
            }, {
                easing: 'easeOutQuart',
                duration: 800,
                complete: F._afterZoomIn
            });
        };

        F.transitions.dropOut = function() {
            F.wrap.removeClass('fancybox-opened').animate({
                top: '-=200'
            }, {
                duration: F.current.closeSpeed,
                complete: F._afterZoomOut
            });
        };

    }(jQuery, jQuery.fancybox));
});