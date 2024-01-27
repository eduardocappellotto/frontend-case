<template>
    <button class="my-1" :class="navButtonClasses">
        <div class="nav-button__tip pa-2" v-if="props.active"></div>
        <div class="nav-button__left">
            <Icon :class="props.expanded ? '' : 'mr-2'" :name="props.leftIcon" size="1.5rem"
                :color="props.active ? '#ff4a00' : '868C98'" />
            <span v-if="!props.expanded" class="nav-button__text">{{ props.text }}</span>
        </div>
        <div v-if="props.active && !props.expanded" class="nav-button__right">
            <Icon name="mdi:chevron-right" size="1.5rem" color="#868C98" />
        </div>
    </button>
</template>
  
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    leftIcon: {
        required: true,
        type: String
    },
    expanded: {
        type: Boolean,
        default: false,
    },
    text: {
        required: true,
        type: String
    },
    active: {
        required: true,
        default: false,
        type: Boolean
    },
})

const navButtonClasses = computed(() => ({
    'nav-button': true,
    'active': props.active,
}));
</script>
  
<style scoped lang="scss">
.nav-button {
    width: 100%;
    height: 2rem;

    font-family: "Inter";

    border-radius: 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 500;
    font-size: 14px;
    background-color: transparent;

    border: none;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;

    &__tip {
        background-color: $primary-base;
        position: absolute;
        left: -10px;
        border-radius: 25%;
    }

    &__text {
        color: $text-sub-500;
    }

    &.active {
        & span {
            color: $text-main-900;
        }

        background-color: $bg-weak-100;
    }

    &:hover {
        opacity: 0.8;
    }

    .nav-button__left {
        display: flex;
        align-items: center;
    }

    .nav-button__right {
        font-size: 18px;
    }
}
</style>