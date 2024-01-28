<template>
    <button @click="emit('click')" class="j-button" :class="{ 'col-reverse': revert, [`j-button--${type}`]: type }">
        <div class="j-button__left">
            <Icon v-if="props.icon" :name="props.icon" :size="props.iconSize" />
            <div v-if="props.icon && props.text" class="mx-1"></div>
            <span class="j-button__text">{{ text }}</span>
        </div>

    </button>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    icon: String,
    revert: Boolean,
    text: String,
    type: String,
    iconSize: {
        type: String,
        default: '1.25rem'
    },
});

const emit = defineEmits(['click']);

</script>
  
<style scoped lang="scss">
.j-button {
    display: flex;
    justify-content: space-between;

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
    transition: background-color 0.2s;

    &__tip {
        background-color: $primary-base;
        position: absolute;
        left: -10px;
        border-radius: 25%;
    }

    &.col-reverse {
        flex-direction: row-reverse;

        .j-button__left {
            flex-direction: row-reverse;
        }
    }

    .j-button__left {
        display: flex;
        align-items: center;
    }

    &--secondary {
        background-color: $primary-base;
        border: none;
        color: $bg-weak-100;
    }

    &--primary {
        background-color: transparent;
        box-sizing: border-box;
        border: 1px solid $stroke-soft-200;
        color: $text-sub-500;
    }

    &--icon {
        background-color: transparent;
        box-sizing: border-box;
        color: $text-sub-500;
    }

    &:hover {
        opacity: 0.8;
    }
}
</style>

