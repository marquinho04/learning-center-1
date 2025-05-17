<template>
  <!-- Vista de error 404 con botón para volver a Home -->
  <div class="p-6 text-center">
    <h1 class="text-3xl font-bold mb-4">404 - Page Not Found</h1>
    <p class="mb-4">
      The path <strong>{{ route.fullPath }}</strong> does not exist.
    </p>
    <router-link to="/home">
      <pv-button icon="pi pi-home" label="Go to Home" />
    </router-link>
  </div>
</template>

<script setup>
/**
 * @file page-not-found.component.vue
 * @summary Muestra una página 404 personalizada cuando el usuario navega a una ruta no existente. Indica la ruta no encontrada y ofrece un botón para volver a Home.
 */

import { useRoute } from 'vue-router'

/**
 * @constant route
 * @summary Obtiene la ruta actual que intentó acceder el usuario.
 */
const route = useRoute()
</script>

<style scoped>
/* Puedes agregar estilos personalizados si deseas cambiar la tipografía, espaciado o colores */
</style>
