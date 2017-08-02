import Vue from 'vue'
import Router from 'vue-router'
import Appin from '@/components/Appin';
import Tabone from '@/tablists/Tabone'
import Tabtwo from '@/tablists/Tabtwo'
import Tabthree from '@/tablists/Tabthree'


import taboneRouteritems1 from '@/tablists/taboneRouteritems1'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/Appin/Tabone/taboneRouteritems1"
    },
    {
      path: "/Appin",
      component: Appin,
      children:[
        {
          path: "Appin",
          redirect: 'Tabone'
        },

        {
          path: "Tabone/:id",
          component: Tabone,

        },
        {
          path: "Tabtwo",
          component: Tabtwo
        },
        {
          path: "Tabthree",
          component: Tabthree
        },
      ]

    },
  ]
})
