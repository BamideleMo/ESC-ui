<script setup lang="ts">
import type { StatementIconType } from '@/utils/types'
import { useMediaQuery } from '@vueuse/core'
const props = defineProps<{ headerText: string; text?: string; icons?: StatementIconType[] }>()
const isMobile = useMediaQuery('(max-width: 640px)')
</script>

<template>
  <div class="flex flex-wrap items-center justify-center px-12 my-2 flex-col">
    <div
      class="headerText my-6 py-2"
      :style="{ paddingInline: isMobile ? '1rem' : '8rem', fontSize: isMobile ? '13px' : '23px' }"
    >
      {{ props.headerText }}
    </div>
    <div v-if="!props.icons" class="bodyText">{{ props.text }}</div>
    <div class="flex flex-wrap bodyText mt-10" v-if="props.icons" :class="{ 'flex-col': isMobile }">
      <div
        class="flex flex-wrap items-center flex-col mx-6"
        v-for="icon in props.icons"
        :key="icon.text"
      >
        <img height="100px" :src="icon.icon" />
        <span>{{ icon.text }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.headerText {
  border: 3px #071060 solid;
  text-transform: capitalize;
  font-weight: 700;
  text-align: center;
  color: black;
  width: fit-content;
}
.bodyText {
  text-align: center;
  font-size: 20px;
  font-weight: 500;
}
</style>
