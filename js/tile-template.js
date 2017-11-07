$(function () {

    function scrollWindowTop() {
        $("html, body").animate({scrollTop: 0}, "fast");
    }

    $(".tile").on("mouseenter", function () {
        $(this).find(".inner").addClass("scale-in-center");
        $(this).find("h1").addClass("text-shadow-pop-bottom").css("z-index", "99999");
    }).on("mouseleave", function () {
        $(this).find(".inner").removeClass("scale-in-center");
        $(this).find("h1").removeClass("text-shadow-pop-bottom");
    }).on("click", function () {
        var targetId = $(this).data("target-id");
        var anim = $(this).data("open-animation");
        $(targetId).removeClass("hidden").addClass(anim).data("open-animation", anim);
        $(".container-tiles").removeClass("text-blur-out-reverse").addClass("text-blur-out");
        setTimeout(function (e) {
            $(".container-tiles").addClass("hidden");
        }, 1000);
        scrollWindowTop();
    });

    $(".row-about a").on("click", function () {
        var $footer = $("footer");
        $footer.removeClass("hidden slide-in-top slide-in-bottom");
        if (screen.width <= 992) {
            $footer.addClass("slide-in-top").removeClass("hidden");
        } else {
            $footer.addClass("slide-in-bottom").removeClass("hidden");
        }
    });

    $("footer .closer").on("click", function () {
        $("footer").addClass("hidden");
    });

    $(".header > a").on("click", function () {
        var anim = $(this).closest("section").data("open-animation");
        $(this).closest("section").addClass("hidden").removeClass("slide " + anim);
        $(".container-tiles").removeClass("hidden text-blur-out").addClass("text-blur-out-reverse");
    });

});