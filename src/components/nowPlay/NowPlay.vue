<template>
  <div class="nowPlay_body">
    <Loaidng v-if="isLoading"/>
    <div v-else class="newPaly_layout" ref="menu">
      <ul>
        <li v-for="item in palyList" :key="item.id">
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
      <Location v-if="ischange" @hide="hide"/>
    </div>
  </div>
</template>
<script>
import Bscrool from "better-scroll";
import Location from '../Location/Location'
export default {
  name: "NowPlay",
  components: {
    Location
  },
  data() {
    return {
      palyList: [],
      isLoading:true,
      ischange:true
    };
  },
  mounted() {
    this.axios.get("/api/movieOnInfoList?cityId=10").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.palyList = res.data.data.movieList;
        this.isLoading=false;
        this.$nextTick(() => {
          this.scrool = new Bscrool(this.$refs.menu, { click: true });
        });
      }
    });
  },
  methods: {
    Jump(id){
      this.$router.push('Particulars/1/'+`${id}`)
    },
    hide(){
      this.ischange=false;
    },
  }
};
</script>
<style lang="scss">
.nowPlay_body {
  width: 100%;

  .newPaly_layout {
    height: 100vh;
    overflow: hidden;
    ul {
      width: 100%;
      padding: 94px 10px 43px 10px;
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