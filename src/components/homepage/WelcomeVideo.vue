<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import { ref, onMounted } from 'vue'

const vidRef = ref<HTMLVideoElement>()
const isMobile = useMediaQuery('(max-width: 640px)')

onMounted(() => {
  vidRef.value?.play()
})
</script>

<template>
  <div class="video-container">
    <div class="video-mask"></div>
    <video ref="vidRef" src="/assets/videos/bg_video.mp4" muted class="" loop></video>
    <div class="video-control" :style="{ top: isMobile ? '5rem' : '15rem' }">
      <h1 :style="{ fontSize: isMobile ? '1rem' : '' }" class="text-center">WELCOME HOME</h1>
    </div>
  </div>
</template>

<style>
.video-container {
  display: grid;
  position: relative;
  place-items: center;
}
.video-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: black;
  opacity: 0.6;
}
.video-control {
  display: grid;
  place-items: center;
  z-index: 1000;
  color: white;
  position: absolute;
  grid-area: 1 / 1 / 2 / 2;
}
.video-control > h1 {
  z-index: inherit;
  font-weight: 800;
  font-size: 96px;
}
</style>
