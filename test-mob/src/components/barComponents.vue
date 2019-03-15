<template>
    <div>
        <div class="square-one" v-for="item in barDetail" :key="item.chartsId">
            <h3 class="title-content">{{item.titleName}}</h3>
            <div :id="item.chartsId"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
        }
    },
    props: {
        barDetail: {
            type: Array,
            required: true
        }
    },
    methods: {
        drawsEcharts () {
            console.log(this.barDetail[0].legendData)
            let seriesData = []
            seriesData = this.barDetail[0].series
            seriesData.forEach((el, index) => {
                el.type = 'bar'
                el.barWidth = 12
            })
            let myCharts = this.$echarts.init(document.getElementById(this.barDetail[0].chartsId))
            let option = {
                color: this.barDetail[0].barColor, // 柱形图颜色
                legend: {
                    data: this.barDetail[0].legendData,
                    itemWidth: 14,
                    itemHeight: 14,
                    legendItemGap: 1,
                    itemGap: this.barDetail[0].legendItemGap,
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
                        data: this.barDetail[0].xAxisData,
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
                    }
                ],
                series: seriesData
                // series: [
                //     {
                //         name: '已关闭',
                //         type: 'bar',
                //         itemStyle: {
                //             normal: {
                //                 color: '#BFEBFF'
                //             }
                //         },
                //         silent: true,
                //         barWidth: 12,
                //         barGap: '-100%', // Make series be overlap
                //         data: [14, 21, 26, 17, 14, 21, 25]
                //     },
                //     {
                //         name: '未关闭',
                //         type: 'bar',
                //         barWidth: 12,
                //         z: 10,
                //         data: [13, 19, 23, 15, 12, 18, 23]
                //     }
                // ]
            }
            myCharts.setOption(option)
            window.onresize = myCharts.resize
        }
    },

    mounted () {
        this.drawsEcharts()
    }
}
</script>

<style lang='less' scoped>
.square-one {
    width: 92%;
    margin-left: 4%;
    background-color: #fff;
    .title-content {
        width: 94%;
        margin-left: 6%;
        text-align: left;
    }
    div {
        width: 100%;
        height: 300px;
        canvas {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
