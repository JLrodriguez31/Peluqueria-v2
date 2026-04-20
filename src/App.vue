<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AboutSection from '@/components/AboutSection.vue'
import CaseStudiesSection from '@/components/CaseStudiesSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import LocalSection from '@/components/LocalSection.vue'
import Navbar from '@/components/Navbar.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import ReachSection from '@/components/ReachSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import VideoBackground from '@/components/VideoBackground.vue'
import WhatsAppFloat from '@/components/WhatsAppFloat.vue'

const showIntroContent = ref(false)
const showWhatsApp = ref(false)
const isXlViewport = ref(false)

const XL_BREAKPOINT = 1000

const syncViewport = () => {
  isXlViewport.value = window.innerWidth >= XL_BREAKPOINT
}

const handleIntroFinished = () => {
  showIntroContent.value = true
  showWhatsApp.value = true
}

onMounted(() => {
  syncViewport()
  window.addEventListener('resize', syncViewport)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', syncViewport)
})
</script>

<template>
  <main
    class="snap-container relative min-h-screen overflow-x-hidden bg-background font-body text-foreground"
  >
    <div
      class="snap-section relative isolate min-h-screen overflow-hidden bg-background"
      style="min-height: 100dvh"
    >
      <VideoBackground @intro-finished="handleIntroFinished" />
      <Navbar v-if="showIntroContent" />
      <HeroSection v-if="showIntroContent" />
    </div>
    <LocalSection class="snap-section" />
    <ServicesSection class="snap-section" />
    <CaseStudiesSection class="snap-section" />
    <template v-if="isXlViewport">
      <section class="snap-section flex h-screen flex-col justify-center bg-black">
        <AboutSection class="pb-0!" />
        <ProcessSection class="pt-10" />
      </section>
    </template>
    <template v-else>
      <AboutSection class="snap-section" />
      <ProcessSection class="snap-section" />
    </template>
    <ReachSection class="snap-section" />
    <WhatsAppFloat :visible="showWhatsApp" />
  </main>
</template>
