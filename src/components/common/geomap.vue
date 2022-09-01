<!--
  地图组件，传入经纬度，展示百度地图定位
  地图高度为360px
-->

<template>
  <baidu-map class="map" :center="{ lng: Number(lon), lat: Number(lat) }" :zoom="8" scrollWheelZoom>
    <bm-marker :position="{ lng: Number(lon), lat: Number(lat) }"> </bm-marker>
  </baidu-map>
</template>

<script>
export default {
  props: ['lon', 'lat']
}
</script>
<style lang="less" scoped>
.map {
  // width: 100%;
  height: 360px;
  /deep/ .anchorBL {
    display: none;
  }
}
</style>
