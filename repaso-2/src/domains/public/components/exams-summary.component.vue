<script setup>
import { computed } from 'vue'

const props = defineProps({
  examiner: Object,
  exams: Array
})

const fullName = computed(() =>
    `${props.examiner.firstName} ${props.examiner.lastName}`
)

const totalExams = computed(() => props.exams.length)

const totalScores = computed(() =>
    props.exams.map(e =>
        (e.orientationScore || 0) +
        (e.registrationScore || 0) +
        (e.attentionAndCalculationScore || 0) +
        (e.recallScore || 0) +
        (e.languageScore || 0)
    )
)

const highestScore = computed(() =>
    totalScores.value.length ? Math.max(...totalScores.value) : 0
)

const lowestScore = computed(() =>
    totalScores.value.length ? Math.min(...totalScores.value) : 0
)

const averageScore = computed(() => {
  if (!totalScores.value.length) return 0
  const sum = totalScores.value.reduce((acc, val) => acc + val, 0)
  return (sum / totalScores.value.length).toFixed(2)
})
console.log("ExamsSummary loaded for:", props.examiner.firstName, props.exams.length)
</script>

<template>
  <div class="w-full flex justify-center mt-6">
    <div class="w-full max-w-3xl">
      <pv-card class="shadow-4 w-full">
        <template #header>
          <div>
            <h2 class="text-xl font-semibold mb-1">Mental State Exam Analytics</h2>
            <h3 class="text-base text-color-secondary">Score Analytics for {{ fullName }}</h3>
          </div>
        </template>

        <template #content>
          <div class="w-full flex justify-center">
            <div class="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-3 text-sm text-color text-center">
              <div><strong>Exam Count:</strong><br />{{ totalExams }}</div>
              <div><strong>Highest Score:</strong><br />{{ highestScore }}</div>
              <div><strong>Lowest Score:</strong><br />{{ lowestScore }}</div>
              <div><strong>Average Score:</strong><br />{{ averageScore }}</div>
            </div>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style scoped>
</style>

