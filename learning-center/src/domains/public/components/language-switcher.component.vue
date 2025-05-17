<script>
/**
 * @file language-switcher.component.vue
 * @summary Componente que permite al usuario cambiar el idioma de la interfaz mediante un selector tipo botón.
 */

import { SelectButton as PvSelectButton } from "primevue"

export default {
  name: "language-switcher",
  components: { PvSelectButton },
  data() {
    return {
      /**
       * @property {Array<string>} languages - Lista de idiomas disponibles según la configuración de i18n
       */
      languages: []
    }
  },
  /**
   * Inicializa el componente cargando los idiomas disponibles desde Vue I18n
   */
  created() {
    this.languages = this.$i18n.availableLocales
  }
}
</script>

<template>
  <!-- Selector de idioma con botones "EN" y "ES" -->
  <pv-select-button v-model="$i18n.locale" :options="languages">
    <template #option="slotProps">
      {{ slotProps.option.toUpperCase() }}
    </template>
  </pv-select-button>
</template>

<style scoped>
/* Puedes agregar estilos si deseas ajustar el tamaño o espaciado del botón */
</style>
