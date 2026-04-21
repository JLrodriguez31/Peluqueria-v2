<template>
  <header class="relative z-20 w-full px-6 pt-32 sm:pt-38 xl:pt-30 2xl:pt-33">
    <div
      class="mx-auto flex w-full lg:px-16 xl:px-26 2xl:px-0 max-w-7xl items-center justify-between"
    >
      <a
        href="#home"
        class="font-display text-4xl md:w-38 xl:w-auto leading-none tracking-tight text-white sm:text-gray-300 lg:text-black transition-transform duration-300 hover:scale-[1.08]"
      >
        Peluquería Juan Carlos
        <sup class="align-super text-sm">&reg;</sup>
      </a>

      <nav class="hidden items-center md:gap-4 lg:gap-8 md:flex">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="text-md transition-colors duration-300"
          :class="item.active ? 'text-foreground' : 'text-white  hover:text-gray-300'"
        >
          {{ item.label }}
        </a>
      </nav>

      <a
        href="#reach-us"
        class="rounded-full hidden font-medium sm:block bg-foreground px-3 xl:px-6 py-2.5 text-sm text-white transition-transform duration-300 hover:scale-[1.03]"
      >
        Reserva tu cita
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Inicio', href: '#home', active: false },
  { label: 'Local', href: '#local', active: false },
  { label: 'Servicios', href: '#services', active: false },
  { label: 'Nosotros', href: '#about', active: false },
  { label: 'Contáctanos', href: '#reach-us', active: false },
]
</script>
