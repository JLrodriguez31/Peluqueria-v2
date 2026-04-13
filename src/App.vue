<script setup lang="ts">
import { ref } from 'vue'
import AboutSection from '@/components/AboutSection.vue'
import CaseStudiesSection from '@/components/CaseStudiesSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import JournalSection from '@/components/JournalSection.vue'
import Navbar from '@/components/Navbar.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import ReachSection from '@/components/ReachSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import VideoBackground from '@/components/VideoBackground.vue'

const showIntroContent = ref(false)

const handleIntroFinished = () => {
  showIntroContent.value = true
}
</script>

<template>
  <main class="relative min-h-screen overflow-x-hidden bg-background font-body text-foreground">
    <div
      class="relative isolate min-h-screen overflow-hidden bg-background"
      style="min-height: 100dvh"
    >
      <VideoBackground @intro-finished="handleIntroFinished" />
      <Navbar v-if="showIntroContent" />
      <HeroSection v-if="showIntroContent" />
    </div>

    <AboutSection />
    <ServicesSection />
    <CaseStudiesSection />
    <ProcessSection />
    <JournalSection />
    <ReachSection />
  </main>
</template>
