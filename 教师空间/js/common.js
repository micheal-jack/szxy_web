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
    //  下拉框部分js
    $("body").mousedown(function(e) {
        if ($(e.target).is('.down')) {
            return;
        }
        $(".down").slideUp("fast");
    });

    $(".selector .select").click(function() {
        var obj = $(this);
        var ul = obj.parents(".selector").find(".down");
        if (ul.is(":visible")) {
            ul.slideUp();
        } else {
            ul.slideDown();
        }
    });
    $(".down p").mousedown(function() {
        var obj = $(this);
        var txt = obj.html();
        obj.parent().siblings(".select").val(txt);
        obj.parent().siblings(".select").css("color", "#14263f");
        obj.parent().hide();
        obj.css("background", "#c8c8c8").siblings().css("background", "none");
    });
    // 开始备课-course-information.html左侧侧边栏切换js
    $(".sidebar a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    // 我的教学-my-teaching.html 左侧侧边栏切换js
    $(".mldiv a").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    });
});
