<template>
    <Doughnut :data="data" :options="options" />
</template>
  
<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
    datasets: [
        {
            backgroundColor: ['#ff4a00', '#E2E4E9'],
            data: [25, 75]
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: 30,
    plugins: {
        tooltip: {
            enabled: false
        }
    }
}


</script>
  