<template>
    <div class="reply-container">
        <input 
            type="text" 
            name="answer" 
            id="asnwer" 
            class="answer-input" 
            placeholder="Введите ответ!" 
            v-model="store.answer"
            :disabled="store.isWin" 
            @change="store.checkAnswer"
        >
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
  