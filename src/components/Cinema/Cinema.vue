<template>
  <div class="cinema_body">
    <!-- <Loaidng v-if="isLoading"/> -->
    <div class="cinema_wrapper" ref="menu">
      <ul>
        <li
          v-for="(items,index) in cinameList"
          :key="index"
          @click="jump(items.nm,items.id,items.addr)"
        >
          <div class="ciname_title">
            <span class="title">{{items.nm}}</span>
            <span class="ciname_price">
              {{items.sellPrice}}
              <span>元起</span>
            </span>
          </div>
          <div class="ciname_address">
            <h1 class="addr">{{items.addr}}</h1>
            <span class="ciname_right">{{items.distance}}</span>
          </div>
          <!-- v-for="(i,index) in items.tag" :key="index" -->
          <div class="icon_wrappers" v-for="(i,index) in items.tag" :key="index" v-if="i === 0">
            <span :class="className(index)">{{filter(index)}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {CINAME_NAME} from "../../store/mutation-types";
import Bscrool from "better-scroll";
export default {
  data() {
    return {
      cinameList: {},
      active: true,
      isLoading: true
    };
  },
  mounted() {
    this.axios.get("/api/cinemaList?cityId=10").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.cinameList = res.data.data.cinemas;
        this.isLoading = false;
        this.scrool = new Bscrool(this.$refs.menu, {
          click: true // 让better-scroll允许水平滑动
        });
      }
    });
  },
  methods: {
    filter(index) {
      let label = [
        { index: "allowRefund", value: "退" },
        { index: "buyout", value: "巨幕" },
        { index: "cityCardTag", value: "IMAX厅" },
        { index: "deal", value: "折扣卡" },
        { index: "endorse", value: "4d厅" },
        { index: "sell", value: "小吃" },
        { index: "snack", value: "巨幕厅" }
      ];
      for (var i = 0; i < label.length; i++) {
        if (label[i].index === index) {
          return label[i].value;
        }
      }
      return "";
    },
    className(index) {
      let label = [
        { index: "allowRefund", value: "active" },
        { index: "buyout", value: "active" },
        { index: "cityCardTag", value: "active_a" },
        { index: "deal", value: "active_a" },
        { index: "endorse", value: "active_a" },
        { index: "sell", value: "active_a" },
        { index: "snack", value: "active_a" }
      ];
      for (var i = 0; i < label.length; i++) {
        if (label[i].index === index) {
          return label[i].value;
        }
      }
      return "";
    },
    jump(nm, id, address) {
      window.localStorage.setItem("ciname_nm", nm);
      window.localStorage.setItem("ciname_id", id);
      window.localStorage.setItem("ciname_address", address);
        // this.$store.commit(CITY_NAME, { id, nm });
      this.$store.commit(CINAME_NAME,{nm, id, address})
      this.$router.push("/cinemadetails");
    }
  }
};
</script>
<style lang="scss" scoped>
.cinema_body {
  width: 100%;

  .cinema_wrapper {
    height: 100vh;
    overflow: hidden;
    ul {
      padding: 114px 10px 43px 10px;
    }
    li {
      border-bottom: 1px solid #e6e6e6;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      div {
        margin-bottom: 10px;
      }
      .ciname_title {
        position: relative;
        .title {
          font-size: 14px;
        }
      }

      .ciname_price {
        font-weight: 400;
        color: red;
        position: absolute;
        right: 0;
        top: 0;
        span {
          font-size: 10px;
          color: $c_red;
        }
      }
      .ciname_address {
        font-size: 13px;
        color: #666;
        margin-bottom: 10px;
        position: relative;
        .addr {
          width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        span {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .icon_wrappers {
        display: inline-block;
        margin-right: 5px;

        height: 15px;
        //   line-height: 15px;
        border-radius: 2px;
        font-size: 13px;
        span.active {
          padding: 0 3px;
          color: #589daf;
          border: 1px solid #589daf;
        }
        span.active_a {
          padding: 0 3px;
          color: orange;
          border: 1px solid orange;
        }
      }
    }
  }
}
</style>