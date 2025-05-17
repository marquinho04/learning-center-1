<template>
  <div class="p-4">
    <!-- Título principal y bienvenida -->
    <h1 class="text-2xl mb-3">{{ $t('home') }}</h1>
    <p class="mb-4">{{ $t('welcome') }}</p>

    <!-- Sección de eventos registrados -->
    <h2 class="text-xl mb-2">{{ $t('registeredEvents') }}</h2>

    <!-- Grid responsivo de tarjetas de resumen de eventos -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <EventSummary
          v-for="event in events"
          :key="event.id"
          :event="event"
          :attendees="attendees"
      />
    </div>
  </div>
</template>

<script setup>
/**
 * @file home.page.vue
 * @summary Vista principal de la aplicación. Muestra mensaje de bienvenida y una lista de eventos registrados con sus asistentes y porcentaje de asistencia, utilizando EventSummary como componente de tarjeta de resumen.
 */

import { onMounted, ref } from 'vue'
import EventSummary from '../components/event-summary.component.vue'
import { getEvents } from '/src/domains/shared/services/event.service.js'
import { getAttendees } from '/src/domains/shared/services/attendee.service.js'

/**
 * @constant events
 * @summary Lista de eventos cargados desde el backend (json-server).
 * @type {Ref<Array>}
 */
const events = ref([])

/**
 * @constant attendees
 * @summary Lista de asistentes a todos los eventos, usada para calcular estadísticas.
 * @type {Ref<Array>}
 */
const attendees = ref([])

/**
 * Carga los datos al montar la vista: eventos y asistentes.
 */
onMounted(async () => {
  events.value = await getEvents()
  attendees.value = await getAttendees()
})
</script>
