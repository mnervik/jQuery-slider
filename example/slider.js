/* Define Variables */
const slider = $('.slider-item');
const view = $('.slider-view');

/* First Image */
view.attr('src', slider.first().attr('src'));   // set image src
slider.first().addClass('active');              // set .active class

/* Last */
slider.last().addClass('last');                 // add .last class

/* Thumbnail Click */
slider.on('click', function (e) {
    slider.removeClass('active');               // remove all .active classes

    let $this = $(this);                        // remember $(this)
    view.fadeOut(400, function () {             // fade out
        view.attr('src', $($this).attr('src')); // set new image
    }).fadeIn(100);                             // fade back in

    $(this).addClass('active');                 // set .active class

    if(e.originalEvent !== undefined){          // check who clicked on the image (user or code)
        clearInterval(automation);              // stop automation
    }
});

/* Automation */
let automation = setInterval(function () {
    if ($('.slider-item.active.last').length) { // last image
        slider.first().trigger('click');
    } else {                                    // not last image
        $('.slider-item.active').next('.slider-item').click();
    }
}, 5000);                                       // how often should the automation run