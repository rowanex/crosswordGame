<template>
    <MyNotification v-if="store.notificationText">
        <p>{{ store.notificationText }}</p>
    </MyNotification>
    <WordCounter/>
    <CrosswordTable />
    <AnswerComponent v-if="!store.isWin" />
</template>
  
<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import { useCrosswordStore } from '@/store/CrosswordStore'
import MyNotification from '@/components/MyNotification.vue';
import CrosswordTable from '@/components/CrosswordTable.vue';
import AnswerComponent from '@/components/AnswerComponent.vue';
import WordCounter from './WordCounter.vue';

export default defineComponent({
    name: 'CrosswordGame',
    components: {
        MyNotification,
        CrosswordTable,
        AnswerComponent,
        WordCounter
    },
    setup() {

        const store = useCrosswordStore();

        onBeforeMount(() => {
            store.generateCrossword();
        })

        return { store }
    }
});
</script>
  
<style scoped>
</style>
  