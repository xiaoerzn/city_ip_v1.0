
<template>
  <el-card :body-style="{ padding: '0px 5px', height: '500px' }">
    <div slot="header" class="clearfix">
      <strong>域名解析路径</strong>
    </div>
    <div id="chart" style="width: 100%; height: 100%"></div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      /** @type EChartsOption */
      option: {
        title: {
          text: ''
        },
        tooltip: {},
        legend: [
          // {
          //   data: ['根', '一级', '二级', '三级', '四级', '五级', '六级'],
          // },
        ],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        toolbox: {
          show: 'true',
          orient: 'vertical',
          showTitle: true,
          feature: {
            saveAsImage: {
              type: 'png'
            },
            restore: {
              show: true
            }
          }

        },
        series: [
          {
            name: 'test',
            type: 'graph',
            layout: 'force',
            roam: true,
            draggable: true,
            itemStyle: {
              borderCap: 'round'
            },
            force: {
              initLayout: 'circular',
              repulsion: 150,
              edgeLength: 180,
              layoutAnimation: true,
              friction: 0.1
            },
            edgeSymbol: ['circle', 'arrow'],
            lineStyle: {
              width: '1'
            },
            focusNodeAdjacency: true,
            emphasis: {
              itemStyle: {
                borderWidth: 3,
                borderType: 'solid',
                borderColor: '#40f492'
              }
            },
            label: {
              show: true,
              position: 'top'
            },
            data: [
              // {
              //   // id:0,
              //   name: '根节点',
              //   symbolSize: 40,
              //   category: 0, //通过其控制显示与否
              //   nodeType: 0, //有子节点为1
              //   // "legendName": "根",
              // },
              // {
              //   // id:1,
              //   name: '一级1',
              //   symbolSize: 30,
              //   category: -1,
              //   nodeType: 1,
              //   // "legendName": "一级",
              // },
              // {
              //   // id:2,
              //   name: '一级2',
              //   symbolSize: 30,
              //   category: -1,
              //   // "legendName": "一级",
              // },
              // {
              //   // id:3,
              //   name: '二级1',
              //   symbolSize: 40,
              //   category: -2,
              //   nodeType: 0,
              //   // "legendName": "二级",
              // },
              // {
              //   // id:4,
              //   name: '二级2',
              //   symbolSize: 40,
              //   category: -2,
              //   nodeType: 0,
              //   // "legendName": "二级",
              // },
              // {
              //   // id:5,
              //   name: '二级3',
              //   symbolSize: 40,
              //   category: -2,
              //   nodeType: 1,
              //   // "legendName": "二级",
              // },
              // {
              //   // id:6,
              //   name: '三级1',
              //   symbolSize: 40,
              //   category: -3,
              //   nodeType: 0,
              //   // "toggle":-6,
              //   // "legendName": "三级",
              // },
            ],
            links: [
              // {
              //   source: '根节点',
              //   target: '一级1',
              // },
              // {
              //   source: '根节点',
              //   target: '一级2',
              // },
              // {
              //   source: '一级1',
              //   target: '二级1',
              // },
              // {
              //   source: '一级1',
              //   target: '二级3',
              // },
              // {
              //   source: '二级3',
              //   target: '三级1',
              // },
              // {
              //   source: '一级2',
              //   target: '二级2',
              // },
            ],
            categories: [
              // {
              //   name: '根',
              // },
              // {
              //   name: '一级',
              // },
              // {
              //   name: '二级',
              // },
              // {
              //   name: '三级',
              // },
              // {
              //   name: '四级',
              // },
              // {
              //   name: '五级',
              // },
              // {
              //   name: '六级',
              // },
            ]
          }
        ]
      }
    }
  },
  created () {
    this.getParsedata()
  },
  mounted () {
    // console.log(this.option)
    // this.draw()
    // bindChartClickEvent(this.echart)
  },
  methods: {
    async getParsedata () {
      const { data: res } = await this.$http.get('domain/path', {
        params: { domain_name: this.$route.params.id }
      })

      if (res.meta.status !== 200) {
        return this.$message.error('获取默认列表失败！')
      }

      // console.log(this.option.series[0].data)
      // console.log(Object.prototype.toString.call(this.option.series[0].data) )
      this.option.series[0].categories = res.data.categories
      this.option.legend = res.data.legend
      this.option.series[0].data = res.data.data
      this.option.series[0].links = res.data.links
      this.draw()
      // console.log(res)
    },
    draw () {
      // var that=this
      var chart = this.$echarts.init(document.getElementById('chart'))
      // console.log(this.option)
      chart.setOption(this.option)
      // console.log(myChart)
      // console.log(this)
      this.bindChartClickEvent(chart)
    },
    bindChartClickEvent (chart) {
      var that = this
      chart.on('click', function (params) {
        // var that=this
        // console.log("click")
        var category = params.data.category
        var nodeType = params.data.nodeType
        if (category === 0 || nodeType === 1) {
          // console.log(this)
          that.toggleShowNodes(chart, params)
        }
      })
    },
    /**
     * 展开或关闭节点
     * @param chart
     * @param params
     */
    toggleShowNodes (chart, params) {
      // console.log(params)
      var open = !!params.data.open
      var options = chart.getOption()
      // console.log(options)
      var seriesIndex = params.seriesIndex
      var srcLinkName = params.name // 节点名字
      var serieLinks = options.series[seriesIndex].links // option 的links
      var serieData = options.series[seriesIndex].data // option 的data
      var serieDataMap = new Map()
      var serieLinkArr = [] //
      // 当前根节点是展开的，那么就需要关闭所有的根节点
      if (open) {
        // 递归找到所有的link节点的target的值
        this.findLinks(serieLinkArr, srcLinkName, serieLinks, true)
        // console.log(serieLinkArr.length)
        if (serieLinkArr.length) {
          serieData.forEach((sd) => serieDataMap.set(sd.name, sd))
          // console.log(serieDataMap)
          for (var i = 0; i < serieLinkArr.length; i++) {
            if (serieDataMap.has(serieLinkArr[i])) {
              // console.log("has")
              var currentData = serieDataMap.get(serieLinkArr[i])
              currentData.category = -Math.abs(currentData.category)
              if (currentData.nodeType === 1) {
                currentData.open = false
              }
            }
          }
          serieDataMap.get(srcLinkName).open = false
          chart.setOption(options)
        }
      } else {
        // console.log("else")
        // 当前根节点是关闭的，那么就需要展开第一层根节点
        this.findLinks(serieLinkArr, srcLinkName, serieLinks, false)
        if (serieLinkArr.length) {
          // console.log(serieData)
          serieData.forEach((sd) => serieDataMap.set(sd.name, sd))

          // -------------------------------进不去----------------------

          // console.log(serieData)
          // console.log(serieDataMap)
          // console.log(serieLinkArr)

          // console.log("s="+s)
          for (var j = 0; j < serieLinkArr.length; j++) {
            // console.log(serieLinkArr[0])
            if (serieDataMap.has(serieLinkArr[j])) {
              // console.log("has")
              var currentData = serieDataMap.get(serieLinkArr[j])
              // console.log(currentData.category)
              currentData.category = Math.abs(currentData.category)
            }
          }
          serieDataMap.get(srcLinkName).open = true
          chart.setOption(options)
        }
      }
    },
    /**
     * 查找连接关系
     * @param links 返回的节点放入此集合
     * @param srcLinkName 源线的名称
     * @param serieLinks 需要查找的集合
     * @param deep 是否需要递归进行查找
     */
    findLinks (links, srcLinkName, serieLinks, deep) {
      // console.log("findlinks")
      var targetLinks = []
      serieLinks
        .filter((link) => link.source === srcLinkName)
        .forEach((link) => {
          targetLinks.push(link.target)
          // console.log(targetLinks)
          links.push(link.target)
        })
      if (deep) {
        for (var i = 0; i < targetLinks.length; i++) {
          this.findLinks(links, targetLinks[i], serieLinks, deep)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
#echart{
  overflow:auto;
}
</style>
