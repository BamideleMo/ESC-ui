<script setup lang="ts">
import { ref } from 'vue'

const showPlay = ref(false)

const props = defineProps<{ image: string; isVideo: boolean; title: string; description: string }>()
</script>

<template>
  <div class="flex flex-wrap flex-col mr-10 items-center">
    <div
      id="thumbnail"
      class="flex flex-wrap items-center"
      style="position: relative"
      @mouseenter="
        () => {
          showPlay = true
        }
      "
      @mouseleave="
        () => {
          showPlay = false
        }
      "
    >
      <img :src="props.image" class="rounded" style="height: 130px" />
      <div
        style="width: 100%; position: absolute; justify-content: space-around"
        class="flex items-center"
      >
        <img
          v-if="props.isVideo && showPlay"
          id="play-button"
          style="width;: 50px; height: 50px"
          src="/assets/images/play_icon.png"
        />
      </div>
    </div>
    <div style="color: #071060" class="mt-5">{{ props.title }}</div>
    <div style="color: red; font-size: 13px;" >{{ props.description }}</div>
  </div>
</template>
