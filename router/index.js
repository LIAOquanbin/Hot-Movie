import Vue from "vue";
import Router from "vue-router";
// import CatContent from '@/views/Content/CatContent'
import CatIndex from "@/views/Content/CatIndex";
import nowPlay from "../src/components/nowPlay/NowPlay";
// import CatPerson from '@/views/Content/CatPerson'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/CatIndex",
      name: "CatIndex",
      component: CatIndex,
      redirect: "/CatIndex/nowPlay",
      children: [
        {
          path: "nowPlay",
          name: "nowPlay",
          component: nowPlay
        },
        {
          path: "cityList",
          component: () => import("@/components/cityList/CityList")
        },
        {
          path: "search",
          component: () => import("@/components/search/Search")
        },
        {
          path: "willPlay",
          component: () => import("@/components/willPlay/WillPlay")
        },
        {
          path: "Particulars/1/:id",
          components: {
            //一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 components 配置 (带上 s)：
            // 命名视图 默认为 default
            default: () => import("@/components/nowPlay/NowPlay"),
            catRouter: () => import("@/views/particulars/Particulars")
          },
          // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项 用于路由之间传值
          props: {
            catRouter: true
          }
        },
        {
          path: "Particulars/2/:id",
          components: {
            default: () => import("@/components/willPlay/WillPlay"),
            catRouter: () => import("@/views/particulars/Particulars")
          },
          props: {
            catRouter: true
          }
        },
        {
          path: "Particulars/3/:id",
          components: {
            default: () => import("@/components/search/Search"),
            catRouter: () => import("@/views/particulars/Particulars")
          },
          props: {
            catRouter: true
          }
        }
      ]
    },

    {
      path: "/CatCity",
      name: "CatCity",
      component: () => import("@/views/city/CatCity"),
      children: [
        {
          path: "brand",
          component: () => import("../src/components/brand/Brand")
        },
        {
          path: "allcities",
          component: () => import("../src/components/Allcities/Allcities")
        },
        {
          path: "featured",
          component: () => import("../src/components/Featured/Featured")
        }
        // {
        //   path: "Particulars/4/:id",
        //   components: {
        //     default: () => import("@/components/Cinemadetails/Cinemadetails"),
        //     catRouter: () => import("@/views/particulars/Particulars")
        //   },
        //   props: {
        //     catRouter: true
        //   }
        // }
      ]
    },
    {
      path: "/CatPerson",
      name: "CatPerson",
      component: () => import("@/views/CatPerson/CatPerson")
    },
    {
      path: "/moveSelect",
      component: () => import("@/components/moveSelect/MoveSelect")
    },
    {
      path: "/cinemadetails",
      component: () => import("../src/components/Cinemadetails/Cinemadetails")
      // children: []
    },
    {
      path: "/Particulars/:id",
      component: () => import("@/views/particulars/Particulars")
    },
    {
      path: "/",
      redirect: "/CatIndex/nowPlay"
    }
    // {
    //   path: "/CatIndex",
    //   redirect: "/CatIndex/nowPlay"
    // }
  ],
  linkActiveClass: "link-active"
});
