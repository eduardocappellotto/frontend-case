<template>
    <div class="j-header mt-2 mb-10 mx-10">
        <div class="j-header__usercontent">
            <img class="j-header__usercontent__avatar" src="/img/avatar.png" alt="User Photo" />
            <div class="j-header__usercontenttext ml-4">
                <span class="j-header__usercontenttext__username mb-1">Sophia Williams</span>
                <span class="j-header__usercontenttext__welcomeback"> Bem-vinda de volta 👋</span>
            </div>
        </div>

        <div class="j-header__buttons">
            <Icon class="mx-6" name="ri:search-2-line" size="1.5rem" color="#525866" />
            <Icon class="mx-6" name="streamline:notification-alarm-2" size="1.5rem" color="#525866" />
            <JButton class="pa-2 mx-3" icon="ri:calendar-check-line" :revert="false" text="Calendário" type="primary"
                font-size="14px" />
            <JButton class="pa-2" icon="ri:add-line" text="Nova Solicitação" type="secondary" font-size="14px" />
        </div>
    </div>
</template>
<style scoped lang="scss">
.j-header {

    width: 100%;
    height: 88px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & .j-header__usercontent {
        display: flex;

        & .j-header__usercontenttext {
            display: flex;
            flex-direction: column;

            & .j-header__usercontenttext__username {
                font-family: Inter;
                font-size: 18px;
                font-weight: 500;
                line-height: 24px;
                letter-spacing: -0.015em;
                text-align: left;
            }

            & .j-header__usercontexttext__welcomeback {
                font-family: Inter;
                font-size: 14px;
                font-weight: 400;
                line-height: 20px;
                letter-spacing: -0.006em;
                text-align: left;

            }
        }
    }

    &__buttons {
        display: flex;
        align-items: center;
    }

}
</style>