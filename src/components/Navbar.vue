<template>
  <header class="relative z-20 w-full px-6 pt-32 xl:pt-28 2xl:pt-20">
    <div
      class="mx-auto flex w-full lg:px-16 xl:px-22 2xl:px-0 max-w-7xl items-center justify-between"
    >
      <a
        href="#home"
        class="font-display text-4xl leading-none tracking-tight text-white sm:text-black transition-transform duration-300 hover:scale-[1.08]"
      >
        Peluqueria Juan Carlos
        <sup class="align-super text-sm">&reg;</sup>
      </a>

      <nav class="hidden items-center md:gap-4 lg:gap-8 md:flex">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="text-sm transition-colors duration-300"
          :class="item.active ? 'text-foreground' : 'text-white  hover:text-gray-300'"
        >
          {{ item.label }}
        </a>
      </nav>

      <a
        href="#reach-us"
        class="rounded-full hidden font-medium sm:block bg-foreground px-3 xl:px-6 py-2.5 text-sm text-white transition-transform duration-300 hover:scale-[1.03]"
      >
        Reserva una cita
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Inicio', href: '#home', active: false },
  { label: 'Local', href: '#studio', active: false },
  { label: 'Nosotros', href: '#about', active: false },
  { label: 'Servicios', href: '#journal', active: false },
  { label: 'Contactanos', href: '#reach-us', active: false },
]
</script>
