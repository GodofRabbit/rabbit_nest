/*
 * @Description: loading 插件
 * @Author: renlu
 * @Date: 2021-09-06 19:15:45
 * @LastEditTime: 2021-09-08 20:20:56
 * @LastEditors: renlu
 */
import { App, createApp } from 'vue'
import loading from '@/components/Loading.vue'

export default {
  install: (app: App) => {
    const dom: HTMLElement = document.createElement('div')
    dom.setAttribute('id', 'loading')
    document.body.appendChild(dom)
    const component: App = createApp(loading)
    component.mount('#loading')
    app.config.globalProperties.$loading = {
      show() {
        dom.style.display = 'unset'
      },
      hide() {
        dom.style.display = 'none'
      }
    }
  }
}
