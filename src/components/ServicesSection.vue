<template>
  <section id="services" ref="sectionRef" class="bg-black relative px-6 py-32">
    <div class="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
    <div class="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
    <div class="mx-auto max-w-7xl">
      <div class="reveal">
        <span
          class="inline-flex rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-muted"
        >
          Servicios
        </span>
      </div>

      <div class="mt-8 flex flex-col gap-8 md:flex-row md:items-end">
        <h2
          class="reveal reveal-stagger-1 max-w-2xl font-display text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl"
        >
          Servicios profesionales
          <em class="text-muted not-italic">para tu mejor versión</em>
        </h2>
        <p class="reveal reveal-stagger-2 max-w-lg text-base leading-relaxed text-muted">
          Desde cortes clásicos hasta el cuidado de barba, trabajamos para que siempre salgas con tu
          mejor imagen.
        </p>
      </div>

      <div class="mt-16 divide-y divide-foreground/10">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="group reveal grid grid-cols-1 gap-6 py-8 md:grid-cols-12 md:items-start"
          :class="`reveal-stagger-${Math.min(index + 1, 6)}`"
        >
          <p class="text-sm text-muted md:col-span-1">{{ service.number }}</p>
          <h3 class="font-display text-3xl text-white md:col-span-3 md:text-4xl">
            {{ service.title }}
          </h3>
          <p class="text-base leading-relaxed text-muted md:col-span-5">
            {{ service.description }}
          </p>
          <div class="flex items-start justify-between gap-4 md:col-span-3">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in service.tags"
                :key="tag"
                class="rounded-full bg-white/10 px-3 py-1 text-xs text-white/75"
              >
                {{ tag }}
              </span>
            </div>
            <button
              type="button"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black"
              aria-label="Ver servicio"
            >
              {{ service.price }}€
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '@/hooks/useReveal'

const sectionRef = useReveal<HTMLElement>()

const services = [
  {
    number: '01',
    title: 'Corte de cabello',
    description:
      'Cortes personalizados para adultos y niños, adaptados a tu estilo y tipo de cabello. Rapidez y un acabado limpio en cada sesión.',
    tags: ['Corte', 'Clásico', 'Moderno'],
    price: 6,
  },
  {
    number: '02',
    title: 'Barba',
    description:
      'Arreglo y afeitado de barba con detalle y cuidado, para un acabado limpio y definido.',
    tags: ['Barba', 'Afeitado', 'Perfilado'],
    price: 6,
  },
  {
    number: '03',
    title: 'Lavado y cuidado',
    description:
      'Lavado de cabello con productos de calidad para mantener tu pelo limpio, sano y preparado para el corte.',
    tags: ['Lavado', 'Cuidado', 'Higiene'],
    price: 6,
  },
  {
    number: '04',
    title: 'Extras',
    description: 'Servicios adicionales para completar tu look y cuidar cada detalle.',
    tags: ['Detalle', 'Imagen', 'Precisión'],
    price: 3,
  },
]
</script>
