<script setup lang="ts">
import type { LinkType } from '@/utils/types'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const openDropDown = ref(false)
const parentRef = ref<HTMLButtonElement | null>()
const positions = ref<{ right: string; left: string; top: string; marginLeft?: string }>({
  right: '0px',
  left: '0px',
  top: '0px'
})

const props = defineProps<{
  linkText: string
  to?: string
  isDropDown?: boolean,
  children?: LinkType[],
  isInDropDown?: boolean,
  click?: (payload: MouseEvent) => void
}>()

onMounted(() => {
  const computed = parentRef.value?.getBoundingClientRect()
  if (computed) {
    positions.value = {
      top: `${computed!.top}px`,
      left: `${computed!.left}px`,
      right: `${computed!.right}px`,
      marginLeft: '-.9rem'
    }
  }
})
</script>

<template>
  <RouterLink
    v-if="props.to && !props.isDropDown"
    :to="props.to"
    class="block py-2 pl-3 pt-3 pr-4 text-white text-primary mt-2 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
    :class="{ 'font-bold': !props.isInDropDown }"
    >{{ props.linkText }}
  </RouterLink>
  <button
    ref="parentRef"
    :data-dropdown-toggle="props.linkText"
    v-else-if="props.to && props.isDropDown"
    class="flex justify-content block py-2 pl-3 pr-4 mt-2 text-white text-primary rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
    :class="{ 'font-bold': !props.isInDropDown }"
    @click="
      (event) => {
        if (props.click) {
          props.click(event)
        } else {
          openDropDown = !openDropDown
        }
      }
    "
  >
    {{ props.linkText }}
    <svg
      class="w-4 h-4 ml-2 mt-1"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        v-if="props.isDropDown"
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>
  <template v-if="openDropDown">
    <div
      :id="props.linkText"
      class="z-10 font-normal bg-white divide-y pl-2 mt-2 divide-gray-100 rounded-md shadow w-44 dark:bg-gray-700 dark:divide-gray-600 fixed mt-3"
      :style="{ ...positions }"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-400"
        aria-labelledby="dropdownLargeButton"
      >
        <li>
          <CustomButton
            v-for="link in props.children"
            :key="link.name"
            :to="link.link"
            :link-text="link.name"
            :isInDropDown="true"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          />
        </li>
      </ul>
    </div>
  </template>
</template>