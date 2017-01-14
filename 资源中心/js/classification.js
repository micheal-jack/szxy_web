$(function() {
    $(document).on('hover', ".shaixuan-tj span.crumb-select-item", function(event) {
        if (event.type == 'mouseenter') {
            $(this).addClass("crumb-select-itemon");
        } else {
            $(this).removeClass("crumb-select-itemon");
        }
    });
    $(document).on('click', ".shaixuan-tj span.crumb-select-item", function(event) {
        event.preventDefault();
        $(this).remove();
        var TTR = $(this).find("em").text();
        $(".show-con a").each(function() {
            var TT = $(this).text();
            THI = $(this);
            THIPP = $(this).parents("dl");
            if (TTR == TT) {
                THI.removeClass("nzw12");
                THIPP.css("display", "block");
            }
        })
    });
    $(".show-con a").click(function(event) {
        event.preventDefault();
        THIP = $(this).parents("dl");
        if ($(this).hasClass("nzw12")) {} else {
            $(this).addClass("nzw12");
            zhicon = $(this).text();
            tianjaneir = "<span class='crumb-select-item'><a href='/'><em>" + zhicon + "</em><i class='icon-remove'></i></a></span>"
            $(".shaixuan-tj").children().last().after(tianjaneir);
            THIP.css("display", "none");
        }
    });
    $(".tab p").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    // 最新最热最赞处的点击变色效果
    $(".right a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".tab p").click(function(){
        var index = $(this).index();
        $(".tabbox > div").eq(index).show().siblings().hide();

    });


});
