$(".linksbox").click(function(e) {
    var _this = $(this);
    if ($(".links").is(":hidden")) {
        $(".links").show();
        _this.addClass("linksbox2");
    } else {
        $(".links").hide();
        _this.removeClass("linksbox2");
    }
    $(document).one("click", function() {
        $(".links").hide();
        _this.removeClass("linksbox2");
    });
    e.stopPropagation();
});
$(".links").on("click", function(e) {
    e.stopPropagation();
});