<template>
    <div class="layout">
        <JSidebar />
        <JHeader />
    </div>

    <slot />
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
}
</style>
  