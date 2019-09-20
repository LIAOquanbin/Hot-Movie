<template>
  <div class="brand_msk" @click="back">
    <!-- <Loaidng v-if="isLoaidng" /> -->
    <div class="brand_layout animation">
      <div class="tab_content">
        <ul>
          <li v-for="(items,index) in cinemaName" :key="index" @click="change(items.nm[0])">
            <span class="first_child">{{items.nm[0]}}</span>
            <span>{{index+1}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { CINEMA_NAME } from "../../store/mutation-types";
export default {
  data() {
    return {
      cinemaName: {},
      // isLoaidng: true
      // str: []
    };
  },
  mounted() {
    this.axios.get("/api/cinemaList?cityId=10").then(res => {
      let msg = res.data.msg;
      var str = [];
      if (msg === "ok") {
        var cinema_Name = res.data.data.cinemas;
        // this.isLoaidng = false;
        for (var i = 0; i < cinema_Name.length; i++) {
          str.push({ nm: cinema_Name[i].nm.split(/\（.*?\）/) });
        }
        this.cinemaName = str;
      }
    });
  },
  methods: {
    back() {
      this.$router.push('/CatCity')
    },
    change(nm) {
      window.localStorage.setItem("city_name", nm);
      this.$store.commit(CINEMA_NAME, nm);
       this.$router.push('/CatCity')
    }
  }
};
</script>

<style lang="scss" scoped>
.brand_msk {
  margin-top: 93px;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  /* padding-top: 91px; */
}
.brand_layout {
  width: 100%;
  background-color: #fff;
  overflow: auto;
  z-index: 9;
  .tab_content {
    // padding: 0 10px;
    height: 40%;
  }
  ul {
    width: 100%;
    padding: 0 10px;
    overflow: scroll;
    max-height: 300px;
    li {
      line-height: 44px;
      height: 44px;
      border-bottom: 1px solid #e5e5e5;
      color: #333;
    }

    span {
      display: inline-block;
 
      overflow: hidden;
      &:last-child {
        width: 30%;
        text-align: right;
      }
    }
    span.first_child {
      width: 70%;
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