<template>
  <section ref="sectionRef" class="bg-background px-6 py-32">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <h2
          class="reveal max-w-3xl font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl"
        >
          Nuestro metodo combina
          <em class="text-muted not-italic">tecnica y estilo.</em>
        </h2>
        <p class="reveal reveal-stagger-2 max-w-md text-muted">
          Cada cita sigue un proceso claro: escuchamos lo que buscas, proponemos tu mejor version y
          cuidamos cada detalle del acabado.
        </p>
      </div>

      <div class="mt-16 grid gap-6 md:grid-cols-3">
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          class="reveal rounded-2xl border border-foreground/10 p-7"
          :class="`reveal-stagger-${Math.min(index + 1, 6)}`"
        >
          <p class="text-xs uppercase tracking-[0.22em] text-muted">{{ step.number }}</p>
          <h3 class="mt-4 font-display text-3xl text-foreground">{{ step.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-muted">{{ step.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '@/hooks/useReveal'

const sectionRef = useReveal<HTMLElement>()

const steps = [
  {
    number: 'Fase 01',
    title: 'Escuchamos',
    description:
      'Analizamos tu tipo de cabello, tus gustos y tu rutina para recomendar el corte o arreglo ideal.',
  },
  {
    number: 'Fase 02',
    title: 'Diseñamos',
    description:
      'Definimos forma, volumen y estilo para construir un look que encaje contigo y se vea natural.',
  },
  {
    number: 'Fase 03',
    title: 'Perfeccionamos',
    description:
      'Finalizamos con precision, repasamos contornos y te damos recomendaciones para mantener el resultado.',
  },
]
</script>
