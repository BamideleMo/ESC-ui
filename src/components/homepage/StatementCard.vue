<script setup lang="ts">
import type { StatementIconType } from '@/utils/types'
const props = defineProps<{ headerText: string; text?: string; icons?: StatementIconType[] }>()
</script>

<template>
  <div class="flex flex-wrap items-center justify-center px-12 my-2 flex-col">
    <div class="headerText my-6 py-2">{{ props.headerText }}</div>
    <div v-if="!props.icons" class="bodyText">{{ props.text }}</div>
    <div class="flex flex-wrap bodyText mt-10" v-if="props.icons">
      <div
        class="flex flex-wrap items-center flex-col mx-6"
        v-for="icon in props.icons"
        :key="icon.text"
      >
        <img
          height="100px"
          :src="icon.icon"
        />
        <span>{{ icon.text }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.headerText {
  padding-inline: 8rem;
  border: 3px #071060 solid;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 23px;
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
