<template>
  <div class="mive_select">
    <div class="title" @click="jump">
      <i class="iconfont icon-right"></i>
      <h1>{{this.$store.state.movie_name}}</h1>
    </div>
    <div class="hall">3D巨幕IMAX厅</div>
    <div class="site">
      <div>
        <span>可选</span>
        <img src="https://i.postimg.cc/BbbWyY5D/image.png" alt />
      </div>
      <div>
        <span>已选</span>
        <img src="https://i.postimg.cc/1X2dd93h/image.png" alt />
      </div>
      <div>
        <span>不可选</span>
        <img src="https://i.postimg.cc/LXywzkds/image.png" alt />
      </div>
    </div>
    <div class="screen">
      <div class="screen_layout">
        <div>屏幕方向</div>
      </div>
    </div>
    <div class="select_list" ref="selectList">
      <div>
          <div>
              <div>

              </div>
          </div>
      </div>
    </div>
    <div class="footer">
      <h1>
        确认选座：
        <span>￥100</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 影院座位的二维数组,-1为非座位，0为未购座位，1为已选座位(绿色),2为已购座位(红色)
      seatArray: [],
      // 影院位置行数
      seatRow: 10,
      // 影院位置列数
      seatCol: 20,
      // 座位尺寸
      seatSize: "",
      //每个位置的偏移距离
      positionDistin: 0.5
    };
  },
  mounted() {
    this.initSeatArray();
  },

  methods: {
    jump() {
      this.$router.back();
    },
    // 初始化数组 创建二维数组
    initSeatArray() {
      let seatArray = Array(this.seatRow)
        .fill(0)
        .map(() => Array(this.seatCol).fill(0));
      this.seatArray = seatArray;
      this.seatSize=parseInt(parseInt(window.getComputedStyle(this.$refs.selectList).width)/this.seatCol)
      console.log( this.seatSize);
    },
    // 座位的形状
    seatshape(){
        for(var i=0;i<9;i++){
            this.seatArray[i][0]=-1
        }
        for(var i=0;i<8;i++){
            this.seatArray[i][this.seatArray[0]-1]=-1;
            this.seatArray[i][this.seatArray[0]-2]=-1;
        }
    }
  }
};
</script>

<style lang="scss">
.mive_select {
  width: 100%;
  .title {
    width: 100%;
    height: 43px;
    background:$c_red;
    color: #fff;
    text-align: center;
    position: relative;
    > i {
      position: absolute;
      left: 5px;
      top: 50%;
      margin-top: -13px;
      font-size: 22px;
    }
    h1 {
      min-width: 64px;
      display: inline-block;
      line-height: 43px;
    }
  }
  .hall {
    width: 100%;
    height: 46px;
    background-color: #fff;
    text-align: center;
    line-height: 46px;
    color: #666;
  }
  .site {
    background-color: #f3f4f6;
    color: #666;
    width: 100%;
    height: 46px;
    //    line-height: 46px;
    // text-align: center;
    display: flex;
    div {
      flex: 1;
      line-height: 46px;
      text-align: center;
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      span {
        margin-right: 5px;
      }
    }
  }
  .screen {
    width: 100%;
    height: 46px;
    background-color: #f3f4f6;
    padding: 0 10px;
    .screen_layout {
      border-top: 20px solid #dfdfdf;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      position: relative;
      > div {
        position: absolute;
        margin-left: -28px;
        color: #666;
        font-size: 14px;
        left: 50%;
        top: -16px;
      }
    }
  }
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 46px;
    line-height: 46px;
    background: $c_red;
    h1 {
      text-align: center;
      color: #fff;
      span {
        color: #fff;
      }
    }
  }
}
</style>