import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import nav from '@/components/menu'
import layout from '@/components/layout'
import test from '@/view/test.vue'
import about from '@/view/about.vue'
import news from '@/view/news.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: layout,
      redirect: '/test',
      children: [
        {
          path: '/test',
          name: '测试',
          component: test
        }
      ]
    },
    {
      path: '/news',
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
      path: '/about',
      name: '关于我们',
      component: layout,
      redirect: '/about',
      children: [
        {
          path: '/about',
          name: '关于我们',
          component: about
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
