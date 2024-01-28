<template>
    <div class="card">
        <div class="card__header mt-4 mx-4">

            <slot name="header"></slot>
        </div>
        <div class="card__body">

            <slot name="body"></slot>
        </div>
    </div>
</template>
 
  
<style lang="scss" scoped>
.card {
    border: 1px solid #ddd;
    border-radius: 16px;



    width: 100%;


    height: 100%;

    &__header {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: -0.011em;
        text-align: left;
        color: $text-main-900
    }

    &__body {}
}
</style>
  