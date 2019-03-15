<template>
    <div>
        <bar-content :barDetail="barDetail"></bar-content>
        <bar-content :barDetail="barDetail1"></bar-content>
        <bar-content :barDetail="barDetail2"></bar-content>

    </div>
</template>

<script>
import barContent from '../components/barComponents'
export default {
    name: 'barCharts',
    data () {
        return {
            barDetail: [
                {
                    titleName: '单体工程',
                    chartsId: 'echartsMain',
                    barColor: '#2185c5',
                    legendData: ['已关闭', '未关闭'],
                    legendItemGap: 18,
                    xAxisData: ['工程', '工程', '工程', '工程', '工程', '工程', '工程'],
                    series: [
                        {
                            name: '已关闭',
                            itemStyle: {
                                normal: {
                                    color: '#BFEBFF'
                                }
                            },
                            data: [14, 21, 26, 17, 14, 21, 25],
                            barGap: '-100%',
                            silent: true
                        },
                        {
                            name: '未关闭',
                            z: 10,
                            data: [13, 19, 23, 15, 12, 18, 23]
                        }
                    ]
                }
            ],
            barDetail1: [
                {
                    titleName: '专业',
                    chartsId: 'echartsMained',
                    barColor: '#aeaccc',
                    legendData: ['开启', '未开启'],
                    legendItemGap: 18,
                    xAxisData: ['工程', '工程', '工程', '工程', '工程', '工程', '工程'],
                    series: [
                        {
                            name: '开启',
                            itemStyle: {
                                normal: {
                                    color: '#eee'
                                }
                            },
                            data: [14, 21, 26, 17, 14, 21, 25],
                            barGap: '-100%',
                            silent: true
                        },
                        {
                            name: '未开启',
                            z: 10,
                            data: [13, 19, 23, 15, 12, 18, 23]
                        }
                    ]
                }
            ],
            barDetail2: [
                {
                    titleName: '发起人统计',
                    chartsId: 'echartsMain2',
                    barColor: 'blue',
                    legendData: ['轻微', '一般', '严重'],
                    legendItemGap: 6,
                    xAxisData: ['工程', '工程', '工程', '工程', '工程', '工程', '工程'],
                    series: [
                        {
                            name: '轻微',
                            itemStyle: {
                                normal: {
                                    color: 'red'
                                }
                            },
                            data: [17, 23, 28, 19, 18, 24, 28],
                            barGap: '-100%',
                            silent: true
                        },
                        {
                            name: '一般',
                            itemStyle: {
                                normal: {
                                    color: 'yellow'
                                }
                            },
                            data: [14, 21, 26, 17, 14, 21, 25],
                            barGap: '-100%',
                            silent: true
                        },
                        {
                            name: '严重',
                            z: 10,
                            data: [13, 19, 23, 15, 12, 18, 23]
                        }
                    ]
                }
            ]
        }
    },
    components: {
        barContent
    },
    methods: {
        // drawsEcharts () {
        //     let myCharts = this.$echarts.init(document.getElementById('echartsMain'))
        //     let option = {
        //         color: ['#2185c5'], // 柱形图颜色
        //         legend: {
        //             data: ['已关闭', '未关闭'],
        //             // icon: 'circle',
        //             itemWidth: 14,
        //             itemHeight: 14,
        //             itemGap: 18,
        //             right: 'center',
        //             textStyle: {
        //                 color: '#000'
        //             }
        //         },
        //         tooltip: {
        //             trigger: 'axis',
        //             axisPointer: { // 坐标轴指示器，坐标轴触发有效
        //                 type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        //             }
        //         },
        //         grid: {
        //             left: '3%',
        //             right: '4%',
        //             bottom: '3%',
        //             borderColor: '#D7E0E6',
        //             containLabel: true
        //         },
        //         xAxis: [
        //             {
        //                 type: 'category',
        //                 data: ['工程', '工程', '工程', '工程', '工程', '工程', '工程'],
        //                 axisLine: {
        //                     lineStyle: { // x轴线宽度以及颜色
        //                         type: 'solid',
        //                         color: '#748292',
        //                         width: '2'
        //                     }
        //                 },
        //                 axisTick: {
        //                     alignWithLabel: true,
        //                     show: false
        //                 }
        //             }
        //         ],
        //         yAxis: [
        //             {
        //                 type: 'value',
        //                 axisLine: {
        //                     lineStyle: { // y轴线宽度以及颜色
        //                         type: 'solid',
        //                         color: '#748292',
        //                         width: '2'
        //                     }
        //                 },
        //                 axisTick: { // 不显示轴线刻度
        //                     show: false
        //                 },
        //                 axisLabel: {
        //                     color: '#748292',
        //                     fontFamily: 'PingFangSC-Regular',
        //                     fontSize: 7
        //                 }
        //             }
        //             // {
        //             //     type: 'value',
        //             //     min: 0,
        //             //     max: 100,
        //             //     interval: 20,
        //             //     axisLabel: {
        //             //         formatter: '{value} %' // 右侧轴线
        //             //     },
        //             //     axisLine: {
        //             //         lineStyle: {
        //             //             type: 'solid',
        //             //             color: '#748292',
        //             //             width: '2'
        //             //         }
        //             //     },
        //             //     axisTick: {
        //             //         alignWithLabel: true,
        //             //         show: false
        //             //     }
        //             // }
        //         ],
        //         series: [
        //             {
        //                 name: '已关闭',
        //                 type: 'bar',
        //                 itemStyle: {
        //                     normal: {
        //                         color: '#BFEBFF'
        //                     }
        //                 },
        //                 silent: true,
        //                 barWidth: 12,
        //                 barGap: '-100%', // Make series be overlap
        //                 // barCategoryGap: [13, 18, 18],
        //                 data: [14, 21, 26, 17, 14, 21, 25]
        //             },
        //             {
        //                 name: '未关闭',
        //                 type: 'bar',
        //                 barWidth: 12,
        //                 z: 10,
        //                 data: [13, 19, 23, 15, 12, 18, 23]
        //             }
        //         ]
        //     }
        //     myCharts.setOption(option)
        //     window.onresize = myCharts.resize
        // }
    },

    mounted () {
    }
}
</script>

<style lang='less' scoped>
</style>
