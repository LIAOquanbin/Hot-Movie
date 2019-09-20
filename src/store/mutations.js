import *as types from "./mutation-types"
export default {
  [types.CITY_NAME](state, parameter) {
    state.nm = parameter.nm
    state.id = parameter.id
  },
  [types.CINEMA_NAME](state,name){
   state.name=name
    // console.log(name)
  },
  [types.CITY_NAME_A](state,city_namename){
    state.city_namename=city_namename
     // console.log(name)
   },
   [types.MOVIE_NAME](state,movie_name){
    state.movie_name=movie_name
   },
   [types.CINAME_NAME](state,ciname){
    state.ciname_nm=ciname.nm
    state.ciname_id=ciname.id
    state.ciname_address=ciname.address
   }
};
