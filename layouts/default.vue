<template>
    <div class="layout">
        <JSidebar />
        <div class="layout__content">
            <JHeader />
            <slot />
        </div>
    </div>
</template>
  
<script lang="ts" setup>
const toggleNavbar = () => {
    // Add your logic to toggle the navbar here 
};
</script>
  
<style lang="scss" scoped>
.layout {
    display: flex;
    height: 100%;
    background-color: $bg-white-0;

    &__content {
        width: -webkit-fill-available;
    }
}
</style>
  