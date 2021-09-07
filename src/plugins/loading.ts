/*
 * @Description: loading 插件
 * @Author: renlu
 * @Date: 2021-09-06 19:15:45
 * @LastEditTime: 2021-09-07 18:03:48
 * @LastEditors: renlu
 */
import { App, createApp } from 'vue'
import loading from '@/components/Loading.vue'

export default {
  install: (app: App) => {
    const dom = document.createElement('div')
    dom.setAttribute('id', 'loading')
    document.body.appendChild(dom)
    const component = createApp(loading)
    app.config.globalProperties.$loading = {
      show() {
        component.mount('#loading')
      },
      hide() {
        component.unmount()
      }
    }
  }
}
