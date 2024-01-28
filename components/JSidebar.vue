<template>
    <aside class=" layout__sidebar mt-6 mx-6"
        :class="{ 'collapse': isExpandedHorizontally, 'vertical__collapse': isExpandedVertically }">
        <div class="j-sidebar__upper">
            <img class="ma-2" src="/img/company.png" alt="Company Logo" @click="toggleSidebarHorizontally" />
            <div v-if="!isExpandedHorizontally" class="j-sidebar__info mx-1">
                <p class="j-sidebar__title">{{ company }}</p>
                <p class="j-sidebar__subtitle">{{ team }}</p>
            </div>
            <Icon v-if="!isExpandedHorizontally" class="ml-7" name="mdi:chevron-down" size="1.5rem" color="#868C98"
                @click="toggleSidebarVertically" />
        </div>

        <JDivider :class="isExpandedVertically ? 'mt-6' : 'my-6'" />

        <div class="j-sidebar__middle" v-if="!isExpandedVertically">
            <div class="j-sidebar__section mb-6">
                <h3 class="j-sidebar__subtitle mb-3">MAIN</h3>
                <NavButton v-for="(item, index) in favsItems" :active="item.active" :left-icon="item.icon"
                    :expanded="isExpandedHorizontally" @click="updateActiveItem(index)" :text="item.label" />
            </div>
            <div class="j-sidebar__section mb-12">
                <h3 class="j-sidebar__subtitle mb-3">FAVS</h3>
                <FavNavButton v-for="item in navbarFavItems" :left-icon="item.icon" :color="item.color" :text="item.label"
                    :expanded="isExpandedHorizontally" :shortcut="item.shortcut" />
            </div>
            <div class="j-sidebar__section">
                <NavButton v-for="item in miscShortcuts" :active="item.active" :left-icon="item.icon"
                    :expanded="isExpandedHorizontally" :text="item.label" />

            </div>
        </div>

        <JDivider class="my-4" v-if="!isExpandedVertically" />
        <div class="j-sidebar__footer" v-if="!isExpandedVertically">
            <div class="j-sidebar__user">
                <img src="/img/avatar.png" alt="User Photo" />
                <Icon class="j-sidebar__useravatarverified" v-if="isExpandedHorizontally" name="ri:verified-badge-fill"
                    size="1rem" color="#35b9e9" />
                <div class="j-sidebar__info ma-2" v-if="!isExpandedHorizontally">
                    <p class="j-sidebar__username">{{ username }}
                        <Icon name="ri:verified-badge-fill" size="1rem" color="#35b9e9" />
                    </p>
                    <p class="j-sidebar__email">{{ email }}</p>
                </div>

                <div v-if="!isExpandedHorizontally" class="j-sidebar__collapsebutton">
                    <Icon name="mdi:chevron-right" size="1.5rem" color="#868C98" @click="toggleSidebarHorizontally" />
                </div>
            </div>
        </div>

    </aside>
    <JDivider :vertical="true" />
</template>
  
<script setup lang="ts">

const company = 'Jurisoft';
const team = 'Marketing Jurídico';

const username = 'Sophia Williams';
const email = 'sophia@jurisoft.com';

const isExpandedHorizontally = ref(false);
const isExpandedVertically = ref(false);

const toggleSidebarHorizontally = () => {
    isExpandedHorizontally.value = !isExpandedHorizontally.value;
};

const toggleSidebarVertically = () => {
    isExpandedVertically.value = !isExpandedVertically.value;
}

const checkWindowSize = () => {
    if (window.innerWidth < 768) {
        if (!isExpandedHorizontally.value) {
            toggleSidebarHorizontally();
        }
    } else {
        if (isExpandedHorizontally.value) {
            toggleSidebarHorizontally();
        }
    }
};

onMounted(() => {
    window.addEventListener('resize', checkWindowSize);
    checkWindowSize();
});

onUnmounted(() => {
    window.removeEventListener('resize', checkWindowSize);
});

const navbarMainItems = [
    {
        label: "Dashboard",
        icon: "mingcute:layout-grid-line",
        active: true,
    },
    {
        label: "Calendário",
        icon: "ri:calendar-line",
        active: false,
    },
    {
        label: "Descanso",
        icon: "majesticons:timer-line",
        active: false,
    },
    {
        label: "Projetos",
        icon: "mingcute:folders-line",
        active: false,
    },
    {
        label: "Times",
        icon: "ri:group-line",
        active: false,
    },
    {
        label: "Integrações",
        icon: "ri:equalizer-line",
        active: false,
    },
    {
        label: "Benefícios",
        icon: "ri:star-smile-line",
        active: false,
    },
    {
        label: "Documentos",
        icon: "ri:file-cloud-line",
        active: false,
    },
]

const navbarFavItems = [{
    label: "Loom Mobile App",
    icon: "ri:equalizer-line",
    color: '#6E3FF3',
    shortcut: '1'
},
{
    label: "Monday Redesign",
    icon: "ri:star-smile-line",
    color: '#E255F2',
    shortcut: '2'

},
{
    label: "Udemy Courses",
    icon: "ri:file-cloud-line",
    color: '#DF1C41',
    shortcut: '3'
},]



const miscShortcuts = [{
    label: "Configurações",
    icon: "ri:settings-2-line",
    active: false,
},
{
    label: "Suporte",
    icon: "ri:headphone-line",
    active: false,
},]

const favsItems = computed(() => {
    return navbarMainItems.map((item, index) => {
        return {
            ...item,
            active: index === activeItemIndex.value,
        };
    });
});

const activeItemIndex = ref(0);

const updateActiveItem = (index: number) => {
    activeItemIndex.value = index;
}


</script>
  
<style scoped lang="scss">
.layout__sidebar {
    height: auto;
    min-width: 225px;

    &.vertical__collapse {
        height: auto;
    }

    &.collapse {
        min-width: 28px;
        height: calc(100vh - 40px);


        & .j-sidebar__middle {
            align-items: center;
        }

        .j-sidebar__section {
            align-items: center;
        }


    }

    .j-sidebar {
        transition: width 0.3s;

        &__middle {
            display: flex;
            flex-direction: column;
        }

        &__section {
            display: flex;
            flex-direction: column;
        }

        &__subtitle {
            font-size: 12px;
            color: $text-soft-400;
            font-weight: 500;
        }

        &__upper {
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-items: center;

            &:hover {
                opacity: 0.8;
            }
        }

        &__info {
            display: flex;
            flex-direction: column;
        }

        &__title {
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            color: $text-main-900;

        }

        &__subtitle {
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: $text-sub-500
        }

        &__user {
            display: flex;
            align-items: center;
            justify-content: space-around;

            position: absolute
        }

        &__useravatarverified {
            position: absolute;
            top: 0px;
            right: 0%;
            background-color: white;
            border-radius: 50%;
        }

        &__username {
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            color: $text-main-900;
        }

        &__email {
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            color: $text-sub-500;
        }

        &__collapsebutton {
            :hover {
                opacity: 0.8;
                border-radius: 50%;
                background-color: $bg-weak-100;
                cursor: pointer;
            }
        }
    }
}
</style>
  