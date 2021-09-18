/*
 * @Description: 路由配置
 * @Author: renlu
 * @Date: 2021-07-10 18:41:24
 * @LastEditTime: 2021-09-08 18:31:46
 * @LastEditors: renlu
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Root from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    component: Root,
    children: []
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
