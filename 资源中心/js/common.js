// 首页js================================================================

// 右上角用户登录后下拉框选项
$(function() {
    $(".user").click(function(e) {
        var _this = $(this);
        if ($(".dropbox").is(":hidden")) {
            $(".dropbox").show();
            _this.addClass("user2");
        } else {
            $(".dropbox").hide();
            _this.removeClass("user2");
        }
        $(document).one("click", function() {
            $(".dropbox").hide();
            _this.removeClass("user2");
        });
        e.stopPropagation();
    });
    $(".dropbox").on("click", function(e) {
        e.stopPropagation();
    });
});
