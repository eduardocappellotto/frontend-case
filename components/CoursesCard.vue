 
<template>
    <Card>
        <template #header>
            <div class="courses__header mb-6">
                <div>
                    <Icon name="ri:book-3-line" color="#525866" size="1.5rem" />
                    <span class="mx-4 courses__card">Cursos</span>
                </div>
                <div class="courses__header">
                    <div class="courses__searchinput mx-4">
                        <Icon class="mx-2" name="ri:book-3-line" color="#525866" size="1.5rem" />
                        <input type="text" placeholder="Pesquisar cursos..." />
                    </div>
                    <JButton class="pa-2" text="Ver todos" type="primary" font-size="14px" />
                </div>
            </div>
        </template>
        <template #body>
            <div class="ma-4">
                <table class="courses__table ">
                    <thead>
                        <tr>
                            <th class="py-2 px-3">Professor</th>
                            <th class="py-2">Nome do Curso</th>
                            <th class="py-2">Progresso</th>
                            <th class="py-2"></th>
                            <th class="py-2">Status</th>
                            <th class="py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(course, index) in courses" :key="index">
                            <td>
                                <div class="professor-info">
                                    <img :src="`/img/${course.teacher.imgUrl}.png`" alt="Avatar" class="avatar mr-4">
                                    <div>
                                        <p class="professor-info-name">{{ course.teacher.name }}</p>
                                        <p class="professor-info-role"> {{ course.teacher.role }}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="course-name">{{ course.course.name }}</p>
                                <p class="course-date">{{ course.course.start }} - {{ course.course.end }}</p>
                            </td>
                            <td>
                                <div class="progress-bar">
                                    <div :style="{ width: course.progress + '%' }"></div>
                                </div>

                            </td>
                            <td>

                                <span class="course-progress mx-2">{{ course.progress }}%</span>
                            </td>
                            <td>
                                <span v-if="course.progress !== 100" class="badge pa-1">
                                    <Icon name="ri:time-fill" size="1rem" color="#FF4A00" />
                                    Em andamento
                                </span>

                                <span v-if="course.progress === 100" class="badge pa-1">
                                    <Icon name="ri:time-fill" size="1rem" color="#14AB86" />
                                    Concluído
                                </span>

                            </td>
                            <td>
                                <Icon name="mdi:chevron-right" size="1.5rem" color="#868C98" />
                            </td>
                        </tr>
                    </tbody>


                </table>
                <div v-if="courses.length === 0" class="no-results">
                    <SvgEmptyCourses class="mt-10 mb-8" />
                    <span>Não há registros de cursos ainda.
                        Por favor, verifique mais tarde.</span>
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">

const courses = [
    {
        teacher: {
            name: "Nuray Aksoy",
            role: "Gerente de Produtos",
            imgUrl: "avatar_1",
        },
        course: {
            name: "Time Management",
            start: "ago 21",
            end: "set 04"
        },
        progress: 37,

    },
    {
        teacher: {
            name: "Nuray Aksoy",
            role: "Gerente de Produtos",
            imgUrl: "avatar_2",
        },
        course: {
            name: "Time Management",
            start: "ago 21",
            end: "set 04"
        },
        progress: 57,

    },
    {
        teacher: {
            name: "Nuray Aksoy",
            role: "Gerente de Produtos",
            imgUrl: "avatar_3",
        },
        course: {
            name: "Time Management",
            start: "ago 21",
            end: "set 04"
        },
        progress: 100,

    }, {
        teacher: {
            name: "Nuray Aksoy",
            role: "Gerente de Produtos",
            imgUrl: "avatar_4",
        },
        course: {
            name: "Time Management",
            start: "ago 21",
            end: "set 04"
        },
        progress: 100,

    }

];


</script>

<style lang="scss" scoped>
.courses {
    &__searchinput {
        border: 1px solid $stroke-soft-200;
        border-radius: 8px;

        & input {
            border: none;
            height: 100%;

            &:focus {
                outline: none;
            }
        }
    }

    &__header {
        display: flex;
        justify-content: space-between;
    }

    &__table {
        width: 100%;
        border-collapse: collapse;


        tr {
            th {
                text-align: center;
            }

            & th:first-child {
                text-align: start;
            }
        }


        td {
            height: 64px;
            vertical-align: middle;
        }

        th {
            background-color: $bg-weak-100;
        }

        .professor-info {
            display: flex;
            align-items: center;
            flex-direction: row;

            .avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }

            &-name {
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
                text-align: left;
            }

            &-role {
                color: $text-sub-500;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                text-align: left;
            }
        }

        .course {

            &-name {
                font-size: 14px;
                font-weight: 400;
                line-height: 16px;
                text-align: left;
            }

            &-date {
                color: $text-sub-500;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                text-align: left;
            }

            &-progress {
                color: $text-sub-500;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                text-align: left;
            }
        }

        .progress-bar {
            width: 100%;
            border-radius: 6px;
            background-color: #e0e0e0;

            & div {
                height: 6px;
                background-color: red;
            }
        }

        .badge {

            vertical-align: middle;
            font-size: 12px;
            font-weight: 500;
            line-height: 16px;
            text-align: left;
            border: 1px solid $stroke-soft-200;
            border-radius: 8px;
        }
    }
}

.no-results {
    display: flex;
    justify-content: center;
    flex-direction: column;

    align-items: center;


    color: $text-soft-400;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.006em;
    text-align: center;

}
</style>
