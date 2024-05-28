$(document).ready(function () {
    var headerHeight = $("header").outerHeight();
    var scrollTop = $(window).scrollTop(); // Get the initial vertical scrollbar position

    if (scrollTop > headerHeight) {
        $(".navbar").addClass("glass");
        $("header").addClass("sticky");
    }

    $(window).scroll(function () {
        scrollTop = $(this).scrollTop(); // Update the vertical scrollbar position on scroll

        if (scrollTop > headerHeight) {
            $(".navbar").addClass("glass");
            $("header").addClass("sticky");
        } else {
            $(".navbar").removeClass("glass");
            $("header").removeClass("sticky");
        }
    });

    $(".btn-toggle").click(function () {
        var icon = $(this).find('.fa-solid');
        icon.toggleClass('fa-minus fa-plus');
    });
});