<script setup>
import { computed } from 'vue'

const props = defineProps({
  examiner: Object,
  exams: Array
})

const fullName = computed(() =>
    `${props.examiner.firstName} ${props.examiner.lastName}`
)

const totalAssigned = computed(() => props.exams.length)

const averageScore = computed(() => {
  if (!props.exams.length) return 0
  const scores = props.exams.map(e =>
      (e.orientationScore || 0) +
      (e.registrationScore || 0) +
      (e.attentionAndCalculationScore || 0) +
      (e.recallScore || 0) +
      (e.languageScore || 0)
  )
  const total = scores.reduce((sum, score) => sum + score, 0)
  return (total / scores.length).toFixed(2)
})
</script>

<template>
  <pv-card class="shadow-4 w-full">
    <template #header>
      <div class="text-lg font-semibold">{{ fullName }}</div>
    </template>

    <template #title>
      <div class="text-sm text-gray-600">NPI: {{ examiner.nationalProviderIdentifier }}</div>
    </template>

    <template #subtitle>
      <div class="text-sm text-primary">Mental State Exam Performance</div>
    </template>

    <template #content>
      <div class="mt-3 space-y-2 text-sm text-color">
        <div>
          <strong>Current Assigned Mental State Exam Count:</strong><br />
          {{ totalAssigned }}
        </div>
        <div>
          <strong>Average Assigned Mental State Exam Total Score:</strong><br />
          {{ averageScore }}
        </div>
      </div>
    </template>
  </pv-card>
</template>
