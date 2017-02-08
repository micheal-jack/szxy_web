$(function() {

    var updateOutput = function(e) {
        var list = e.length ? e : $(e.target),
            output = list.data('output');
        if (window.JSON) {
            output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
        } else {
            output.val('JSON browser support required for this demo.');
        }
    };
    // activate Nestable for list 1
    $('#nestable').nestable({
        group: 1,
        maxDepth: 4
    }).on('change', updateOutput);
    // output initial serialised data
    updateOutput($('#nestable').data('output', $('#nestable-output')));




    // 点击添加章按钮，出现弹窗
    $(".add").click(function() {
        $(".masker, .add-chapter").show();
    });
    // 关闭添加章弹窗
    $(".cancel-add, .add-close").click(function() {
        $(".masker, .add-chapter, .edit-popup").hide();
    });
    // 点击编辑，出现编辑弹窗
    $(".m-edit").click(function(){
        $(".masker, .edit-popup").show();
    });

    // 点击添加和更多，出现下路列表
    $(".m-append, .m-more").click(function(e){
        $(this).siblings().find(".dropdown").hide();
        var dropdown = $(this).find(".dropdown");
        if(dropdown.is(":visible")){
            dropdown.hide(); 
        }else {
            dropdown.show();
        }
        $(document).one("click", function() {
            dropdown.hide();
        });
        e.stopPropagation();
    });

    // 阻止可拖拽列表右侧冒泡事件
    $(".manage").mousedown(function(o) {
        o.stopPropagation();
    });

    $(".sidebar a").click(function(){
        // alert("111");
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".mainright > div").eq(index).show().siblings().hide();
    });


});
