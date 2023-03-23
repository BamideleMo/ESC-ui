<script setup lang="ts">
import type { LinkType } from '@/utils/types'
import { useMediaQuery } from '@vueuse/core'
import { ref } from 'vue'
import MenuIcon from '../icons/MenuIcon.vue'
import { RouterLink } from 'vue-router'
import Button from './CustomButton.vue'

const isMobile = useMediaQuery('(max-width: 640px)')
const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')

const showMenu = ref(false)

const links: LinkType[] = [
  {
    name: 'About us',
    link: '/aboutus',
    hasChildrem: true,
    children: [{ name: 'Ministries', link: '/ministries', hasChildrem: true }]
  },
  { name: 'Ministries', link: '/ministries', hasChildrem: true },
  {
    name: 'Events',
    link: '/events',
    hasChildrem: true,
    children: [{ name: 'Give', link: '/give', hasChildrem: false }]
  },
  { name: 'Sermons', link: '/sermons', hasChildrem: true },
  { name: 'Resources', link: '/resources', hasChildrem: true },
  { name: 'Give', link: '/give', hasChildrem: false }
]
</script>

<template>
  <header class="bg-white border-gray-200 rounded dark:bg-gray-900 py-5 bb">
    <nav class="flex flex-wrap justify-between px-5 flex-row">
      <RouterLink to="/" class="flex items-center">
        <div class="rounded-full border-current border-2 p-2 self-center flex mr-3">
          <img class="h-6 sm:h-9" alt="ESC Logo" src="/assets/images/logo.png" />
        </div>
        <span
          class="self-center font-semibold whitespace-nowrap dark:text-white"
          style="color: #071060"
          :class="{ 'text-sm': isMobile, 'text-xl': !isMobile }"
          >ECWA SEMINARY CHURCH</span
        >
      </RouterLink>
      <button v-if="isMobile" @click="showMenu = !showMenu">
        <MenuIcon />
      </button>
      <div
        v-if="showMenu || !isMobile"
        :class="{ hidden: isMobile && !showMenu, fixed: isMobile }"
        :style="{ right: isMobile ? 0 : '', top: isMobile ? '3rem' : '', zIndex: 1000, backgroundColor: isPreferredDark? 'grey': 'white' }"
        class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <Button
          v-for="item in links"
          :isFromNav="true"
          :key="item.name"
          :to="item.link"
          :link-text="item.name"
          :isDropDown="item.hasChildrem"
          :children="item.children"
        />
      </div>
    </nav>
  </header>
</template>

<style></style>
