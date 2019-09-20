<template>
  <div class="details_body">
    <div class="details_layout">
      <div class="header">
        <!-- <CatHeader> -->
        <span @click="back" class="iconfont icon-right"></span>
        <CatHeader :name="this.$store.state.ciname_nm" />
      </div>
      <div class="scroll" ref="scroll">
        <div class="surround">
          <div class="title">
            <h2>{{this.$store.state.ciname_nm}}</h2>
            <h3>{{ this.$store.state.ciname_address}}</h3>
            <span>{{this.$store.state.nm}}</span>
          </div>
          <!-- <Loaidng v-if="ischange" /> -->
          <div class="wrapper" v-if="ischange">
            <div class="banner">
              <div class="msk"></div>
              <div class="menu" ref="menu">
                <ul ref="picUl">
                  <li v-for="(item,index) in detailsList" :key="index" ref="aLi">
                    <img :src="item.img | setWH('100.140')" alt @click="Jump(item.id)" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="vip-tips">
              <div class="label">折扣卡</div>
              <div class="label-text line-ellipsis">现在开卡，首单2张最高立减6元</div>
              <div class="process">20元起开卡</div>
            </div>
            <div class="newPaly_layout" ref="menus">
              <ul>
                <li v-for="item in detailsList" :key="item.id">
                  <div class="left_img" @touchstart.stop="Jump(item.id)">
                    <img :src="item.img | setWH('128.180')" alt />
                  </div>
                  <div class="right_list">
                    <h2 class="playName">
                      {{item.nm}}
                      <img v-if="item.version" src="@/assets/maxs.png" alt />
                    </h2>
                    <p>
                      观众评价:
                      <span class="score">{{item.sc}}</span>
                    </p>
                    <p>主演: {{ item.star }}</p>
                    <p class="show">{{item.showInfo}}</p>
                    <div class="btn" @touchstart.stop="Jump(item.id)">购票</div>
                  </div>
                </li>
              </ul>
              <!-- @hide="hide"  -->
              <!-- <Location v-if="ischange" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <router-view name="details"></router-view> -->
  </div>
</template>

<script>
import CatHeader from "../CatHeader/CatHeader";
import Bscrool from "better-scroll";
export default {
  data() {
    return {
      detailsList: {},
      ischange: false,
      show: true
    };
  },
  components: {
    CatHeader
  },
  mounted() {
    this.axios.get("/api/movieOnInfoList?cityId=10").then(res => {
      var msg = res.data.msg;

      if (msg === "ok") {
        this.detailsList = res.data.data.movieList;
        this.ischange = true;
        this.$nextTick(() => {
          let offsetWidth = this.$refs.aLi.length * 100;
          this.$refs.picUl.style.width = offsetWidth + "px";
          this.scroll = new Bscrool(this.$refs.scroll, {
            // scrollX: true // 让better-scroll允许水平滑动
          });
          this.scrolls = new Bscrool(this.$refs.menu, {
            scrollX: true // 让better-scroll允许水平滑动
          });
        });
      }
    });
  },
  methods: {
    back() {
      this.$router.back();
    },
    Jump(id) {
      this.$router.push("/Particulars/" + `${id}`);
    }
    // hide() {
    //   this.ischange = false;
    // }
  }
};
</script>

<style lang="scss" scoped>
.details_layout {
  width: 100%;
  .header {
    width: 100%;
    height: 53px;
    position: relative;
    .icon-right {
      position: fixed;
      left: 5px;
      top: 26px;
      margin-top: -13px;
      font-size: 26px;
      z-index: 51;
      color: #fff;
    }
  }

  .title {
    position: relative;
    padding: 15px;
    h2 {
      font-size: 17px;
      line-height: 24px;
      font-weight: 700;
      
      color: #333;
    }
    h3 {
      margin-top: 2px;
      font-size: 13px;
      line-height: 18.5px;
      width: 200px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #999;
    }
    span {
      position: absolute;
      right: 0;
      top: 50%;
      width: 70px;
      height: 31px;
      font-size: 17px;
      font-weight: 700;
      line-height: 31px;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      border-left: 1px solid #d8d8d8;
      text-align: center;
    }
  }
  .banner {
    width: 100%;
    position: relative;
    .msk {
      position: absolute;
      left: 0;
      right: 0;
      filter: blur(1.5px);
      background-color: #666;
      z-index: -1;
      width: 100%;
      height: 100%;
    }
    .menu {
      width: 100%;
      overflow: hidden;
    }
    ul {
      display: flex;
      padding: 10px;
      //   overflow: hidden;
      li {
        flex: 1;
        margin-left: 10px;
        img {
          width: 80px;
          height: 110px;
        }
      }
    }
  }
  .vip-tips {
    width: 100%;
    display: flex;
    padding: 0 15px;
    height: 42px;
    line-height: 42px;
    background-color: #fff5ea;
    .label {
      flex: 0 0 auto;
      display: inline-block;
      background-color: #ff941a;
      border-radius: 2px;
      font-size: 10px;
      line-height: 15px;
      height: 15px;
      width: 34px;
      text-align: center;
      color: #fff;
      margin-top: 13px;
      margin-right: 10px;
    }
    .label-text {
      flex: 1 1 auto;
      color: #ff941a;
      font-size: 12px;
    }
    .process {
      flex: 0 0 auto;
      line-height: 42px;
      color: #999;
      font-size: 12px;
    }
  }
  .scroll {
    height: 100vh;
    overflow: hidden;
    //  padding-bottom: 20px;
    //   .surround{
    //   padding-bottom: 20px;
    //   }
  }
  .newPaly_layout {
    // height: 100vh;
    overflow: hidden;
    ul {
      width: 100%;
      padding: 4px 10px 20px 10px;

      li {
        width: 100%;
        display: flex;
        position: relative;
        padding-bottom: 5px;
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 5px;
        &:last-child {
          border-bottom: 0;
        }
        .left_img {
          flex: 0 0 64px;
          height: 90px;
          img {
            width: 100%;
          }
        }
        .right_list {
          flex: 1;
          margin-left: 10px;
        }
        .playName {
          font-size: 17px;
          line-height: 24px;
          width: 150px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: bold;
          img {
            width: 50px;
            position: absolute;
            top: 5px;
            right: 20px;
          }
        }
        p {
          font-size: 13px;
          color: #666;
          line-height: 22px;
          width: 170px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin: 5px 5px 5px 0;
          .score {
            font-size: 14px;
            font-weight: 700;
            color: #faaf00;
          }
        }
        .btn {
          width: 40px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          color: #fff;
          background-color: $c_red;
          border-radius: 10px;
          position: absolute;
          top: 50%;
          margin-top: -15px;
          right: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>