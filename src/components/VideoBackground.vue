<template>
  <div id="home" class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute inset-0" :style="{ opacity }">
      <video
        ref="videoRef"
        class="h-full w-full object-cover object-center"
        :src="videoSrc"
        muted
        playsinline
        autoplay
      />
    </div>
    <div
      v-if="isIntroFinished"
      class="absolute inset-0"
      style="
        background-image:
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.31) 28%,
            rgba(0, 0, 0, 0.05) 100%
          ),
          radial-gradient(80% 55% at 50% 12%, rgba(0, 0, 0, 0.56) 10%, rgba(0, 0, 0, 0) 70%),
          radial-gradient(70% 50% at 10% 78%, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0) 72%),
          radial-gradient(70% 50% at 92% 74%, rgba(0, 0, 0, 0.14) 0%, rgba(0, 0, 0, 0) 72%),
          linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 42%);
      "
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import bgvideo from '@/assets/bgveo4s.mp4'

const emit = defineEmits<{
  (event: 'intro-finished'): void
}>()

const FADE_DURATION = 0.5
const videoSrc = bgvideo

const videoRef = ref<HTMLVideoElement | null>(null)
const opacity = ref(0)
const isIntroFinished = ref(false)

let rafId: number | null = null

const updateOpacity = () => {
  const video = videoRef.value
  if (!video) {
    return
  }

  const duration = video.duration
  const currentTime = video.currentTime

  if (!Number.isFinite(duration) || duration <= 0) {
    opacity.value = 0
  } else if (currentTime < FADE_DURATION) {
    opacity.value = currentTime / FADE_DURATION
  } else if (duration - currentTime < FADE_DURATION) {
    opacity.value = Math.max((duration - currentTime) / FADE_DURATION, 0)
  } else {
    opacity.value = 1
  }

  rafId = requestAnimationFrame(updateOpacity)
}

const handleEnded = () => {
  const video = videoRef.value
  if (!video || isIntroFinished.value) {
    return
  }

  video.pause()

  const handleSeeked = () => {
    video.removeEventListener('seeked', handleSeeked)

    if (isIntroFinished.value) {
      return
    }

    isIntroFinished.value = true
    opacity.value = 1
    emit('intro-finished')
  }

  video.addEventListener('seeked', handleSeeked)
  video.currentTime = 0

  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
}

onMounted(() => {
  const video = videoRef.value
  if (!video) {
    return
  }

  video.addEventListener('ended', handleEnded)
  rafId = requestAnimationFrame(updateOpacity)
})

onUnmounted(() => {
  const video = videoRef.value
  if (video) {
    video.removeEventListener('ended', handleEnded)
  }

  if (rafId !== null) {
    cancelAnimationFrame(rafId)
  }
})
</script>
