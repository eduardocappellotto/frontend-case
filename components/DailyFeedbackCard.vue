<template>
    <Card>
        <template #header>
            <div class="dailyfeedback__card ">
                <div>
                    <Icon name="ri:discuss-line" color="#525866" size="1.5rem" />
                    <span class="mx-4 dailyfeedback__title">Feedback Diário</span>
                </div>

            </div>
            <JDivider class="my-3" />
        </template>
        <template #body>
            <div class="dailyfeedback__content">
                <div class="highlight-icon my-4 pa-2">
                    <Icon name="ri:user-smile-line" color="#ff4a00" size="1.5rem" />
                </div>
                <h2 class="mb-2">Como você classificaria seu humor hoje?</h2>

                <p class="subtitle mb-4">Compartilhe seu humor para nos ajudar a entender.</p>
                <div class="feedback-input">
                    <div class="emoji-tabs">
                        <button v-for="(emoji, index) in emojis" :key="index" class="py-2 px-4"
                            :class="{ 'emoji-tab': true, 'active': selectedEmoji === emoji }" @click="selectEmoji(emoji)">
                            {{ emoji }}
                        </button>

                    </div>
                    <textarea placeholder="Adicionar comentário..."></textarea>

                </div>
                <JButton class="px-32 py-2 mt-4" text="Enviar" type="primary" />
            </div>
        </template>
    </Card>
</template>
<script setup lang="ts">

import { ref } from 'vue';

const emojis = ['😢', '🙁', '😐', '🙂', '😄'];
const selectedEmoji = ref(emojis[0]);

const selectEmoji = (emoji: string) => {
    selectedEmoji.value = emoji;
};
</script>

  
<style lang="scss" scoped>
.dailyfeedback {
    &__card {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;

        & h2 {
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            text-align: center;
        }

        & .subtitle {
            color: $text-sub-500;
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0em;
            text-align: center;

        }
    }
}

.emojis {
    display: flex;
    justify-content: space-around;

    span {
        cursor: pointer;
        font-size: 24px;
    }
}

.emoji-tabs {
    display: flex;
    justify-content: space-around;


    .emoji-tab {
        background: none;
        border: none;
        border-radius: 5px;

        cursor: pointer;
        font-size: 20px;
        transition: all 0.3s;

        &:focus {
            outline: none;
        }

        &.active {
            opacity: 0.6;
        }
    }
}

.feedback-input {
    border: 1px solid $stroke-soft-200;
    border-radius: 8px;
}

.highlight-icon {
    background-color: $primary-lighter;
    border-radius: 50%;
}

textarea {
    width: 100%;
    height: 84px;

    resize: vertical;
    outline: none;

    border: none;
    border-radius: 8px;
}
</style>
  