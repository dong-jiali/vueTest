import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import nav from '@/components/menu'
import layout from '@/components/layout'
/* */

// import test from '@/view/test.vue'
/* */

// import about from '@/view/about.vue'
/**/

import news from '@/view/news.vue'
// import { resolve } from 'url';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '新闻',
      component: layout,
      redirect: '/news',
      children: [
        {
          path: '/news',
          name: '新闻',
          component: news
        }
      ]
    },
    {
      path: '/home',
      name: '首页',
      component: layout,
      redirect: '/test',
      meta: { keepAlive: true },
      children: [
        {
          path: '/test',
          name: '测试',
          // component: test
          component: resolve => {
            // 懒加载
            require(['@/view/test.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '/about',
      name: '关于我们',
      component: layout,
      meta: { keepAlive: true },
      redirect: '/about',
      children: [
        {
          path: '/about',
          name: '关于我们',
          // component: about
          component: resolve => {
            // 懒加载
            require(['@/view/about.vue'], resolve)
          }
        }
      ]
    }
    // {
    //   path: '/test',
    //   name: '测试',
    //   component: test
    // },
    // {
    //   path: '/test2',
    //   name: '测试2',
    //   component: test2
    // }
  ]
})
