<template>
    <div class="reply-container">
        <input 
            type="text" 
            name="answer" 
            id="asnwer" 
            class="answer-input" 
            placeholder="Введите ответ!" 
            v-model="answer"
            :disabled="isWin" 
            @change="handlerAnswer"
        >
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'AnswerInput',
    props: {
        isWin: {
            required: true,
            type: Boolean
        }
    },
    setup(props, { emit }){
        const answer = ref<string>('');

        const handlerAnswer = () => {
            emit('checkAnswer', answer.value)
            answer.value = ''
        }

        return { answer, handlerAnswer }
    }
});
</script>
  
  
<style scoped></style>
  