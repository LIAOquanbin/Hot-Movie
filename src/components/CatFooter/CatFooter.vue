<template>
  <div id="cat_footer">
    <ul>
      <router-link to="/CatIndex" tag="li">
        <i class="iconfont icon-dianying"></i>
        <h3>电影</h3>
      </router-link>
      <router-link to="/CatCity" tag="li">
        <i class="iconfont icon-yingyuan"></i>
        <h3>影院</h3>
      </router-link>
      <router-link to="/CatPerson" tag="li">
        <i class="iconfont icon-wode"></i>
        <h3>个人</h3>
      </router-link>
    </ul>
    <!-- <keep-alive> -->
 
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
 #cat_footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ccc;
    z-index: 20;
    background-color: #fff;
    ul {
      list-style: none;
      display: flex;
      width: 100%;
      li {
        flex: 1;
        text-align: center;
        &.link-active {
          i,
          h3 {
            color: $c_red;
          }
        }
      }
      .iconfont {
        display: block;
        padding: 5px;
        font-weight: bold;
        padding-bottom: 0;
      }
      h3 {
        padding: 5px;
        color: #222;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
</style>