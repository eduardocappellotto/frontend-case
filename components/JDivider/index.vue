<template>
    <div :class="props.vertical ? 'divider__vertical' : 'divider__horizontal'"></div>
</template>
  
<script lang="ts" setup>
const props = defineProps({ vertical: Boolean })

</script>
  
<style scoped lang="scss">
.divider {
    &__vertical {
        border-left: 1px solid $stroke-soft-200;
    }

    &__horizontal {
        border-top: 1px solid $stroke-soft-200;
    }
}
</style>
  