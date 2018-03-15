import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Overview from '@/components/view/Overview'
import About from '@/components/view/About'
import Blog from '@/components/view/Blog'
import Content from '@/components/view/Content'

import Test from '@/components/view/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/home',
      component: Overview
    },
    {
      path: '/content',
      component: Content
    },
    {
      path: '/*',
      redirect: '/home'
    },
  ]
})
