<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isMobile = useMediaQuery('(max-width: 640px)')
</script>

<template>
  <div class="grid" style="position: relative">
    <img src="/assets/images/church_activities.png" id="img" style="width: 100vw" />
    <div class="layover"></div>
    <div class="flex flex-center flex-col text-center" style="z-index: 1000; padding-block: 2rem">
      <h3
        style="color: #dadbe4; font-weight: 800"
        :style="{ fontSize: isMobile ? '12px' : '22px' }"
      >
        Worship with us on
      </h3>
      <h1 style="color: #fff; font-weight: 900" :style="{ fontSize: isMobile ? '28px' : '35px' }">
        Sunday <br />7 AM and 9 AM
      </h1>
      <h3
        class="rounded-2xl py-1 mt-4"
        :style="{ fontSize: isMobile ? '12px' : '22px' }"
        style="color: white; background-color: gray"
      >
        Our Weekly Activities
      </h3>
      <br />
      <h3
        class="rounded-2xl py-1"
        style="color: white; background-color: gray"
        :style="{ fontSize: isMobile ? '12px' : '22px' }"
      >
        2023 Calendar
      </h3>
    </div>
  </div>
</template>

<style>
.grid {
  display: grid;
  place-items: center;
  padding-block: 1rem;
}
.grid > * {
  grid-area: 1/1;
}
.layover {
  height: 100%;
  width: 100%;
  z-index: 100;
  background-color: black;
  opacity: 0.4;
  position: absolute;
}
</style>
