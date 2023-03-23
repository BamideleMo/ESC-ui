<script setup lang="ts">
import type { LinkType } from '@/utils/types'
import { RouterLink } from 'vue-router'
import Button from './CustomButton.vue'

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
    <nav class="flex flex-wrap justify-between px-5">
      <RouterLink to="/" class="flex items-center">
        <div class="rounded-full border-current border-2 p-2 self-center flex mr-3">
          <img class="h-6 sm:h-9" alt="ESC Logo" src="/assets/images/logo.png" />
        </div>
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          style="color: #071060"
          >ECWA SEMINARY CHURCH</span
        >
      </RouterLink>
      <div
        class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <Button
          v-for="item in links"
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
