<template>
  <section
    id="reach-us"
    ref="sectionRef"
    class="relative overflow-hidden bg-foreground px-6 py-32 text-white"
  >
    <div class="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
    <div class="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

    <div class="relative mx-auto max-w-7xl">
      <div class="reveal mx-auto max-w-4xl text-center">
        <span
          class="inline-flex rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-white/60"
        >
          Contactanos
        </span>
        <h2 class="mt-6 font-display text-4xl leading-[1.02] sm:text-5xl md:text-7xl">
          Listo para renovar
          <em class="text-white/60 not-italic"> tu estilo?</em>
        </h2>
        <p
          class="reveal reveal-stagger-2 mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg"
        >
          Escribenos o llamanos y te ayudamos a elegir el servicio ideal para ti. Rapido, cercano y
          con resultados profesionales.
        </p>
        <div
          class="reveal reveal-stagger-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="mailto:hello@aethera.studio"
            class="inline-flex rounded-full bg-white px-10 py-4 text-sm font-medium uppercase tracking-[0.14em] text-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            +34 678156436
          </a>
          <a
            href="#home"
            class="inline-flex rounded-full border border-white/25 px-10 py-4 text-sm uppercase tracking-[0.14em] text-white/80 transition-colors duration-300 hover:bg-white/10"
          >
            Volver arriba
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useReveal } from '@/hooks/useReveal'

const sectionRef = useReveal<HTMLElement>()
</script>
