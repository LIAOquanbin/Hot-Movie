<template>
  <div class="featured_body">
    <div class="featured_msk" @click.stop="change"></div>
    <div class="featured_weapper animation">
      <div>
        <h2>特色功能</h2>
        <span v-for="(items,index) in label" :key="index">{{items.nm}}</span>
      </div>
      <div class="content">
        <h2>可选购</h2>
        <div class="item" v-for="(item,index) in pag" :key="index">{{item.nm}}</div>
      </div>
      <div class="featured_footer">
        <span>重置</span>
        <span @click.stop="change">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: [{ nm: "全部" }, { nm: "可改签" }, { nm: "可退票" }],
      pag: [
        { nm: "巨幕" },
        { nm: "IMAX厅" },
        { nm: "折扣卡" },
        { nm: "4d厅" },
        { nm: "小吃" },
        { nm: "杜比全景声厅" },
        { nm: "CGS中国巨幕厅" },
        { nm: "RealD厅" },
        { nm: "DTS:X 临境音厅" }
      ]
    };
  },
  methods: {
    change() {
      this.$router.push("/CatCity");
    }
  }
};
</script>

<style lang="scss" scoped>
.featured_body {
  margin-top: 93px;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  .featured_msk {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -9;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
  .featured_weapper {
    max-height: 300px;
    background-color: #fff;
    overflow: hidden;
    color: #666;
    padding: 0 12px;
    h2 {
      //   margin-left: 12px;
      margin-top: 11px;
      font-size: 15px;
    }
    span {
      margin-right: 4%;
      margin-top: 10px;
      display: inline-block;
      border: 1px solid #666;
      font-size: 0.7rem;
      width: 20%;
      text-align: center;
      height: 30px;
      line-height: 30px;
      border-radius: 5px;
    }
    .content {
      color: #666;
      width: 100%;
      h2 {
        margin-top: 11px;
        font-size: 15px;
      }
      .item {
        display: inline-block;
        width: 20%;
        margin-right: 4%;
        margin-top: 10px;
        display: inline-block;
        border: 1px solid #666;
        font-size: 0.7rem;
        // width: 20%;
        text-align: center;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .featured_footer {
      width: 100%;
      margin: 10px 0;
      border-top: 1px solid #e5e5e5;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      span {
        width: 20%;
        &:last-child {
          background-color: $c_red;
          color: #fff;
          border: 0;
        }
      }
    }
  }
}
.animation {
  animation: 1.5s move;
}
@keyframes move {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>