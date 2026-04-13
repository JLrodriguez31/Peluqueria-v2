<template>
  <section id="journal" ref="sectionRef" class="bg-background px-6 py-32">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span
            class="reveal inline-flex rounded-full border border-foreground/15 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-muted"
          >
            Blog
          </span>
          <h2
            class="reveal reveal-stagger-1 mt-6 max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl"
          >
            Consejos de nuestro salon,
            <em class="text-muted not-italic"> para tu dia a dia.</em>
          </h2>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="(entry, index) in entries"
          :key="entry.title"
          class="reveal rounded-2xl border border-foreground/10 p-7"
          :class="`reveal-stagger-${Math.min(index + 1, 6)}`"
        >
          <p class="text-xs uppercase tracking-[0.22em] text-muted">{{ entry.category }}</p>
          <h3 class="mt-4 font-display text-3xl leading-tight text-foreground">
            {{ entry.title }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-muted">{{ entry.excerpt }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '@/hooks/useReveal'

const sectionRef = useReveal<HTMLElement>()

const entries = [
  {
    category: 'Cuidado',
    title: 'Como mantener tu corte impecable entre visitas',
    excerpt:
      'Rutinas sencillas y productos adecuados para conservar forma, brillo y limpieza durante toda la semana.',
  },
  {
    category: 'Tendencias',
    title: 'Cortes y estilos que mas se piden esta temporada',
    excerpt:
      'Desde clasicos renovados hasta estilos actuales: ideas para elegir un look que encaje contigo.',
  },
  {
    category: 'Barba',
    title: 'Guia rapida para una barba cuidada y definida',
    excerpt:
      'Pasos clave para perfilar, hidratar y mantener una barba limpia con acabado profesional.',
  },
]
</script>
