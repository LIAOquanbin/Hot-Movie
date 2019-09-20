import Vue from "vue";
import Vuex, { Store } from "vuex";
import mutations from './mutations'


Vue.use(Vuex);
const store = new Store({
  state: {
    nm: window.localStorage.getItem("newNum")|| '广州',
    id: window.localStorage.getItem("newId"),
    // name_list:window.localStorage.getItem("nameList")
    name:window.localStorage.getItem('nameList')|| '影院',
    city_namename:window.localStorage.getItem('city_namename') ||'全城',
    movie_name:window.localStorage.getItem('movie_name'),
    ciname_nm:window.localStorage.getItem('ciname_nm'),
    ciname_id:window.localStorage.getItem('ciname_id'),
    ciname_address:window.localStorage.getItem('ciname_address')
    // ciname_id

  },
  mutations
});

export default store

