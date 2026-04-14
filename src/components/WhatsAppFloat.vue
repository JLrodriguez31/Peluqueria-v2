<template>
  <a
    :href="whatsAppLink"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Abrir WhatsApp del negocio"
    :class="[
      'fixed bottom-6 right-4 z-70 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-all duration-500 ease-out hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-8 md:right-6',
      visible
        ? 'pointer-events-auto translate-x-0 scale-100 opacity-100'
        : 'pointer-events-none translate-x-6 scale-95 opacity-0',
    ]"
  >
    <svg viewBox="0 0 24 24" class="h-8 w-8" fill="currentColor" aria-hidden="true">
      <path
        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.57 2 2.11 6.46 2.11 11.93c0 1.75.46 3.46 1.32 4.97L2 22l5.24-1.37a9.94 9.94 0 0 0 4.8 1.22h.01c5.47 0 9.93-4.46 9.93-9.93a9.86 9.86 0 0 0-2.93-7.01ZM12.05 20.17h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.23 8.23 0 0 1-1.26-4.39c0-4.56 3.71-8.27 8.28-8.27 2.2 0 4.27.85 5.82 2.41a8.18 8.18 0 0 1 2.42 5.84c0 4.56-3.72 8.26-8.27 8.26Zm4.54-6.2c-.25-.13-1.48-.73-1.71-.81-.23-.09-.39-.13-.56.13-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.24-.12-1.03-.38-1.96-1.22-.72-.65-1.21-1.46-1.36-1.71-.14-.25-.02-.39.11-.52.11-.11.25-.29.37-.43.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08s.89 2.41 1.01 2.58c.12.17 1.76 2.69 4.26 3.77.6.26 1.08.42 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.14-1.2-.06-.1-.23-.17-.48-.29Z"
      />
    </svg>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineProps<{
  visible: boolean
}>()

const rawNumber = (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ?? '34600000000'
const message =
  (import.meta.env.VITE_WHATSAPP_MESSAGE as string | undefined) ??
  'Hola, quiero informacion y reservar una cita.'

const whatsAppLink = computed(() => {
  const phoneNumber = rawNumber.replace(/\D/g, '')
  const text = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${text}`
})
</script>
