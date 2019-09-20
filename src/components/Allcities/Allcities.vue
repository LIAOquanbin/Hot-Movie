<template>
  <div class="all_cities">
    <div class="all_cities_msk" @click.stop="back"></div>
    <div class="all_cities_wrapper animation">
      <div class="all_cities_title">地区</div>
      <div class="all_cities_content">
        <div class="left">
          <ul>
            <li
              v-for="(item,index) in cityList"
              :key="index"
              ref="aLi"
              @click="change(index,item)"
            >{{item.letters}}</li>
          </ul>
        </div>
        <div class="right" ref="city_list">
          <div v-for="(itemCity,i) in cityList" :key="i">
            <h2>{{itemCity.letters}}</h2>
            <ul>
              <li
                v-for="(items,index) in itemCity.list"
                :key="index"
                @click.stop="changeName(items.nm)"
              >{{items.nm}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CITY_NAME_A } from "../../store/mutation-types";
export default {
  data() {
    return {
      cityList: {},
      active: false
    };
  },
  mounted() {
    this.axios.get("/api/cityList").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        var city = res.data.data.cities;
        var { cityList } = this.getData(city);
        this.cityList = cityList;
      }
    });
  },
  methods: {
    back() {
      this.$router.push("/CatCity");
    },
    getData(city) {
      var cityList = [];
      for (var k = 0; k < city.length; k++) {
        var letter = city[k].py.substring(0, 1).toUpperCase();
        if (ischange(letter)) {
          cityList.push({
            letters: letter,
            list: [{ nm: city[k].nm, id: city[k].id }]
          });
        } else {
          for (var l = 0; l < cityList.length; l++) {
            if (cityList[l].letters === letter) {
              cityList[l].list.push({ nm: city[k].nm, id: city[k].id });
            }
          }
        }
      }
      cityList.sort((a, b) => {
        if (a.letters > b.letters) {
          return 1;
        } else {
          return -1;
        }
      });
      function ischange(letter) {
        for (var j = 0; j < cityList.length; j++) {
          if (cityList[j].letters === letter) {
            return false;
          }
        }
        return true;
      }
      return {
        cityList
      };
    },
    change(index, nm) {
      for (var i = 0; i < this.$refs.aLi.length; i++) {
        this.$refs.aLi[i].classList.remove("active");
      }
      this.$refs.aLi[index].classList.add("active");
      var city = this.$refs.city_list.getElementsByTagName("h2");
      this.$refs.city_list.scrollTop = city[index].offsetTop;
    },
    changeName(nm) {
      window.localStorage.setItem("city_name_a", nm);
      this.$store.commit(CITY_NAME_A, nm);
      this.$router.push("/CatCity");
    }
  }
};
</script>

<style lang="scss" scoped>
.all_cities {
  margin-top: 93px;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  // background: rgba(0, 0, 0, 0.3);
  .all_cities_msk {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -9;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
  .all_cities_title {
    padding: 0 10px;
    width: 100%;
    background-color: #fff;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    color: #666;
    border-bottom: 1px solid #e6e6e6;
  }
  .all_cities_content {
    max-height: 300px;
    background-color: #fff;
    display: flex;
    .left {
      flex: 0 0 94px;
      overflow: scroll;
      color: #666;
      ul {
        // padding: 0 10px;
      }
      li {
        height: 44px;
        text-align: center;
        line-height: 44px;
        font-size: 14px;
      }
      li.active {
        background-color: #f5f5f5;
        color: $c_red;
      }
    }
    .right {
      flex: 1;
      background: #f5f5f5;
      overflow: scroll;
      h2 {
        height: 45px;
        line-height: 45px;
        padding: 0 0 0 25px;
      }
      ul {
        li {
          height: 45px;
          line-height: 45px;
          padding: 0 0 0 25px;
        }
        // li.active {
        //   background-color: #f5f5f5;
        //   color: $c_red;
        // }
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