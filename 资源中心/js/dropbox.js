$(function() {
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
    // 资源上传页面-侧边栏部分js
    // 展开折叠
    $(".nav-tree .group").click(function() {
        var _this = $(this);
        var brother = $(this).siblings(".nav-child");
        var parent = $(this).parent();
        if (brother.is(":visible")) {
            brother.slideUp();
            parent.removeClass("opened");
            _this.removeClass("group2");
        } else {
            brother.slideDown();
            parent.addClass("opened");
            $(".nav-tree .group").removeClass("group2");
            _this.addClass("group2");
        }
    });
    // 点击之后效果
    $(".nav-tree .course").click(function() {
        $(".nav-tree .course").removeClass("selected");
        $(this).addClass("selected");
    });
    // 教材内容页面js
    $(".tab p").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });

    //  下拉框
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

    $(".diff .select").css({"width":$(".diff .down").width()+2,"background-position":$(".diff .down").width()-20});


});
