$(document).ready(function () {
    $(window).scroll(function () {
        const windowpos = $(window).scrollTop();
        const aboutus = $('#aboutus').offset().top;
        const aboutus_height = $('#aboutus').outerHeight();
        console.log(aboutus_height, aboutus);
    });
});
