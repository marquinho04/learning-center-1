<script setup>
import { onMounted, ref } from 'vue'
import ExamsSummary from '../components/exams-summary.component.vue'
import { getExams } from '/src/domains/shared/services/exams.service.js'
import { getExaminers } from "../../shared/services/examiners.service.js";

const examiners = ref([])
const exams = ref([])

onMounted(async () => {
  examiners.value = await getExaminers()
  exams.value = await getExams()
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl mb-3">{{ $t('home')}}</h1>
    <p class="mb-4">{{ $t('welcome')}}</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ExamsSummary
        v-for="examiner in examiners"
        :key="examiner.id"
        :examiner="examiner"
        :exams="exams.filter(e => Number(e.examinerId) === Number(examiner.id))"
    />
    </div>
  </div>
</template>

<style scoped>

</style>