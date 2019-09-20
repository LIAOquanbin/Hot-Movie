<template>
  <div class="movie_header">
    <CatHeader />
    <div class="content">
      <ul>
        <router-link to="/CatIndex/cityList" tag="li">
        {{this.$store.state.nm}}
          <span class="iconfont icon-lower-triangle"></span>
        </router-link>
        <router-link to="/CatIndex/nowPlay" tag="li">正在热映</router-link>
        <router-link to="/CatIndex/willPlay" tag="li">即将上映</router-link>
        <router-link to="/CatIndex/search" tag="li">
          <span class="iconfont icon-sousuo search"></span>
        </router-link>
      </ul>
      <router-view></router-view>
    </div>
    <CatFooter />
    <!-- 命名视图 -->
    <router-view name="catRouter"></router-view>
  </div>
</template>
<script>
import CatHeader from "@/components/CatHeader/CatHeader";
import CatFooter from "@/components/CatFooter/CatFooter";

// import CityList from '@/components/cityList/CityList'
export default {
  props: {},
  data() {
    return {};
  },
  methods: {
    // cityName(nm, id) {
    //   this.city_name.push(nm, id);
    // }
  },
  components: {
    CatHeader,
    CatFooter

    // CityList
  }
};
</script>
<style lang="scss" scoped>
.movie_header {
  width: 100%;
  position: relative;
  background-color: #fff;

  ul {
    position: fixed;
    top: 53px;
    left: 0;
    width: 100%;
    padding: 0 4px;
    display: flex;
    text-align: center;
    background-color: #fff;
    height: 40px;
    line-height: 30px;
    z-index: 30;
    border-bottom: 1px solid #e6e6e6;
    li {
      flex: 1;
      color: #666;
      font-weight: 500;
      height: 40px;
      line-height: 40px;
      margin-right: 4px;
      font-size: 13px;
      &:last-child{
        margin-right: 0;
      }
      .search {
        font-size: 24px;
        color: $c_red;
      }
    }
    li.link-active {
      color: $c_red;
      border-bottom: 2px solid $c_red;
    }
  }
}
</style>