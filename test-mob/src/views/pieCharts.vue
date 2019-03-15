<template>
    <div>
        <div class="square-one square-scroll">
            <h3 class="title-content">工区问题数量</h3>
            <div class="scroll-x">
                <div class="outer-circle" v-for="(eItem, eIndex) in workArea" :key="eIndex">
                <div class="margic-circle">
                    <div :id="eItem.chartsId"></div>
                </div>
                </div>
            </div>
        </div>
        <div class="square-one">
            <h3 class="title-content">每日问题数量</h3>
            <div id="lineChartMain"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            myCharts: null,
            workArea: [
                { unclosenums: 0, id: 1, closenums: 0, name: 'I工区' },
                { unclosenums: 2, id: 2, closenums: 4, name: 'II工区' },
                { unclosenums: 6, id: 3, closenums: 15, name: 'III工区' },
                { unclosenums: 100, id: 4, closenums: 216, name: 'IV工区' }
            ],
            dayList: [
                {close: 4, unclose: 0, time: '2017-07-04'},
                {close: 5, unclose: 3, time: '2017-07-18'},
                {close: 2, unclose: 1, time: '2017-07-21'},
                {close: 10, unclose: 5, time: '2017-07-24'},
                {close: 9, unclose: 14, time: '2017-08-06'},
                {close: 6, unclose: 3, time: '2017-09-18'}
            ]
        }
    },

    methods: {
        drawsEcharts (line, close, unclose) {
            let myCharts = this.$echarts.init(document.getElementById('lineChartMain'))
            let option = {
                color: ['blue', 'yellow'], // 柱形图颜色
                legend: {
                    data: ['已关闭', '未关闭'],
                    icon: 'roundRect',
                    itemWidth: 14,
                    itemHeight: 14,
                    itemGap: 18,
                    right: 'center',
                    textStyle: {
                        color: '#000'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    borderColor: '#D7E0E6',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: line,
                        axisLine: {
                            lineStyle: { // x轴线宽度以及颜色
                                type: 'solid',
                                color: '#748292',
                                width: '2'
                            }
                        },
                        axisTick: {
                            alignWithLabel: true,
                            show: false
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: { // y轴线宽度以及颜色
                                type: 'solid',
                                color: '#748292',
                                width: '2'
                            }
                        },
                        axisTick: { // 不显示轴线刻度
                            show: false
                        },
                        axisLabel: {
                            color: '#748292',
                            fontFamily: 'PingFangSC-Regular',
                            fontSize: 7
                        }
                        // max: 30
                    }
                ],
                series: [
                    {
                        name: '已关闭',
                        type: 'line',
                        smooth: true,
                        showAllSymbol: true,
                        z: 15,
                        symbolSize: 0,
                        lineStyle: {
                            color: {
                                type: 'line',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [
                                    {
                                        offset: 0, color: 'blue' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1, color: 'blue' // 100% 处的颜色
                                    }
                                ]
                            }
                        },
                        data: close
                    },
                    {
                        name: '未关闭',
                        type: 'line',
                        smooth: true,
                        showAllSymbol: true,
                        z: 15,
                        symbolSize: 0,
                        lineStyle: {
                            color: {
                                type: 'line',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [
                                    {
                                        offset: 0, color: 'yellow' // 0% 处的颜色
                                    },
                                    {
                                        offset: 1, color: 'yellow' // 100% 处的颜色
                                    }
                                ]
                            }
                        },
                        data: unclose
                    }
                ]
            }
            myCharts.setOption(option)
            window.onresize = myCharts.resize()
        },
        drawPie (obj) {
            let myCharts = this.$echarts.init(document.getElementById(obj.chartsId))
            let option = {
                legend: {
                    bottom: 2,
                    left: '25%',
                    data: [obj.name],
                    icon: 'none'
                },
                series: [
                    {
                        name: 'I',
                        type: 'pie',
                        color: ['yellow', 'blue'],
                        radius: '90%',
                        center: ['49%', '39.5%'],
                        data: [
                            {value: obj.closenums, name: `${obj.closenums}\n\n已关闭`},
                            {value: obj.unclosenums, name: `${obj.unclosenums}\n\n未关闭`}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        label: {
                            position: 'inside'
                        },
                        labelLine: {
                            show: false
                        }
                    }
                ]
            }
            myCharts.setOption(option)
            window.onresize = myCharts.resize()
        }

    },
    created () {
        this.workArea.forEach((el, index) => {
            el.chartsId = `pieChartMain${index}`
            this.$nextTick(() => {
                this.drawPie(el)
            })
        })
        let lineList = []
        let closeList = []
        let uncloseList = []
        this.dayList.forEach((el, index) => {
            lineList.push(el.time)
            closeList.push([el.time, el.close])
            uncloseList.push([el.time, el.unclose])
            this.$nextTick(() => {
                this.drawsEcharts(lineList, closeList, uncloseList)
            })
        })
    },
    mounted () {
    }
}
</script>

<style lang='less' scoped>
.square-one {
    width: 92%;
    margin-left: 4%;
    background-color: #fff;
    overflow-x: hidden;
    .title-content {
        width: 94%;
        margin-left: 6%;
        text-align: left;
    }
    #lineChartMain {
        width: 100%;
        height: 260px;
        canvas {
            width: 100%;
        }
    }
}
.square-scroll {
    overflow-x: hidden;
    .scroll-x {
        width: 100%;
        height: 180px;
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        .outer-circle {
            flex-shrink: 0;
            width: 160px;
            height: 160px;
            border-radius: 100%;
            border: 1px solid yellow;
            .margic-circle {
                width: 90%;
                height: 90%;
                margin: 5%;
                border-radius: 100%;
                border: 1px solid blueviolet;
                div {
                    width: 100%;
                    height: 128%;
                    div {
                        width: 100%;
                        height: 100%;
                    }
                    canvas {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>
