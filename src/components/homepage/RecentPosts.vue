<script setup lang="ts">
import type { PostType } from '@/utils/types'
import { useMediaQuery } from '@vueuse/core'
import PostsContainer from './PostsContainer.vue'
const isMobile = useMediaQuery('(max-width: 640px)')

const posts: PostType[] = [
  {
    image: '/assets/images/jaken.png',
    description: 'Sunday 20th November 2022',
    isVideo: true,
    title: 'Sermon by Pst. Jakhen'
  },
  {
    image: '/assets/images/hike.png',
    description: 'Saturday 19th November 2022',
    isVideo: false,
    title: 'Youth Hike'
  },
  {
    image: '/assets/images/rev g.png',
    description: 'Monday 14th November 2022',
    isVideo: true,
    title: 'From the Senior Pastor’s Desk'
  },
  {
    image: '/assets/images/worship.png',
    description: 'Friday 11th November 2022',
    isVideo: false,
    title: 'Worship'
  }
]
</script>

<template>
  <div class="flex justify-center flex-col">
    <div class="recent ml-5" :style="{ fontSize: isMobile ? '20px' : '30px' }">RECENT POSTS</div>
    <div class="flex flex-row mx-12 mb-10" :class="{ 'flex-col': isMobile }">
      <PostsContainer
        v-for="post in posts"
        class="mb-3"
        :title="post.title"
        :image="post.image"
        :description="post.description"
        :isVideo="post.isVideo"
        :key="post.title"
      />
    </div>
  </div>
</template>

<style>
.recent {
  font-weight: 800;
  margin-bottom: 2rem;
  margin-left: 2rem;
}
</style>
