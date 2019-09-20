<template>
  <div class="movie_body">
    <Loaidng v-if="isLoading"/>
    <div v-else class="movie_layout" ref="menu">
      <ul>
        <li v-for="item in willList" :key="item.id">
          <div class="left_img" @click.stop="Jump(item.id)">
            <img :src="item.img | setWH('128.180')" alt />
          </div>
          <div class="right_list">
            <h2 class="playName">
              {{item.nm}}
              <img v-if="item.version" src="@/assets/maxs.png" alt />
            </h2>
            <p>
              <span class="person">{{item.wish}}&nbsp;人想看</span>
            </p>
            <p>主演: {{ item.star }}</p>
            <p>{{item.rt}}&nbsp;上映</p>
            <div class="btn" @click.stop="Jump(item.id)">预售</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  // name: "WillPlay",
  data() {
    return {
      willList: [],
      isLoading:true
    };
  },
  mounted() {
    this.axios.get("api/movieComingList?cityId=10").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.willList = res.data.data.comingList;
        this.isLoading=false;
        this.$nextTick(() => {
          this.initBetterScroll();
          // this.scrool = new BScroll(this.$refs.menu, { click: true });
        });
      }
    });
  },
  methods: {
    initBetterScroll() {
      if (this.menuScroll) {
        this.menuScroll.refresh();
      } else {
        this.menuScroll = new BScroll(this.$refs.menu, { click: true });
      }
    },
    Jump(id) {
      this.$router.push("Particulars/2/" + id);
    }
  },
  beforeDestroy() {
    this.menuScroll.destroy();
    this.menuScroll = null;
  }
};
</script>
<style lang="scss" scoped>
.movie_body {
  width: 100%;

  .movie_layout {
    height: 100vh;
    overflow: hidden;
    ul {
      padding: 94px 10px 43px 10px;
      width: 100%;
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
        }
        .btn {
          width: 40px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          color: #fff;
          background-color: #3c9fe6;
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