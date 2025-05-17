<script setup>
import { ref, onMounted } from 'vue'
import { getExaminers } from '/src/domains/shared/services/examiners.service.js'
import { getExams } from '/src/domains/shared/services/exams.service.js'
import ExaminerCard from '../components/examiner-card.component.vue'

const examiners = ref([])
const exams = ref([])

onMounted(async () => {
  examiners.value = await getExaminers()
  exams.value = await getExams()
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl mb-4 font-semibold">Examiner Performance Overview</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ExaminerCard
          v-for="examiner in examiners"
          :key="examiner.id"
          :examiner="examiner"
          :exams="exams.filter(e => Number(e.examinerId) === Number(examiner.id))"
      />
    </div>
  </div>
</template>
