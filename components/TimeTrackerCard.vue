<template>
    <Card>
        <template #header>
            <div class="timetracker__card ">
                <div>
                    <Icon name="ri:timer-flash-line" color="#525866" size="1.5rem" />
                    <span class="mx-4 timetracker__title">Rastreador de Tempo</span>
                </div>
                <JButton class="pa-2" icon="ri:history-line" text="Histórico" type="primary" font-size="14px" />
            </div>
        </template>
        <template #body>
            <TimeTracker class="pa-4" />
        </template>
    </Card>
</template>
  
<script setup lang="ts">
import Card from '@/components/Card.vue';
import TimeTracker from '@/components/TimeTracker.vue';
</script>
  
<style lang="scss" scoped>
.timetracker {
    &__card {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
  