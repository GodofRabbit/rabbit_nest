/*
 * @Description: 路由配置
 * @Author: renlu
 * @Date: 2021-07-10 18:41:24
 * @LastEditTime: 2021-07-27 23:54:51
 * @LastEditors: renlu
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
