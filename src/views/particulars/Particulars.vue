<template>
  <div id="header" class="animation">
    <!-- <Loaidng v-if="ischange"/> -->
    <div class="cat_header">
      <h1>影片详情</h1>
      <i class="iconfont icon-right" @touchstart.stop="Return"></i>
    </div>
    <!-- <Loaidng v-if="isLoading"/> -->
    <div class="catwrapper" v-if="show">
      <div class="partic_list">
        <div class="bg_img">
          <img :src="details.img | setWH('148.208')" alt />
        </div>
        <div class="filter"></div>
        <div class="left_img">
          <img :src="details.img | setWH('148.208')" alt />
        </div>
        <div class="text_right">
          <h2>{{details.nm}}</h2>
          <p>{{details.enm}}</p>
          <p>{{details.sc}}</p>
          <p>{{details.cat}}</p>
          <p>{{details.src}}</p>
          <p>{{details.pubDesc}}</p>
        </div>
      </div>
      <div class="film_details">
        <!-- <div class="mask" ref="cover" @click.stop="mask">
          <span class="iconfont icon-lower-triangle"></span>
        </div>-->
        <i></i>
        <p>{{ details.dra}}</p>
      </div>
      <div class="pic_show">
        <i></i>
        <div class="wrapper" ref="menu">
          <ul ref="picUl">
            <li v-for="(item,index) in details.photos" :key="index">
              <img :src="item | setWH('140.127')" alt />
            </li>
          </ul>
        </div>
      </div>
      <div class="film_footer">
        <h1 @click="Jump(details.nm)">特惠购买</h1>
      </div>
    </div>
  </div>
</template>
<script>
import Bscrool from "better-scroll";
import {MOVIE_NAME} from '../../store/mutation-types'
export default {
  props: ["id"],
  data() {
    return {
      details: {},
      ischange: true,
      isLoading: true,
      show: false
    };
  },
  mounted() {
    this.axios.get("/api/detailmovie?movieId=" + `${this.$route.params.id}`).then(res => {
      var msg = res.data.msg;
      this.show = true;
      if (msg === "ok") {
        this.details = res.data.data.detailMovie;
        // this.isLoading=false;
        this.$nextTick(() => {
          let offsetWidth = this.details.photos.length * 150;
          this.$refs.picUl.style.width = offsetWidth + "px";
          this.scrool = new Bscrool(this.$refs.menu, {
            scrollX: true // 让better-scroll允许水平滑动
          });
        });
      }
    });
  },
  methods: {
    Return() {
      this.$router.back();
    },
    Jump(nm) {
      // console.log("123")
      window.localStorage.setItem("movie_name", nm);
      this.$store.commit('MOVIE_NAME',nm)
      this.$router.push("/moveSelect");
    }
    // change(nm) {
    //
    // }
  }
};
</script>

<style lang="scss" scoped>
.pic_show i,
.film_details i {
  width: 100%;
  padding: 6px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background-color: #f0f2f3;
  display: block;
}
#header {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 1000;
  width: 100%;
  min-height: 100%;
  .catwrapper {
    padding-bottom: 43px;
  }
  .cat_header {
    width: 100%;
    position: fixed;
    background-color: $c_red;
    text-align: center;
    z-index: 50;
    padding: 18px 0;
    color: #fff;
    h1 {
      font-size: 18px;
      display: inline-block;
    }
    i {
      position: absolute;
      left: 5px;
      top: 50%;
      margin-top: -13px;
      font-size: 26px;
      z-index: 40;
    }
  }
  .partic_list {
    display: flex;
    margin-top: 53px;
    .left_img {
      flex: 0 0 108px;
      height: 150px;
      margin: 20px;
      border: 1px solid #f0f2f3;

      z-index: 20;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .bg_img {
      width: 100%;
      filter: blur(45px);
      position: absolute;
      left: 0px;
      top: 54px;
      z-index: 17;
      height: 190px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .filter {
      width: 100%;
      height: 190px;
      position: absolute;
      left: 0px;
      top: 54px;
      z-index: 18;
      background-color: #40454d;
      opacity: 0.25;
    }
  }
  .text_right {
    flex: 1;
    margin-top: 20px;
    z-index: 20;
    h2 {
      width: 160px;
      font-size: 20px;
      color: #fff;
      font-weight: normal;
      line-height: 40px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p {
      line-height: 20px;
      font-size: 14px;
      color: #ccc;
      width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:last-child {
        width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .film_details {
    background-color: #fff;

    position: relative;
    // .mask {
    //   transition: all 0.5s linear;
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   height: 120px;
    //   width: 100%;
    //   text-align: center;
    //   background-color: #fff;
    // }
    p {
      font-size: 14px;
      color: #666;
      padding: 10px;
      line-height: 22px;
    }
  }
  .pic_show {
    width: 100%;

    overflow: hidden;
    .wrapper {
      // margin-top: 20px;
      width: 100%;
      overflow: hidden;
      margin: 10px 10px;
    }
    ul {
      display: flex;
      li {
        flex: 1;

        &:last-child {
          padding-left: 0;
        }
      }
    }
  }
  .film_footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: $c_red;
    height: 43px;
    h1 {
      color: #fff;
      font-size: 18px;
      text-align: center;
      line-height: 40px;
    }
  }
}
// .animation {
//   animation: 0.5s move;
// }
// @keyframes move {
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(0);
//   }
// }
</style>