<script setup>
import LanguageSwitcher from "./language-switcher.component.vue";
import { Toolbar as PvToolbar } from "primevue";
</script>

<template>
  <pv-toolbar class="mb-3">
    <template #start>
      <div class="flex align-items-center gap-3">
          <img src="../../../assets/HIGN-logo-1200.png" alt="HIGN Logo" height="100%" width="70"/>
        <span class="text-lg font-semibold">Hartford Institute for Geriatric Nursing</span>
      </div>
    </template>
    <template #center>
      <div class="flex gap-4">
        <router-link class="no-underline text-color" to="/home">
          {{ $t("home") }}
        </router-link>
        <router-link class="no-underline text-color" to="/nursing/examiner-performance-overview">
          {{ $t("performance") }}
        </router-link>
      </div>
    </template>
    <template #end>
      <LanguageSwitcher />
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>