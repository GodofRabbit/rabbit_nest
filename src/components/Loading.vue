<!--
 * @Description: loading 组件
 * @Author: renlu
 * @Date: 2021-09-06 19:15:38
 * @LastEditTime: 2021-09-07 19:38:21
 * @LastEditors: renlu
-->
<template>
  <div class="rotate-wrap">
    <div class="front" style="transform: translateZ(2px)"></div>
    <div class="reverse"></div>
  </div>
  <div class="loading-dot">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
:global(#loading) {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#loading {
  .rotate-wrap {
    transform-style: preserve-3d;
    animation: rotate 3s linear infinite;
    height: 100vh;
    .front,
    .reverse {
      position: absolute;
      top: -100px;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100px;
      height: 100px;
      margin: auto;
      border-radius: 150px;
      box-shadow: 9px 9px 18px #b8b8b8, -9px -9px 18px transparent;
      background-size: cover;
      border-radius: 50%;
    }

    .front {
      background-image: url('@/assets/img/rabbit.jpg');
    }
    .reverse {
      background-image: url('@/assets/img/rabbit-r.jpg');
    }
  }

  .loading-dot {
    position: absolute;
    top: calc(50% + 20px);
    width: 100%;
    text-align: center;
    span {
      display: inline-block;
      vertical-align: middle;
      width: 0.6em;
      height: 0.6em;
      margin: 0.19em;
      background: #007db6;
      border-radius: 0.6em;
      animation: loading 1s infinite alternate;
    }

    span:nth-of-type(2) {
      background: #008fb2;
      animation-delay: 0.2s;
    }
    span:nth-of-type(3) {
      background: #009b9e;
      animation-delay: 0.4s;
    }
    span:nth-of-type(4) {
      background: #00a77d;
      animation-delay: 0.6s;
    }
    span:nth-of-type(5) {
      background: #00b247;
      animation-delay: 0.8s;
    }
    span:nth-of-type(6) {
      background: #5ab027;
      animation-delay: 1s;
    }
    span:nth-of-type(7) {
      background: #a0b61e;
      animation-delay: 1.2s;
    }
  }
}

@keyframes loading {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
