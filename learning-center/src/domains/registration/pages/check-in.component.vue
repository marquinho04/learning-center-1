<template>
  <div class="p-4">
    <!-- Título principal de la vista -->
    <h1 class="text-2xl mb-3">{{ $t('check-in') }}</h1>

    <!-- Formulario para validar el ticket -->
    <div class="card p-4 border-1 surface-border border-round">
      <h2 class="text-lg mb-2">{{ $t('ticket') }}</h2>
      <div class="flex gap-2 mb-3 button">
        <pv-input-text v-model="ticketId" :placeholder="$t('ticket')" />
        <pv-button :label="$t('submit')" icon="pi pi-check" @click="handleCheckIn" />
      </div>
    </div>

    <!-- Resultado del intento de check-in -->
    <div class="mt-4" v-if="result">
      <div v-if="result.status === 'success'">
        <p><strong>Event ID:</strong> {{ result.event.id }}</p>
        <p><strong>Event Name:</strong> {{ result.event.name }}</p>
        <p><strong>Event Description:</strong> {{ result.event.description }}</p>
        <p><strong>Attendee Name:</strong> {{ result.attendee.firstName }} {{ result.attendee.lastName }}</p>
        <p><strong>Checked-In At:</strong> {{ result.attendee.checkedInAt }}</p>
      </div>

      <div v-else-if="result.status === 'already'">
        <p class="text-orange-500">{{ $t('alreadyCheckedIn') }}</p>
      </div>

      <div v-else-if="result.status === 'invalid'">
        <p class="text-red-500">{{ $t('invalidTicket') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * @file check-in.page.vue
 * @summary Página de validación de tickets en eventos. Permite ingresar un ticketIdentifier, verificar su validez, registrar el check-in (si es válido), y mostrar detalles o errores correspondientes.
 */

import { ref } from 'vue'
import axios from 'axios'

/**
 * @constant ticketId
 * @summary Identificador del ticket ingresado por el usuario.
 * @type {Ref<string>}
 */
const ticketId = ref('')

/**
 * @constant result
 * @summary Resultado del intento de validación del ticket. Puede ser:
 * - success: check-in exitoso
 * - already: ya había sido registrado
 * - invalid: no existe
 * @type {Ref<Object|null>}
 */
const result = ref(null)

/** @constant BASE_URL - URL base del fake API */
const BASE_URL = 'http://localhost:3000'

/**
 * @function handleCheckIn
 * @summary Maneja la lógica completa de validación de un ticket:
 * - Busca el ticket en `/attendees`
 * - Verifica si ya se hizo check-in
 * - Si es válido, actualiza `checkedInAt` y muestra detalles
 */
async function handleCheckIn() {
  result.value = null
  const input = ticketId.value.trim().toUpperCase()

  if (!input) {
    result.value = { status: 'invalid' }
    return
  }

  try {
    // Obtener attendees y eventos en paralelo
    const [attRes, evtRes] = await Promise.all([
      axios.get(`${BASE_URL}/attendees`),
      axios.get(`${BASE_URL}/events`)
    ])

    const attendees = attRes.data
    const events = evtRes.data

    // Buscar al asistente por ticket
    const attendee = attendees.find(
        a => a.ticketIdentifier?.trim().toUpperCase() === input
    )

    if (!attendee) {
      result.value = { status: 'invalid' }
      return
    }

    if (attendee.checkedInAt) {
      result.value = { status: 'already' }
      return
    }

    // Actualizar el registro con fecha y hora actual
    const now = new Date().toISOString()
    await axios.patch(`${BASE_URL}/attendees/${attendee.id}`, { checkedInAt: now })

    // Obtener datos actualizados
    const updatedAttendee = (await axios.get(`${BASE_URL}/attendees/${attendee.id}`)).data
    const event = events.find(e => e.id === updatedAttendee.eventId)

    // Mostrar resultado exitoso
    result.value = {
      status: 'success',
      attendee: updatedAttendee,
      event
    }

    ticketId.value = ''
  } catch (error) {
    console.error('Check-in failed:', error)
    result.value = { status: 'invalid' }
  }
}
</script>

<style scoped>
.button {
  /* Personaliza si deseas estilos adicionales para el contenedor de inputs */
}
</style>
