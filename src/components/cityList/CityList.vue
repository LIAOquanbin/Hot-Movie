<template>
  <div class="city_body">
    <Loaidng v-if="isLoading" />
    <div v-else class="menu" ref="menu">
      <div class="city_list" ref="city_list">
        <div class="city_hot" ref="city_hot">
          <h2 class="letter">热门城市</h2>
          <ul>
            <li
              v-for="items in hotList"
              :key="items.id"
              @touchstart.stop="cityName(items.id,items.nm)"
            >{{items.nm}}</li>
          </ul>
        </div>
        <div class="city_sort" ref="city_menu">
          <div v-for="(itemCity,i) in cityList" :key="i">
            <h2>{{itemCity.letters}}</h2>
            <ul>
              <li
                v-for="(items,index) in itemCity.list"
                :key="index"
              >
                <span @click.stop="cityName(items.id,items.nm)">{{items.nm}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="city_index">
      <ul>
        <li
          v-for="(item,index) in cityList"
          :key="item.index"
          @touchstart="corresponding(index)"
        >{{item.letters}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { CITY_NAME } from "../../store/mutation-types";
import Bscrool from "better-scroll";
export default {
  name: "cityList",
  data() {
    return {
      cityList: {},
      hotList: {},
      isLoading: true
    };
  },
  components: {},
  mounted() {
    this.axios.get("/api/cityList").then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        var city = res.data.data.cities;
        var { cityList, hotList } = this.getData(city);
        this.hotList = hotList;
        this.cityList = cityList;
        this.isLoading = false;
        this.$nextTick(() => {
          this.scrool = new Bscrool(this.$refs.menu, { click: true });
        });
      }
    });
  },
  methods: {
    getData(city) {
      var cityList = [];
      var hotList = [];
      for (var i = 0; i < city.length; i++) {
        if (city[i].isHot === 1) {
          hotList.push(city[i]);
        }
      }
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
        hotList,
        cityList
      };
    },
    cityName(id, nm) {
      this.$store.commit(CITY_NAME, { id, nm });
      window.localStorage.setItem("newNum", nm);
      window.localStorage.setItem("newId", id);
      this.$router.push("/CatIndex/nowPlay");
    },
    corresponding(index) {
      var cityHot = this.$refs.city_menu.getElementsByTagName("h2");
      this.$refs.city_list.parentNode.scrollTop = cityHot[index].offsetTop;
    }
  }
};
</script>
<style lang="scss" scoped>
.city_body {
  width: 100%;
  padding: 94px 0px 43px 0px;
  background: #fff5f0;
}
.menu {
  height: 100vh;
  overflow: hidden;
  transition: all 0.5s linear;
}
.city_list {
  margin-top: 20px;
  .city_hot {
    width: 100%;
    h2 {
      width: 100%;
      padding-left: 15px;
      line-height: 30px;
      font-size: 14px;
      background: #f0f0f0;
      font-weight: normal;
    }
    ul {
      width: 100%;
      list-style: none;
      padding: 5px;
      li {
        width: 28%;
        float: left;
        text-align: center;
        background-color: #fff;
        margin: 15px 5px 0 5px;
        height: 33px;
        line-height: 33px;
      }
    }
    ul:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .city_sort {
    margin-top: 20px;

    h2 {
      padding-left: 10px;
      line-height: 30px;
      font-size: 14px;
      background: #f0f0f0;
      font-weight: normal;
    }
    ul {
      padding-left: 10px;
      margin-top: 10px;
      li {
        line-height: 30px;
      }
    }
  }
}
.city_index {
  position: fixed;
  top: 94px;
  right: 0px;
  display: flex;
  width: 20px;
  height: 100%;
  background-color: #fff;
  font-size: 14px;
  text-align: center;
  ul {
    width: 100%;
    margin: 10px 0;
    li {
      margin: 5px 3px;
    }
  }
}
</style>