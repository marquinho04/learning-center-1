<template>
  <!-- Card del evento con nombre, descripción y estadísticas -->
  <pv-card class="shadow-2">
    <!-- Encabezado del card: nombre del evento -->
    <template #header>
      <h3 class="m-0">{{ event.name }}</h3>
    </template>

    <!-- Contenido principal del card: descripción del evento -->
    <template #content>
      <p>{{ event.description }}</p>
    </template>

    <!-- Pie del card: cantidad de asistentes registrados y porcentaje de asistencia -->
    <template #footer>
      <div class="flex justify-between mt-2 text-sm text-color-secondary">
        <span>{{ $t('registeredAttendees') }}: {{ totalAttendees }}</span>
      </div>
      <div class="flex justify-between mt-2 text-sm text-color-secondary">
        <span>{{ $t('attendancePercentage') }}: {{ attendancePercentage }}%</span>
      </div>
    </template>
  </pv-card>
</template>

<script setup>
/**
 * @file event-summary.component.vue
 * @summary Visualiza un resumen de un evento, incluyendo estadísticas de asistentes.
 */

import { computed } from 'vue'

/**
 * @property {Object} event - Datos del evento (name, description, id, etc.)
 * @property {Array} attendees - Lista completa de asistentes para todos los eventos
 */
const props = defineProps({
  event: Object,
  attendees: Array
})

/**
 * @constant totalAttendees
 * @summary Calcula cuántos asistentes están registrados para el evento actual.
 * @returns {number}
 */
const totalAttendees = computed(() =>
    props.attendees.filter(a => a.eventId === props.event.id).length
)

/**
 * @constant checkedInCount
 * @summary Calcula cuántos asistentes han hecho check-in para el evento actual.
 * @returns {number}
 */
const checkedInCount = computed(() =>
    props.attendees.filter(a => a.eventId === props.event.id && a.checkedInAt).length
)

/**
 * @constant attendancePercentage
 * @summary Porcentaje de asistencia (check-ins / registrados * 100).
 * @returns {number}
 */
const attendancePercentage = computed(() =>
    totalAttendees.value > 0
        ? Math.round((checkedInCount.value / totalAttendees.value) * 100)
        : 0
)
</script>
