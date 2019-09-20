<template>
  <div class="search_layout">
    <div class="search_header">
      <div class="inpout_wrapper">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="请输入.." ref="myinput" v-model="inpValue" />
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
    </div>
    <div class="search_list" ref="menu">
      <ul>
        <li v-for="(items,index) in searchList" :key="index">
          <div class="search_img" @click="Jump(items.id)">
            <img :src="items.img | setWH('128.180')" alt />
          </div>
          <div class="text_right">
            <h2 class="search_title">{{items.nm}}</h2>
            <span class="score">{{items.sc}}</span>
            <p>{{items.dir}}</p>
            <p>{{items.cat}}</p>
            <p>{{items.rt}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscrool from "better-scroll";
export default {
  name: "Search",
  props:['id'],
  data() {
    return {
      searchList: [],
      inpValue: ""
    };
  },
  mounted() {
    //   this.inpVal(this.str)
  },
  watch: {
    inpValue(newvalue) {
      this.axios
        .get("/api/searchList?cityId=10&kw=" + `${newvalue}`)
        .then(res => {
          var msg = res.data.msg;
          if (msg === "ok") {
            var item = res.data.data.movies.list;
            this.searchList = item;
            this.$nextTick(() => {
              this.scrool = new Bscrool(this.$refs.menu, { click: true });
            });
          }
        });
    }
  },
  methods: {
    Jump(id){
      this.$router.push('Particulars/3/'+`${id}`)
    }
  }
};
</script>
<style lang="scss" scoped>
.search_layout {
  width: 100%;
  padding: 93px 0px 43px 0px;
  height: 100%;
  background-color: red;
  position: relative;
  .search_header {
    width: 100%;
    position: fixed;
    top: 93px;
    left: 0;
    background-color: #f5f5f5;
    padding: 8px 10px;
    border-bottom: 1px solid #e5e5e5;
    z-index: 30;
    .inpout_wrapper {
      padding: 0 10px;
      border: 1px solid #e5e5e5;
      background-color: #fff;
      border-radius: 5px;
      display: flex;
    }
    input {
      border: 0;
      padding: 4px 4px;
      width: 100%;
      font-size: 12px;
      color: #ccc;
      outline: none;
    }
    i {
      padding: 6px;
    }
  }
  .search_result {
    position: fixed;
    top: 140px;
    left: 0;
    background-color: #fff;
    width: 100%;
    padding: 10px 15px;
    color: #999;
    border-bottom: 1px solid #e5e5e5;
    z-index: 31;
    h3 {
      font-size: 15px;
      font-weight: 700;
    }
  }
  .search_list {
    width: 100%;
    position: absolute;
    top: 174px;
    left: 0;
    z-index: 20;
    ul {
      margin:0 12px;
      li {
        padding: 10px 0px;
        position: relative;
        display: flex;
        border-bottom: 1px #e6e6e6 solid;
      }
      .search_img {
        flex: 0 0 64px;
        height: 90px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text_right {
        flex: 1;
        margin-left: 15px;
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
        h2 {
          font-size: 18px;
          width: 170px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          display: inline-block;
        }
        span {
          font-size: 16px;
          color: #fc7103;
          vertical-align: bottom;
          font-weight: 700;

          position: absolute;
          right: 14px;
          top: 12px;
        }
      }
    }
  }
}
</style>