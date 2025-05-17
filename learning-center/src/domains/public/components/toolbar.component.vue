<template>
  <!-- Barra superior (Toolbar) con logo, navegación e idioma -->
  <pv-toolbar class="mb-3">

    <!-- Logo y certificación (inicio) -->
    <template #start>
      <div class="flex align-items-center gap-3">
        <img
            src="https://logo.clearbit.com/eventify.io"
            alt="Eventify Logo"
            width="40"
            height="40"
        />
        <span class="text-lg font-semibold">ISO 27001:2022 certified</span>
      </div>
    </template>

    <!-- Opciones de navegación (centro) -->
    <template #center>
      <div class="flex gap-4">
        <router-link class="no-underline text-color" to="/home">
          {{ $t('home') }}
        </router-link>
        <router-link class="no-underline text-color" to="/registration/event-check-ins/new">
          {{ $t('check-in') }}
        </router-link>
      </div>
    </template>

    <!-- Selector de idioma (derecha) -->
    <template #end>
      <LanguageSwitcher />
    </template>
  </pv-toolbar>
</template>

<script setup>
/**
 * @file toolbar.component.vue
 * @summary Componente principal de la barra superior que incluye el logo de Eventify, enlaces de navegación y selector de idioma (i18n). Compatible con PrimeVue Toolbar y Vue Router.
 */

import LanguageSwitcher from './language-switcher.component.vue'
import { Toolbar as PvToolbar } from 'primevue'
</script>

<style scoped>
/* Personaliza si deseas tamaño de íconos, spacing o colores */
</style>
