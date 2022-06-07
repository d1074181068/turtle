$(document).ready(function () {
    $(window).scroll(function () {
        const windowpos = $(window).scrollTop();

        $('.scroll_animate').each(function () {
            const this_offset = $(this).offset().top;
            const windowHeight = $(window).height();
            if ((windowpos + (windowHeight / 2 + 200)) >= this_offset) {
                $(this).addClass('active');
            }
        });

    });


    function showBtnCondition() {
        if ($(this).scrollTop() > 700) {
            $('.to_top').fadeIn();
        } else {
            $('.to_top').fadeOut();
        }
    }
    $(window).scroll(showBtnCondition);
});
