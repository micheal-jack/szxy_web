// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));


// 指定图表的配置项和数据

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#b5bcbc', '#fff100','#e37f64','#cde9d3'],
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
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
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' }
        ]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
