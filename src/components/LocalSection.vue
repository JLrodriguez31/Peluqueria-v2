<template>
  <section id="local" ref="sectionRef" class="bg-foreground px-6 py-32 text-white">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span
            class="reveal inline-flex rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-muted"
          >
            Nuestro local
          </span>
          <h2
            class="reveal reveal-stagger-1 mt-6 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl"
          >
            Conoce el espacio donde cuidamos cada detalle
          </h2>
        </div>
        <a
          href="#reach-us"
          class="reveal reveal-stagger-2 text-sm uppercase tracking-[0.18em] text-muted"
        >
          Agenda tu visita
        </a>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(item, index) in videos"
          :key="item.name"
          class="group reveal mx-auto w-full max-w-88 overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/3"
          :class="`reveal-stagger-${Math.min(index + 2, 6)}`"
        >
          <div class="relative aspect-3/4">
            <video
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              :src="item.video"
              muted
              loop
              playsinline
              autoplay
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent"
            />
            <div class="absolute inset-x-0 bottom-0 p-7 sm:p-8">
              <p class="text-xs uppercase tracking-[0.22em] text-white/70">{{ item.kicker }}</p>
              <p class="mt-3 max-w-sm text-sm text-white/75">
                {{ item.description }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '@/hooks/useReveal'
import local1 from '@/assets/local1.mp4'
import local2 from '@/assets/local2.mp4'
import local3 from '@/assets/local3.mp4'

const sectionRef = useReveal<HTMLElement>()

const videos = [
  {
    name: 'Local principal',
    kicker: 'AMBIENTE',
    title: 'Local 1',
    description: 'Un espacio moderno, cómodo y pensado para que disfrutes la experiencia completa.',
    video: local1,
  },
  {
    name: 'Zona de detalle',
    kicker: 'CONFORT',
    title: 'Local 2',
    description: 'Luz, diseño y comodidad para que cada visita se sienta premium desde que llegas.',
    video: local2,
  },
  {
    name: 'Detalle de servicio',
    kicker: 'ESTILO',
    title: 'Local 3',
    description: 'Cortes, acabados y técnica en acción con la misma calidad que ves en persona.',
    video: local3,
  },
]
</script>
