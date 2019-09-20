<template>
  <div class="location" v-show="ischange">
    <h2 class="title">定位</h2>
    <h2>{{city_name}}</h2>
    <div class="btn_box">
      <div @touchstart="hide">取消</div>
      <div @click.stop="change">切换定位</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city_name: "",
      city_id: "",
      ischange: true
    };
  },
  mounted() {
    this.axios.get("/api/getLocation").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.city_name = res.data.data.nm;
        this.city_id = res.data.data.id;
        if (this.$store.state.id == this.city_id) {
          this.$emit("hide");
        }
      }
    });
  },
  methods: {
    hide() {
      this.$emit("hide");
    },
    change() {
      // 若是本地id 跟城市定位 id相同则不弹出定位框
      if (this.$store.state.id == this.city_id) {
        //   console.log(this.$store.state.id,id)
        return;
      }
      window.localStorage.setItem("newNum", this.city_name);
      window.localStorage.setItem("newId", this.city_id);
      this.ischange = false;
      window.location.reload(); //刷新页面
    }
  }
};
</script>

<style lang="scss" scoped>
.location {
  width: 200px;
  height: 120px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 2px 2px #666;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -50px;
  .title {
    font-size: 18px;
    color: #222;
    padding: 8px;
    text-align: center;
  }
  h2 {
    color: #666;
    
    font-size: 14px;
    text-align: center;
    // padding: 10px;
    height: 40px;
    line-height: 20px;
  }
  .btn_box {
    border-top: 1px solid #ccc;
    height: 42px;
    display: flex;
    div {
      text-align: center;
      line-height: 42px;
      flex: 1;
      color: #666;
      font-size: 13px;
      border-right: 1px solid #ccc;
      &:last-child {
        border-right: 0;
      }
    }
  }
}
</style>