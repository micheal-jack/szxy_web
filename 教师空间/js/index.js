// 日历签到部分js=================================
(function($) {
    var Checkin = function(ele, options) {
        this.ele = ele;
        this.opt = options;
        this.defaults = {
            width: 272,
            height: 356,
            background: '#fff',
            dateArray: [1, 2, 4, 6], // 假设已签到的天数+1
        };
        this.obj = $.extend({}, this.defaults, this.opt);
    }
    Checkin.prototype.init = function() {
        var _self = this.ele,
            html = '',
            myDate = new Date(),
            year = myDate.getFullYear(),
            month = myDate.getMonth(),
            day = myDate.getDate(),
            weekText = ['日', '一', '二', '三', '四', '五', '六'];
        _self.css({
            width: this.obj.width + 'px',
            height: this.obj.height,
            background: this.obj.background,
            borderRadius: this.obj.radius,
            color: this.obj.color,
            padding: this.obj.padding
        }).append("<div class='title'><a class=\'last-month\' href=\"javascript:;\"></a><p>" + year + '年' + (month + 1) + '月' + day + '日' + "</p><a class=\'next-month\' href=\"javascript:;\"></a></div><p class='sign-days'>连续签到20天啦~</p>");
        $("<ul class='week clearfix'></ul><ul class='calendarList clearfix'></ul>").appendTo(_self);
        for (var i = 0; i < 7; i++) {
            _self.find(".week").append("<li>" + weekText[i] + "</li>")
        };
        for (var i = 0; i < 42; i++) {
            html += "<li></li>"
        };
        _self.find(".calendarList").append(html);
        var $li = _self.find(".calendarList").find("li");
        _self.find(".week li").css({
            width: (_self.width() / 7) + 'px',
            height: 30 + 'px',
            boxSizing: 'border-box',
            background: '#fff'
        });
        $li.css({
            width: (_self.width() / 7) + 'px',
            height: 30 + 'px',
            boxSizing: 'border-box'
        });
        $("<a class=\'checkBtn\' href=\"javascript:;\">签到</a>").appendTo(_self);
        _self.find(".calendarList").find("li:nth-child(7n)").css('borderRight', 'none');
        _self.find(".week li:nth-child(7n)").css('borderRight', 'none');
        var monthFirst = new Date(year, month, 1).getDay();
        var d = new Date(year, (month + 1), 0)
        var totalDay = d.getDate(); //获取当前月的天数
        for (var i = 0; i < totalDay; i++) {
            $li.eq(i + monthFirst).html(i + 1);
            $li.eq(i + monthFirst).addClass('data' + (i + 1))
            if (isArray(this.obj.dateArray)) {
                for (var j = 0; j < this.obj.dateArray.length; j++) {
                    if (i == this.obj.dateArray[j]) {
                        // 假设已经签到的
                        $li.eq(i + monthFirst).addClass('checked');
                    }
                }
            }
        }
        _self.find($(".data" + day)).addClass('able-qiandao');
    }
    var isChecked = false;
    Checkin.prototype.events = function() {
        var _self = this.ele;
        var $li = _self.find(".calendarList").find("li");
        $li.on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            if ($(this).hasClass('able-qiandao')) {
                $(this).addClass('checked');
                modal(_self);
                isChecked = true;
            }
        });
        var checkBtn = _self.find(".checkBtn");
        checkBtn.click(function(event) {
            modal(_self);
            _self.find('.able-qiandao').addClass('checked');
            isChecked = true;
        });
    }
    var modal = function(e) {
        var mask = e.parents().find(".mask");
        var close = e.parents().find(".closeBtn");
        if (mask && !isChecked) {
            mask.addClass('trf');
        } else {
            return
        };
        close.click(function(event) {
            event.preventDefault();
            mask.removeClass('trf')
        });
        e.parents().find('.checkBtn').text("已签到");
    }
    $.fn.Checkin = function(options) {
        var checkin = new Checkin(this, options);
        var obj = [checkin.init(), checkin.events()]
        return obj
    }
    var isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
})(jQuery);
// 插件调用
$(".checkin").Checkin();
// 首页饼图部分js======================================
$(function() {
    // 基于准备好的dom，初始化echarts实例
    var myCourse = echarts.init(document.getElementById('course'));
    var myCourse2 = echarts.init(document.getElementById('course2'));
    var myCourse3 = echarts.init(document.getElementById('course3'));
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
                { value: 3, name: '1' },
                { value: 5, name: '2' },
                { value: 8, name: '3' },
                { value: 13, name: '4' }
            ]
        }]
    };
    option2 = {
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
    option3 = {
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
                { value: 1, name: '1' },
                { value: 1, name: '2' },
                { value: 1, name: '3' },
                { value: 1, name: '4' }
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myCourse.setOption(option);
    myCourse2.setOption(option2);
    myCourse3.setOption(option3);
});
