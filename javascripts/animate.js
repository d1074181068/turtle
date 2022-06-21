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

    $('.to_top a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
        $('.to_top p').css('display', 'none')
    });
    function showBtnCondition() {
        if ($(this).scrollTop() > 700) {
            $('.to_top').fadeIn();
        } else {
            $('.to_top').fadeOut();
        }
    }
    $(window).scroll(showBtnCondition);

    $('#header_offcanvas').on('show.bs.offcanvas', function () {
        $('.header').addClass('opacity-100');
    });

    $('#header_offcanvas').on('hidden.bs.offcanvas', function () {
        $('.header').removeClass('opacity-100');
    });
});
