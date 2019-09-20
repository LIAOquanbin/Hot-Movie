<template>
  <div class="cinema_layout">
    <ul>
      <router-link to="/CatCity/allcities" tag="li">
        {{this.$store.state.city_namename}}
        <i class="iconfont icon-lower-triangle"></i>
      </router-link>
      <router-link to="/CatCity/brand" tag="li" >
        {{this.$store.state.name}}
        <i class="iconfont icon-lower-triangle"></i>
      </router-link>
      <router-link to='/CatCity/featured' tag="li">
        特色
        <i class="iconfont icon-lower-triangle"></i>
      </router-link>
    </ul>
        <router-view></router-view>
    <Cinema />

  </div>
</template>
<script>
import Cinema from "@/components/Cinema/Cinema";
export default {
  data() {
    return {
      ischange:true
    }
  },
  components: {
    Cinema
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
.cinema_layout {
  width: 100%;

  ul {
    position: fixed;
    top: 53px;
    left: 0;
    display: flex;
    width: 100%;
    background-color: #fff;
    height: 40px;
    line-height: 30px;
    z-index: 30;
    border-bottom: 1px solid #e6e6e6;
    li {
      font-size: 12px;
      flex: 1;
      text-align: center;
      color: #666;
      font-weight: 500;
      padding: 5px;
      border-right: 1px solid #f2f2f2;
      overflow: hidden;
      &:last-child{
        border-right: 0;
      }
      &.link-active{
        color:$c_red;
      }
    }
  }
}
</style>