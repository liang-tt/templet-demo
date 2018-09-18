import Vue from 'vue'
import vueRouter from 'vue-router'

import Home from '@/views/home'
import List from '@/pages/list'

Vue.use(vueRouter)

const router = new vueRouter({
  routes:[
    {
      path: "/",
      component: Home,
      redirect: "/list",
      children: [
        {
          path: "/list",
          component: List
        }
      ]
    },

  ]
});

export default router;
