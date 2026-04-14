<template>
  <section ref="sectionRef" class="bg-white px-6 py-32 text-foreground">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span
            class="reveal inline-flex rounded-full border border-foreground/15 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-muted"
          >
            Trabajo seleccionado
          </span>
          <h2
            class="reveal reveal-stagger-1 mt-6 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl"
          >
            Descubre cómo transformamos estilos
          </h2>
        </div>
        <a
          href="#journal"
          class="reveal reveal-stagger-2 text-sm uppercase tracking-[0.18em] text-white/50"
        >
          Ver todo
        </a>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="(project, index) in projects"
          :key="project.name"
          class="group reveal overflow-hidden rounded-2xl"
          :class="`reveal-stagger-${Math.min(index + 2, 6)}`"
        >
          <div class="relative aspect-4/3">
            <video
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              :src="project.video"
              muted
              loop
              playsinline
              autoplay
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"
            />
            <div class="absolute inset-x-0 bottom-0 p-8">
              <p class="text-xs uppercase tracking-[0.22em] text-white/60">
                {{ project.category }}
              </p>
              <p class="mt-3 font-display text-5xl leading-none text-white md:text-6xl">
                {{ project.stat }}
              </p>
              <div class="mt-4 flex items-end justify-between gap-4">
                <p class="max-w-xs text-sm text-white/60">{{ project.label }}</p>
                <button
                  type="button"
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-foreground"
                  aria-label="Abrir caso"
                >
                  <ArrowUpRight :size="16" />
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

import { useReveal } from '@/hooks/useReveal'
import work1 from '@/assets/work1.mp4'
import work3 from '@/assets/work3.mp4'

const sectionRef = useReveal<HTMLElement>()

const projects = [
  {
    name: 'Meridian Health',
    category: 'BARBERÍA Y ESTILO MASCULINO',
    stat: '100+',
    label: 'Clientes satisfechos que confían en nosotros cada mes',
    video: work1,
  },
  {
    name: 'Solaris Ventures',
    category: 'EXPERIENCIA PREMIUM',
    stat: '92%',
    label: 'Clientes que repiten tras su primera visita',
    video: work3,
  },
]
</script>
