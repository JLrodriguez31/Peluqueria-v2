<template>
  <div id="home" class="pointer-events-none absolute inset-0 overflow-hidden">
    <div class="absolute inset-0">
      <video
        ref="introVideoRef"
        class="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300"
        :src="introVideoSrc"
        :style="{ opacity: introOpacity }"
        muted
        playsinline
        autoplay
      />
      <video
        ref="loopVideoRef"
        class="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300"
        :src="loopVideoSrc"
        :style="{ opacity: loopOpacity }"
        muted
        playsinline
        preload="auto"
        loop
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
import seedance2 from '@/assets/afterbg.mp4'

const emit = defineEmits<{
  (event: 'intro-finished'): void
}>()

const FADE_DURATION = 0.5

const introVideoSrc = bgvideo
const loopVideoSrc = seedance2

const introVideoRef = ref<HTMLVideoElement | null>(null)
const loopVideoRef = ref<HTMLVideoElement | null>(null)
const introOpacity = ref(0)
const loopOpacity = ref(0)
const isIntroFinished = ref(false)

let rafId: number | null = null

const updateIntroOpacity = () => {
  const video = introVideoRef.value
  if (!video) {
    return
  }

  const duration = video.duration
  const currentTime = video.currentTime

  if (!Number.isFinite(duration) || duration <= 0) {
    introOpacity.value = 0
  } else if (currentTime < FADE_DURATION) {
    introOpacity.value = currentTime / FADE_DURATION
  } else {
    introOpacity.value = 1
  }

  rafId = requestAnimationFrame(updateIntroOpacity)
}

const handleEnded = async () => {
  const loopVideo = loopVideoRef.value
  if (!loopVideo || isIntroFinished.value) {
    return
  }

  isIntroFinished.value = true
  emit('intro-finished')

  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }

  loopVideo.currentTime = 0
  try {
    await loopVideo.play()
  } catch {
    // Ignore autoplay rejections; user interaction can resume playback.
  }

  loopOpacity.value = 1
  introOpacity.value = 0
}

onMounted(() => {
  const introVideo = introVideoRef.value
  const loopVideo = loopVideoRef.value
  if (!introVideo) {
    return
  }

  introVideo.addEventListener('ended', handleEnded)
  rafId = requestAnimationFrame(updateIntroOpacity)

  // Force preload of the second video so switching does not flash black in production.
  loopVideo?.load()
})

onUnmounted(() => {
  const introVideo = introVideoRef.value
  if (introVideo) {
    introVideo.removeEventListener('ended', handleEnded)
  }

  if (rafId !== null) {
    cancelAnimationFrame(rafId)
  }
})
</script>
