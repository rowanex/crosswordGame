<template>
    <div class="reply-container">
        <input 
            type="text" 
            name="answer" 
            id="asnwer" 
            class="answer-input" 
            placeholder="Введите ответ!" 
            v-model="store.answer"
            disabled
        >
        <button 
          class="clear-btn"
          @click="store.answer = ''"
        >
            Очистить ответ!
        </button>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useCrosswordStore } from '@/store/CrosswordStore'

export default defineComponent({
    name: 'AnswerInput',
    setup(){

        const store = useCrosswordStore();

        return { store }
    }
});
</script>
  
  
<style scoped></style>
  