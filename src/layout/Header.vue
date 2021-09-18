<!--
 * @Description: 头部
 * @Author: renlu
 * @Date: 2021-09-08 18:14:58
 * @LastEditTime: 2021-09-08 19:49:01
 * @LastEditors: renlu
-->
<template>
  <header>
    <div><img src="@/assets/img/bilibili-autumn-1.png" /></div>
    <div><img src="@/assets/img/bilibili-autumn-2.png" /></div>
    <div><img src="@/assets/img/bilibili-autumn-3.png" /></div>
    <div><img src="@/assets/img/bilibili-autumn-4.png" /></div>
    <div><img src="@/assets/img/bilibili-autumn-5.png" /></div>
    <div><img src="@/assets/img/bilibili-autumn-6.png" /></div>
  </header>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  const images = document.querySelectorAll('header > div > img ') as NodeListOf<HTMLElement>
  const elRef = document.querySelector('header') as HTMLElement
  elRef.addEventListener('mousemove', (e: MouseEvent) => {
    console.log(1212)
    let percentage = e.clientX / window.outerWidth
    let offset = 10 * percentage
    let blur = 20

    for (let [index, image] of images.entries()) {
      offset *= 1.3

      let blurValue = Math.pow(index / images.length - percentage, 2) * blur

      image.style.setProperty('--offset', `${offset}px`)
      image.style.setProperty('--blur', `${blurValue}px`)
    }
  })
})
</script>

<style lang="scss" scoped>
header {
  height: 160px;
  position: relative;
  overflow: hidden;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    --offset: 0px;
    --blur: 0px;

    img {
      display: block;
      width: 110%;
      height: 100%;
      object-fit: cover;
      transform: translatex(var(--offset));
      filter: blur(var(--blur));
    }
  }
}
</style>
