<template>
  <section id="about" ref="sectionRef" class="bg-background px-6 py-32">
    <div class="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-end">
      <div class="reveal">
        <span
          class="inline-flex rounded-full border border-foreground/15 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-muted"
        >
          Sobre nosotros
        </span>
        <h2
          class="mt-6 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl"
        >
          Pensado para quienes valoran la calidad,
          <em class="text-muted not-italic"> el detalle y la confianza.</em>
        </h2>
      </div>
      <p class="reveal reveal-stagger-2 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        Nos centramos en ofrecer el mejor servicio a nuestros clientes, trabajando con productos de
        alta calidad y una atención completamente personalizada. Realizamos todo tipo de cortes,
        desde estilos clásicos hasta tendencias actuales, con precisión, rapidez y cuidado en cada
        detalle.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '@/hooks/useReveal'

const sectionRef = useReveal<HTMLElement>()
</script>
