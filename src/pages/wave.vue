<template>
    <div>
        <img class="demo_img" v-for="(item,index) in imgList" :src="item.src" @click="show(index)">
        <div>
            <previewer :list="imgList" ref="previewer" :options="options" @on-index-change="indexChange"></previewer>
        </div>

        <!-- 底部波浪 -->
        <div id="wave"></div>
    </div>
</template>

<script>
import { Previewer } from "vux";
export default {
  data() {
    return {
      imgList: [
        {
          msrc:
            "http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg",
          src:
            "http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg",
          w: 800,
          h: 400
        },
        {
          msrc:
            "http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg",
          src:
            "http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg",
          w: 1200,
          h: 900
        },
        {
          msrc:
            "http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg",
          src:
            "http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg"
        }
      ],
      options: {
        getThumbBoundsFn(index) {
          let thumbnail = document.querySelectorAll(".demo_img")[index];
          let pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop;
          let rect = thumbnail.getBoundingClientRect();
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        }
      }
    };
  },

  components: {
    Previewer
  },

  mounted() {},

  methods: {
    indexChange(arg) {
      console.log(arg);
    },
    show(index) {
      this.$refs.previewer.show(index);
    }
  },

  computed: {}
};
</script>
<style lang='less' scoped>
.demo_img {
  width: 50%;
}

// 底部波浪
#wave {
  position: relative;
  align-items: center;
  background-color: #810087;
  overflow: hidden;
  bottom: -35vh;
  height: 30vh;
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 300vw;
    min-height: 300vw;
    background-color: #fff;
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  &:before {
    bottom: 22vh;
    border-radius: 45%;
    animation-duration: 10s;
  }

  &:after {
    bottom: 19vh;
    opacity: 0.3;
    border-radius: 47%;
    animation-duration: 10s;
  }
}
@keyframes rotate {
  0% {
    transform: translate(-50%, 0) rotateZ(0deg);
  }
  50% {
    transform: translate(-50%, -2%) rotateZ(180deg);
  }
  100% {
    transform: translate(-50%, 0%) rotateZ(360deg);
  }
}
</style>