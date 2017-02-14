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
    $(".sidebar a").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".mainright > div").eq(index).show().siblings().hide();
    });
    // 我的教学-my-teaching.html 左侧侧边栏切换js
    $(".mldiv a").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        var index = $(this).index();
        $(".mainright > div").eq(index).show().siblings().hide();
    });


    // 我的教学页面--教学准备部分js
    $(".teaching-prepare .tab span").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".course-tab > div").eq(index).show().siblings().hide();
    });

});
// 查看课程页面
$(function() {
    // tab切换部分js
    $(".ld-tab a").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".tab-container > div").eq(index).show().siblings().hide();
    });

    $(".rate-ul .rate-list").each(function() {
        var line = $(this).find(".progress-inner");
        var percent = $(this).find(".rlr-progress").text().replace(/[^0-9]/ig, "");
        line.css("width", percent + "%");
    });

});
