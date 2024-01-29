<template>
    <Card>
        <template #header>
            <div class="courseprogress__card">
                <div>
                    <Icon name="ri:book-3-line" color="#525866" size="1.5rem" />
                    <span class="mx-4 courseprogress__title">Cursos - Progresso</span>
                </div>
            </div>
            <JDivider class="my-3" />
        </template>
        <template #body>
            <div class="courseprogress__content mx-2 mb-4">
                <span class="courseprogress__porcentage"> {{ course.percentage }}%</span>
                <div>
                    <DoughnutChart class="courseprogress__chart" :percentage="course.percentage" />
                </div>
                <div class="courseprogress__info ml-6">
                    <h3 class="courseprogress__title pb-2">{{ props.course.courseTitle }}</h3>
                    <p class="courseprogress__description mb-2">{{ props.course.courseSmallDescription }}</p>
                    <JButton type="anchor" class="pl-0" text="Retomar curso" @click="resumeCourse(props.course.courseId)" />
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

type Course = {
    courseId: string;
    courseTitle: string;
    courseSmallDescription: string;
    percentage: number;
};

const props = defineProps({
    course: {
        type: Object as () => Course,
        required: true
    }
});

const resumeCourse = (courseId: string) => {
    // Handle course resumption logic here
};
</script>

<style lang="scss" scoped>
.courseprogress {
    &__card {
        display: flex;
        align-items: center;
    }

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $text-main-900;

        position: relative;
    }

    &__chart {
        width: 100px;
    }

    &__porcentage {
        position: absolute;
        left: 40px;

        font-size: 14px;
        font-weight: 500;
    }

    &__doughnut {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
    }

    .circle-chart {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #ddd;
    }



    &__description {
        color: $text-sub-500;
        font-size: 1rem;

    }
}
</style>
