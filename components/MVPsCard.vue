<template>
    <Card>
        <template #header>
            <div class="mvps__card ">
                <div>
                    <Icon name="ri:star-smile-line" color="#525866" size="1.5rem" />
                    <span class="mx-4 mvps__title">Destaque colaboradores</span>
                </div>
                <JButton class="pa-2" icon="ri:history-line" text="Histórico" type="primary" font-size="14px" />
            </div>
            <JDivider class="my-2" />
        </template>
        <template #body>
            <div class="mvps__tabs mx-4 mb-4">
                <JButton class="px-3 py-1" v-for="tab in tabs" :key="tab" :text="tab" :disabled="props.mvpCollaboratorPost"
                    :type="tab === activeTab ? 'primary' : 'default'" @click="activeTab = tab" />
            </div>
            <div v-if="props.mvpCollaboratorPost">
                <div v-if="activeTab === 'Geral'">
                    <div class="mvps__general">
                        <p class="mvps__general__name">{{ props.mvpCollaboratorPost.name }}</p>
                        <p class="mvps__general__role">{{ props.mvpCollaboratorPost.role }}</p>
                        <SvgMVPPlaceholder class="my-6" />
                        <p class="mvps__general__message ">Funcionário de melhor desempenho de dezembro!</p>
                    </div>
                </div>
                <div v-if="activeTab === 'Comentários'">
                    <div v-for="(comment, index) in props.mvpCollaboratorPost.comments" :key="comment.name">
                        <div class="mvps__comments mx-4">
                            <div class="mvps__comments-data">
                                <img :src="`/img/avatar_${index + 1}.png`" alt="avatar">
                                <div class="mx-2">
                                    <p class="mvps__comments-user">{{ comment.name }}</p>
                                    <p class="mvps__comments-comment">{{ comment.comment }}</p>
                                </div>
                            </div>
                            <p class="mvps__comments-like">{{ comment.likedByCurrentUser ? '💖' : '🩶' }}</p>
                        </div>
                        <JDivider class="mx-4 my-5" v-if="index + 1 < props.mvpCollaboratorPost.comments.length" />
                    </div>

                    <div>
                        <JButton class="px-24 py-2 mx-auto mt-10" icon="ri:pencil-line" text="Comment" type="primary"
                            font-size="14px" />
                    </div>
                </div>
                <div v-if="activeTab === 'Prêmios'">

                    <div class="mvps__general">
                        <p class="mvps__general__name">{{ props.mvpCollaboratorPost.prize }}</p>
                        <p class="mvps__general__role">{{ props.mvpCollaboratorPost.prizeDesc }}</p>
                        <SvgMVPPrize class="my-6" />
                        <p class="mvps__general__message ">Os funcionários do mês recebem recompensas
                        </p>
                    </div>
                </div>
            </div>
            <div class="mvps__noresults" v-else>
                <SvgEmptyMVPIllustration class="mt-10 mb-6" />
                <span>Sem registros do destaque do funcionário ainda. Por favor, verifique mais tarde.</span>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const props = ref({
    mvpCollaboratorPost: {
        id: 'a2b895b8-be95-43c8-849f-8bbdbb72fbc2',
        name: "John Doe",
        role: "Senior Developer",
        comments: [
            {
                name: "Alice Johnson",
                avatar: "https://via.placeholder.com/150",
                comment: "Parabéns, Matthew! 🔥!",
                likedByCurrentUser: true
            },
            {
                name: "Bob Smith",
                avatar: "https://via.placeholder.com/150",
                comment: "Really impressive work.",
                likedByCurrentUser: false
            },
            {
                name: "Carol White",
                avatar: "https://via.placeholder.com/150",
                comment: "Amazing attention to detail.",
                likedByCurrentUser: true
            }
        ],
        prize: "Cartão presente de R$ 50,00",
        prizeDesc: "Aproveite o prêmio, Matthew!"
    }
});


const tabs = ['Geral', 'Comentários', 'Prêmios'];
const activeTab = ref(tabs[0]);
</script>

<style lang="scss" scoped>
.mvps {
    &__card {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__tabs {
        display: flex;
        background-color: #F6F8FA;
        border-radius: 6px;
        justify-content: space-between;
    }

    &__general {

        display: flex;
        flex-direction: column;
        align-items: center;

        &__name {
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;
            text-align: center;
        }

        &__role {
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            text-align: center;

        }

        &__message {
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0em;
            text-align: center;

        }
    }

    &__comments {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        &-data {
            display: flex;
        }

        &-user {
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            text-align: left;
            color: $text-sub-500;
        }

        &-comment {

            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            text-align: left;
            color: $text-main-900
        }
    }

    &__collaboratoravatar {
        position: absolute;
        top: 25px;
        left: 100px;
        width: 105px;
    }

    &__noresults {
        display: flex;

        flex-direction: column;
        align-items: center;
        text-align: center;


        color: $text-soft-400;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;

        text-align: center;

    }

}
</style>
