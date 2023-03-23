<script setup lang="ts">
import type { StatementType } from '@/utils/types'
import { useMediaQuery } from '@vueuse/core';
import StamentCard from './StatementCard.vue'

const isMobile = useMediaQuery('(max-width: 640px)')

const staments: StatementType[] = [
  {
    text: 'ECWA Seminary Church is a transformed community of believers active in Biblical Culture of holistic ministry.',
    headerText: 'VISION STATEMENT'
  },
  {
    text: 'ECWA Seminary Church Exists to build a community of believers in Christ through sound teaching and preaching of God’s word and providing opportunity for holistic ministry to strengthen believers and to reach the unsaved to the glory of God. (2 Timothy 4:2, Mark 12:29-31, Matthew 28:18-20, Colossians 1:28). ',
    headerText: 'MISSION STATEMENT'
  },
  {
    headerText: 'OUR CORE VALUES',
    icons: [
      { icon: '/assets/images/family.png', text: 'Family' },
      { icon: '/assets/images/discipleship.png', text: 'Discipleship' },
      { text: 'Missions', icon: '/assets/images/missions.png' }
    ]
  }
]
</script>

<template>
  <div :class="{'my-12': !isMobile}">
    <StamentCard
      v-for="statement in staments"
      :text="statement.text"
      :header-text="statement.headerText"
      :key="statement.headerText"
      :icons="statement.icons"
    />

  </div>
</template>
<style></style>
