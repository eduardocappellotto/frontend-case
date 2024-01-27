<template>
    <button @click="emit('click')" class="fav-nav-button my-1">
        <div class="fav-nav-button__left">
            <div class="fav-nav-button__circle" :class="!props.expanded ? 'mr-4' : ''"
                :style="{ backgroundColor: props.color }"></div>
            <span v-if="!props.expanded" class="fav-nav-button__text">{{ props.text }}</span>
        </div>
        <div v-if="!props.expanded" class="fav-nav-button__right">
            <Icon name="carbon:mac-command" size="1rem" color="#868C98" />
            {{ props.shortcut }}
        </div>
    </button>
</template>
  
<script setup lang="ts">
const props = defineProps({
    color: {
        required: true,
        type: String
    },
    expanded: {
        type: Boolean,
        required: true,
    },
    text: {
        required: true,
        type: String
    },
    shortcut: {
        required: true,
        type: String
    },
})

const emit = defineEmits(['click'])


</script>
  
<style scoped lang="scss">
.fav-nav-button {
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

    &:hover {
        opacity: 0.8;
    }


    &__text {
        color: $text-sub-500;
    }

    &.active {
        color: $text-main-900;
        background-color: $bg-weak-100;
    }

    .fav-nav-button__left {
        display: flex;
        align-items: center;
    }

    .fav-nav-button__circle {
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }

    .fav-nav-button__right {
        border: 1px solid $stroke-soft-200;

        border-radius: 4px;
        font-size: 14px;

        color: $text-soft-400;
        ;
    }
}
</style>