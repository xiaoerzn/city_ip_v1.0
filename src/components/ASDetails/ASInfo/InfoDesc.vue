<template>
  <ul>
    <li>
      all 24 &nbsp;&nbsp;<i class="iconfont iconi4"></i> 22&nbsp;&nbsp;
      <i class="iconfont iconi6"></i> 2
      <ul>
        <li >
          该数据含义为：all、IPV4、IPV6地址数目分别为24、22、2；
        </li>
        <li >数目关系为 ：all=IPV4+IPV6</li>
      </ul>
    </li>
    <li>
      all 222(222)&nbsp;&nbsp;<i class="iconfont iconi4"></i>&nbsp;&nbsp;220(0)&nbsp;<i class="iconfont iconi6"></i>&nbsp;&nbsp;2(222)
      <ul>
        <li >
          该数据对应为：all有效地址数目（无效地址数目）、IPV4有效地址数目（无效地址数目）、IPV6有效地址数目（无效地址数目）
        </li>
        <li>
          数目关系为：all有效=IPV4有效+IPV6有效、all无效=IPV4无效+IPV6无效
        </li>
      </ul>
    </li>
    <li>
      Global Degree : 50 ( 10, 20, 10, 10 )
      <ul>
        <li>
          该数据对应为：Global as数目（
          Customer数目、provider数目、peer数目、sibling数目）
        </li>
        <li >
          数目关系为：Global as数目=
          Customer数目+provider数目+peer数目+sibling数目
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
// 后代元素选择器
li ul li {
  color: #409eff;
}
</style>
