<template>
  <div>
    <div class="cat_header">
      <h1>{{name}}</h1>
    </div>
    <!-- <CatContent /> -->
  </div>
</template>
<script>
// import CatContent from '../../views/Content/CatContent'

export default {
  // 添加name ，放便好调试。
  name: "CatHeader",
  props: {
    name: {
      type: String,
      default: "猫眼电影"
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.cat_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $c_red;
  text-align: center;
 
  z-index: 50;
  padding: 18px 0;
  h1 {
    color: #fff;
    font-size: 18px;
    width: 200px;
     margin:0 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 200;
  }
}
</style>