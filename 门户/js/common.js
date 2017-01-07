// 首页js================================================================

// 教师空间和学生空间的切换
$(".teacherspace").click(function() {
    $(this).addClass("clicked").siblings().removeClass("clicked");
    $(".loginpart").eq(0).show();
    $(".loginpart").eq(1).hide();
});
$(".studentspace").click(function() {
    $(this).addClass("clicked").siblings().removeClass("clicked");
    $(".loginpart").eq(1).show();
    $(".loginpart").eq(0).hide();
});

// 右上角用户登录后下拉框选项
$('.user').click(function(e) {
    var _this = $(this);
    if ($('.dropbox').is(':hidden')) {
        $(".dropbox").show();
        _this.addClass("user2");
    } else {
        $('.dropbox').hide();
        _this.removeClass("user2");
    }
    $(document).one('click', function() {
        $('.dropbox').hide();
        _this.removeClass("user2");
    });
    e.stopPropagation();
});
$('.dropbox').on('click', function(e) {
    e.stopPropagation();
});

// 新闻中心，划过右侧新闻标题，左侧图片相应变化
$(".newscontent > div").mouseover(function() {
    var a = $(this).index();
    $(".newsimg img").eq(a).show().siblings().hide();
});

// 联合体1,2,3切换
$(".studiotop span").click(function() {
    var _this = $(this).index();
    $(this).addClass("choose").siblings().removeClass("choose");
    $(".studiomain .union").hide();
    $(".studiomain .union").eq(_this).show();

});

// 家校互动部分展开更多部分js
$(".seemore").click(function() {
    $(this).hide();
    $(this).siblings().height("auto");
});

// 新闻中心页面js===============================================================

// 左侧导航栏对应右侧
$(".ml-nav .link").click(function() {
    var index = $(".link").index(this);
    // console.log(index);
    $(".ml-nav .link").removeClass("active");
    $(this).addClass("active");
    $(".main-right > div").eq(index).show().siblings().hide();
});
$(".fold").click(function() {
    var container = $(".ml-nav .container");
    var _this = $(this);
    if (container.is(":visible")) {
        _this.removeClass("open");
        container.slideUp(400);
    } else {
        _this.addClass("open");
        container.slideDown(400);
    }
});

//活动推荐切换-全部部分-进行中-已经结束
$(".activitytop span").click(function() {
    var _$this = $(this).index();
    console.log(_$this);
    $(this).addClass("choose").siblings().removeClass("choose");
    $(".activitywrapper > div").hide().eq(_$this).show()
});

// 家校互动-我要提问部分
$(".quizbtn").click(function() {
    $(".quizbox").show();
    $(this).css("background", "#999");
});

$(".quizbox .cancel").click(function() {
    $(".quizbox").hide();
    $(".quizbtn").css("background", "#ff9d1c");
});

//  我要提问下拉框部分
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
        ul.css("overflow", "scroll");
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

// 成果展示正文页面js=====================================================
$(".expand").click(function() {
    $(this).siblings(".expanded,.expanded2").height("auto");
    $(this).hide().siblings(".withdraw").show();
});
$(".withdraw").click(function(){
    $(this).siblings(".expanded").height(90);
    $(this).siblings(".expanded2").height(160);
    $(this).hide().siblings(".expand").show();
});



//判断浏览器是否支持placeholder属性
supportPlaceholder = 'placeholder' in document.createElement('input'),
    placeholder = function(input) {
        var text = input.attr('placeholder'),
            defaultValue = input.defaultValue;
        if (!defaultValue) {
            input.val(text).addClass("phcolor");
        }
        input.focus(function() {
            if (input.val() == text) {
                $(this).val("");
            }
        });
        input.blur(function() {
            if (input.val() == "") {
                $(this).val(text).addClass("phcolor");
            }
        });
        //输入的字符不为灰色
        input.keydown(function() {
            $(this).removeClass("phcolor");
        });
    };
//当浏览器不支持placeholder属性时，调用placeholder函数
if (!supportPlaceholder) {
    $('input').each(function() {
        text = $(this).attr("placeholder");
        if ($(this).attr("type") == "text") {
            placeholder($(this));
        }
    });
}

// 联合体学校进入页js====================================================

// 行动实录-联合体风采部分翻页

$(".flip-right").click(function() {
    var _this = $(this);
    var span = _this.siblings("p").find("span");
    var a = parseInt(span.text());
    if (a < 3) {
        a += 1;
    } else {
        a = 3;
    }
    span.text(a);
    var page = _this.parents(".list").find(".listmain .page");
    page.eq(a - 1).show().siblings(".page").hide();
});
$(".flip-left").click(function() {
    var _this = $(this);
    var span = _this.siblings("p").find("span");
    var a = parseInt(span.text());
    if (a > 1) {
        a -= 1;
    } else {
        a = 1;
    }
    span.text(a);
    var page = _this.parents(".list").find(".listmain .page");
    page.eq(a - 1).show().siblings(".page").hide();
});
