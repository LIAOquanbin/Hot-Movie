<template>
  <div id="app">
    <!-- <div id="cat_footer"> -->
   
  <router-view/>
    <!-- </keep-alive> -->
  </div>
</template>
<script>
// import CatIndex from "@/views/Content/CatIndex";
// import CatContent from "@/views/Content/CatContent";

export default {
  data() {
    return {
      // cityList: []
    };
  },
  mounted() {
    // this.axios.get("/api/cityList").then(res => {
    //   var msg = res;
    //   this.cityList = msg;
    // });
  },
  methods: {},
  components: {
    // CatContent,
    // CatIndex
  }
};
</script>
<style lang="scss" scoped>
// #app{
  

// }

 
</style>
