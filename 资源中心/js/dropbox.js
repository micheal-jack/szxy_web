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
            // parent.addClass("opened").siblings().removeClass("opened");
            $(".nav-tree .group").removeClass("group2");
            _this.addClass("group2");
            // parent.siblings("li").find(".nav-child").slideUp();
        }
    });
    // 点击之后效果
    $(".nav-tree .course").click(function() {
        $(".nav-tree .course").removeClass("selected");
        $(this).addClass("selected");
    });
});
//  下拉框
$("body").mousedown(function(e) {
    if ($(e.target).is('.down')) {
        return;
    }
    $(".down").slideUp("fast");
});

function sel(s) {
    var obj = s;
    var ul = $(obj).parents(".selector").find(".down");
    if (ul.css("display") == "none") {
        ul.slideDown("fast");
    } else {
        ul.slideUp("fast");
    }
}

function cel(m) {
    var obj = m;
    var txt = $(obj).html();
    $(obj).parents(".selector").find(".select").val(txt);
    $(obj).parents(".selector").find(".select").css({ 'opacity': '1', 'color': '#14263f' });
    $(obj).parents(".selector").find(".down").css("display", "none");
    $(obj).parents(".selector").find("p").css("background", "none");
    $(obj).css("background", "#c8c8c8");
}
