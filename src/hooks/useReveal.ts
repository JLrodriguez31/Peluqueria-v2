import { onMounted, onUnmounted, ref } from 'vue'

export function useReveal<T extends HTMLElement = HTMLElement>() {
  const sectionRef = ref<T | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!sectionRef.value) {
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const container = entry.target as HTMLElement
          container
            .querySelectorAll<HTMLElement>('.reveal')
            .forEach((item) => item.classList.add('visible'))
        })
      },
      { threshold: 0.15 },
    )

    observer.observe(sectionRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return sectionRef
}
