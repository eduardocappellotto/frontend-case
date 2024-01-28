<template>
    <div class="timetracker">
        <div class="timetracker__tracker mb-2">
            <div class="timetracker__tracker-header py-2 px-1">
                <span>
                    <Icon class="mx-3" name="logos:monday-icon" color="#525866" size="1.5rem" /> Track App
                </span>
                <span>
                    <Icon name="mdi:chevron-down" color="#525866" size="1.5rem" />
                </span>
            </div>
            <div class="timetracker__tracker-time pa-2">
                <span class="timetracker__tracker-title">{{ timerOn ? 'EM ANDAMENTO' : 'AGUARDANDO' }}</span>
                <span class="timetracker__tracker-timer">{{ formattedTime }}</span>
            </div>
            <div class="timetracker__tracker-controls px-4 pb-3">
                <button class="timetracker__tracker-controls-start" v-if="!timerOn" @click="startTimer">
                    <Icon name="ri:play-fill" size="1rem" /> Iniciar
                </button>
                <button class="timetracker__tracker-controls-pause" v-else @click="pauseTimer">
                    <Icon name="ri:pause-circle-fill" size="1rem" />
                    Pausar
                </button>
                <span v-if="timerOn" class="mx-2">|</span>
                <button class="timetracker__tracker-controls-stop" v-if="timerOn" @click="stopTimer">
                    <Icon name="ri:stop-circle-fill" size="1rem" />
                    Parar
                </button>
            </div>
        </div>

        <div class="timetracker__noresults mt-8" v-if="tasks.length === 0">
            <SvgEmptyStateIllustration />
            <span class="mt-2">Sem registro de atividades</span>
        </div>
        <div v-if="tasks.length !== 0">
            <span class="timetracker__previous-tasks-title">Tarefas anteriores</span>
            <ul class="timetracker__tasks mt-2">
                <li class=" my-2" v-for="(task, index) in tasks" :key="task.id">
                    <div class="timetracker__task">
                        <span class="timetracker__task-icon ma-2 pa-2">
                            <Icon name="logos:loom-icon" size="1.25rem" />
                        </span>
                        <div class="timetracker__task-details">
                            <span class="timetracker__task-title mb-1">{{ task.title }}</span>
                            <span class="timetracker__task-time">{{ task.time }}</span>
                        </div>
                    </div>
                    <JButton class="pa-2 mx-3" icon="ri:more-2-line" :revert="false" type="icon" font-size="14px"
                        @click="deleteTaskByIndex(index)" />

                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue';

const timerOn = ref(false);
const startTime = ref(0);
const elapsedTime = ref(0);

const tasks = ref([
    { id: 1, title: 'Alinhamento Comercial', time: '01:30:00' },
    // more tasks
]);

const startTimer = () => {
    timerOn.value = true;
    startTime.value = Date.now() - elapsedTime.value;
    requestAnimationFrame(updateTime);
};

const pauseTimer = () => {
    timerOn.value = false;
    elapsedTime.value = Date.now() - startTime.value;
};

const stopTimer = () => {
    timerOn.value = false;
    tasks.value.unshift({
        id: tasks.value.length + 1,
        title: 'Nova Tarefa',
        time: formattedTime.value
    });
    elapsedTime.value = 0;
};

const updateTime = () => {
    if (timerOn.value) {
        elapsedTime.value = Date.now() - startTime.value;
        requestAnimationFrame(updateTime);
    }
};

const formattedTime = computed(() => {
    const totalSeconds = Math.floor(elapsedTime.value / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
});

const deleteTaskByIndex = (index: number) => {
    tasks.value.splice(index, 1);
};
</script>
  
<style lang="scss" scoped>
.timetracker {
    color: black;

    font-family: "Inter";

    &__noresults {
        display: flex;
        flex-direction: column;
        align-items: center;

        & span {
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: -0.006em;
            text-align: center;
            color: $text-soft-400;

        }
    }

    &__tracker {
        border-radius: 10px;
        border: 1px solid $stroke-soft-200;
    }

    &__tracker-header {
        border-radius: 8px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $bg-weak-100;

        border-bottom: 1px solid $stroke-soft-200;

        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    &__tracker-time {
        font-size: 1.5rem;
        text-align: center;

        display: flex;
        align-items: center;
        flex-direction: column;
    }

    &__tracker-title {
        color: $text-soft-400;
        font-size: 11px;
        font-weight: 500;
        line-height: 12px;
        letter-spacing: 0.02em;
        text-align: center;
    }

    &__tracker-timer {
        font-family: "InterDisplay";
        font-size: 40px;
        font-weight: 500;
        line-height: 48px;
        letter-spacing: -0.01em;
        text-align: center;

    }

    &__tracker-controls {
        display: flex;
        justify-content: center;

        & button {
            border: none;
            background-color: transparent;

            &:hover {
                cursor: pointer;
                opacity: 0.8;
            }
        }

        &-start {
            color: $primary-base;
            font-size: 12px;
            font-weight: 600;
            line-height: 16px;
            letter-spacing: 0em;
            text-align: right;
        }

        &-pause {
            color: $text-main-900;
            font-size: 12px;
            font-weight: 600;
            line-height: 16px;
            letter-spacing: 0em;
            text-align: right;
        }

        &-stop {
            color: $state-error;
            font-size: 12px;
            font-weight: 600;
            line-height: 16px;
            letter-spacing: 0em;
            text-align: right;
        }
    }

    &__previous-tasks-title {
        color: $text-soft-400;
        font-size: 11px;
        font-weight: 500;
        line-height: 12px;
        letter-spacing: 0.02em;
        text-align: left;
    }

    &__tasks {
        height: 8rem;
        list-style: none;
        padding: 0;
        overflow-y: scroll;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    &__task {

        display: flex;

        &-details {

            display: flex;
            flex-direction: column;
            align-self: center;
        }

        &-title {
            color: $text-main-900;
        }

        &-time {
            font-family: "Inter";
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0em;
            text-align: left;
            color: $text-sub-500;

        }

        &-icon {
            border: 1px solid $text-soft-400;
            border-radius: 50%;
        }
    }
}
</style>
  