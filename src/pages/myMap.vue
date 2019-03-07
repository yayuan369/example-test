
<template>
    <div>
        <div id="allmap" style="width:100%;height:500px;border:1px solid gray"></div>
        <div id='result'></div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  mounted() {
    this.getMAp();
  },

  methods: {
    getMAp() {
      var map = new BMap.Map("allmap");
      map.enableScrollWheelZoom();
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);

      var driving = new BMap.DrivingRoute(map, {
        renderOptions: { map: map, panel: "result", autoViewport: true }
      });
      driving.search("郑州", "上海");
    }
  },

  computed: {}
};
</script>
<style lang='less' scoped>
</style>