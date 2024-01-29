<template>
    <div class="container mx-10">
        <div class="div1">
            <TimeTrackerCard />
        </div>
        <div class="div2">
            <DailyHoursCard :daily-hours="barData" />
        </div>
        <div class="div3">Div 3</div>
        <div class="div4">Div 4</div>
        <div class="div5">Div 5</div>
        <div class="div6">Div 6</div>

    </div>
</template>

<script setup lang="ts">

const barData = [
    { percentage: 30, color: '#F2AE40', label: 'Descanso', minutes: 60 },
    { percentage: 50, color: '#35B9E9', label: 'Ativo', minutes: 160 },
    { percentage: 20, color: '#6E3FF3', label: 'Hora Extra', minutes: 759 },
];

</script>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 1rem;

    height: 85vh;
    overflow: auto;
}

.div1 {
    grid-area: 1 / 1 / 3 / 2;

    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.div2 {
    grid-area: 1 / 2 / 2 / 3;

    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.div3 {
    grid-area: 2 / 2 / 3 / 3;
    background-color: #5733ff;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.div4 {
    grid-area: 1 / 3 / 3 / 4;
    background-color: #ff33f3;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.div5 {
    grid-area: 3 / 1 / 5 / 3;
    background-color: #33f3ff;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.div6 {
    grid-area: 3 / 3 / 5 / 4;
    background-color: #f3ff33;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
}


@media (max-width: 1024px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }

    .div1 {
        grid-area: 1 / 1 / 2 / 2;
    }

    .div2 {
        grid-area: 1 / 2 / 2 / 3;
    }

    .div3 {
        grid-area: 2 / 1 / 3 / 2;
    }

    .div4 {
        grid-area: 2 / 2 / 3 / 3;
    }

    .div5 {
        grid-area: 3 / 1 / 4 / 2;
    }

    .div6 {
        grid-area: 3 / 2 / 4 / 3;
    }
}


@media (max-width: 768px) {
    .container {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(6, 1fr);
    }

    .div1,
    .div2,
    .div3,
    .div4,
    .div5,
    .div6 {
        grid-area: auto;
        min-height: 23.75rem;
        max-width: 22rem;
    }
}
</style>
