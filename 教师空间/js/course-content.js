$(function() {
    // 可拖拽列表部分js
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
    $(".m-edit").click(function() {
        $(".masker, .edit-popup").show();
    });

    // 点击添加和更多，出现下路列表
    $(".m-append, .m-more").click(function(e) {
        $(this).siblings().find(".dropdown").hide();
        var dropdown = $(this).find(".dropdown");
        if (dropdown.is(":visible")) {
            dropdown.hide();
        } else {
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

    $(".sidebar a").click(function() {
        // alert("111");
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".mainright > div").eq(index).show().siblings().hide();
    });
});
// 环形图部分js
$(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 指定图表的配置项和数据
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ['#b5bcbc', '#fff100', '#e37f64', '#cde9d3'],
        series: [{
            name: '课时统计',
            type: 'pie',
            radius: ['50%', '75%'], // 半径[内半径，外半径]
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: '1' },
                { value: 310, name: '2' },
                { value: 234, name: '3' },
                { value: 135, name: '4' }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});
