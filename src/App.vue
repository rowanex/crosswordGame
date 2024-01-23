<template>
  <MyNotification v-if="store.notificationText">
    <p>{{ store.notificationText }}</p>
  </MyNotification>
  <CrosswordTable/>
  <AnswerInput/>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import { useCrosswordStore } from '@/store/CrosswordStore'
import MyNotification from './components/MyNotification.vue';
import AnswerInput from './components/AnswerInput.vue'
import CrosswordTable from './components/CrosswordTable.vue';

export default defineComponent({
  name: 'App',
  components: {
    MyNotification,
    CrosswordTable,
    AnswerInput
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

<style>
#app {
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
}
</style>
