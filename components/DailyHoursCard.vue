<template>
    <Card>
        <template #header>
            <div class="dailyhours__card ">
                <div>
                    <Icon name="ri:timer-flash-line" color="#525866" size="1.5rem" />
                    <span class="mx-4 dailyhours__title">Horas diárias de trabalho</span>
                </div>
                <JButton class="pa-2" text="Detalhes" type="primary" font-size="14px" />
            </div>
            <JDivider class="my-3" />
        </template>
        <template #body>
            <div class="ma-4">
                <span class="dailyhours__totaltime mb-6"> {{ totalTime }}</span>
                <div class="dailyhours__bar">
                    <div v-for="item in formattedHours" :key="item.label" class="dailyhours__bar-section mx-1"
                        :style="{ width: item.percentage + '%', backgroundColor: item.color }">
                    </div>
                </div>
                <div class="dailyhours__legend mt-6">
                    <span class="dailyhours__legend-item" v-for="item in props.dailyHours" :key="item.label">
                        <span class="dailyhours__legend-circle mx-2" :style="{ backgroundColor: item.color }">{{ }}</span>{{
                            item.label }}
                    </span>
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

type dailyHour = {
    color: string;
    label: string;
    minutes: number;
};

const props = defineProps({
    dailyHours: {
        type: Array as () => dailyHour[],
        default: () => []
    },
});

const totalMinutes = computed(() => {
    return props.dailyHours.reduce((acc, item) => acc + item.minutes, 0);
});

const formattedHours = computed(() => {
    return props.dailyHours.map(item => {
        const percentage = (item.minutes / totalMinutes.value) * 100;
        return { ...item, percentage: percentage.toFixed(2) };
    });
});

const totalTime = computed(() => {
    const totalMinutes = props.dailyHours.reduce((acc, item) => acc + item.minutes, 0);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const hourStr = hours > 0 ? `${hours} hora${hours > 1 ? 's' : ''}` : '';
    const minuteStr = minutes > 0 ? `${minutes} minuto${minutes > 1 ? 's' : ''}` : '';
    return `${hourStr}${hours > 0 && minutes > 0 ? ' e ' : ''}${minuteStr}`;
});


</script>

<style lang="scss" scoped>
.dailyhours {

    &__card {
        display: flex;
        align-items: center;
        justify-content: space-between;

    }

    &__totaltime {
        display: flex;
        align-items: center;
        color: $text-sub-500;
    }
}

.dailyhours__bar {
    display: flex;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
}

.dailyhours__bar-section {
    height: 100%;
    border-radius: 2px;
}

.dailyhours__legend {
    color: $text-main-900;
    display: flex;
    justify-content: space-around;

    &-item {
        display: flex;
        align-items: center;


        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;

    }

    &-circle {
        border-radius: 50%;
        height: 10px;
        width: 10px;
    }

}
</style>
