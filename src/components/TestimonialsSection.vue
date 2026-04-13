<template>
  <section ref="sectionRef" class="bg-background px-6 py-32">
    <div class="mx-auto max-w-7xl text-center">
      <div class="reveal">
        <span
          class="inline-flex rounded-full border border-foreground/15 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-muted"
        >
          Testimonios
        </span>
      </div>

      <h2
        class="reveal reveal-stagger-1 mx-auto mt-6 max-w-lg font-display text-4xl leading-[1.05] text-foreground sm:text-5xl"
      >
        Clientes que confian en nuestro trabajo
      </h2>

      <div class="reveal reveal-stagger-2 mt-8 flex justify-center gap-2.5">
        <button
          v-for="(item, index) in testimonials"
          :key="item.name"
          type="button"
          class="h-2.5 w-2.5 rounded-full border transition-colors duration-300"
          :class="
            index === activeIndex
              ? 'border-foreground bg-foreground'
              : 'border-foreground/20 hover:border-foreground/40'
          "
          :aria-label="`Ir al testimonio ${index + 1}`"
          @click="activeIndex = index"
        />
      </div>

      <article
        class="reveal reveal-stagger-3 mx-auto mt-12 grid max-w-4xl gap-8 text-left md:grid-cols-5"
      >
        <div class="overflow-hidden rounded-2xl md:col-span-2">
          <video
            class="h-72 w-full object-cover md:h-full"
            :src="videoSrc"
            muted
            loop
            playsinline
            autoplay
          />
        </div>

        <div class="md:col-span-3">
          <blockquote class="text-lg leading-relaxed text-foreground md:text-xl">
            "{{ activeTestimonial.quote }}"
          </blockquote>

          <div class="mt-8 flex items-end justify-between gap-4 border-t border-foreground/10 pt-6">
            <div>
              <p class="text-sm font-medium text-foreground">{{ activeTestimonial.name }}</p>
              <p class="text-sm text-muted">
                {{ activeTestimonial.role }}, {{ activeTestimonial.company }}
              </p>
            </div>
            <div class="flex gap-2">
              <button
                type="button"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground transition-colors duration-300 hover:bg-foreground hover:text-white"
                aria-label="Testimonio anterior"
                @click="goPrev"
              >
                <ChevronLeft :size="16" />
              </button>
              <button
                type="button"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground transition-colors duration-300 hover:bg-foreground hover:text-white"
                aria-label="Siguiente testimonio"
                @click="goNext"
              >
                <ChevronRight :size="16" />
              </button>
            </div>
          </div>
        </div>
      </article>

      <div class="reveal reveal-stagger-4 mt-20 border-t border-foreground/10 pt-12">
        <div class="grid grid-cols-2 gap-6 text-center sm:grid-cols-5">
          <span v-for="logo in logos" :key="logo" class="font-display text-xl text-foreground/20">{{
            logo
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

import { useReveal } from '@/hooks/useReveal'

const sectionRef = useReveal<HTMLElement>()

const videoSrc =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4'

const testimonials = [
  {
    name: 'Carolina Martin',
    role: 'Clienta habitual',
    company: 'Barcelona',
    quote:
      'Siempre salgo encantada. Entienden justo el estilo que busco y cuidan cada detalle, desde el corte hasta el acabado final.',
  },
  {
    name: 'Marcos Ruiz',
    role: 'Cliente habitual',
    company: 'Dos Hermanas',
    quote:
      'La atencion es excelente y el trato muy cercano. En cada visita mantienen la misma calidad y precision en el corte.',
  },
  {
    name: 'Elena Gomez',
    role: 'Clienta',
    company: 'Alcala de Guadaira',
    quote:
      'Me recomendaron tratamiento y peinado segun mi tipo de cabello y el resultado fue impecable. Totalmente recomendable.',
  },
]

const logos = ['Loreal', 'Wella', 'Revlon', 'Schwarzkopf', 'Tahe']

const activeIndex = ref(0)

const activeTestimonial = computed(() => testimonials[activeIndex.value % testimonials.length]!)

const goPrev = () => {
  activeIndex.value = activeIndex.value === 0 ? testimonials.length - 1 : activeIndex.value - 1
}

const goNext = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.length
}
</script>
