<template>
    <div class="reply-container">
        <div>
            <input type="text" name="answer" id="asnwer" class="answer-input" placeholder="Введите ответ!"
                v-model="store.answer" disabled>
        </div>
        <div class="answer-btns">
            <button class="answer-btn" @click="store.checkAnswer()">
                Ответить!
            </button>
            <button class="clear-btn" @click="store.answer = ''">
                Очистить ответ!
            </button>
            <button class="clear-one-btn" @click="store.deleteLetterFromAnswer()">
                <svg class="arrow-left-4" viewBox="0 0 100 85">
                    <polygon
                        points="58.263,0.056 100,41.85 58.263,83.641 30.662,83.641 62.438,51.866 0,51.866 0,31.611 62.213,31.611 30.605,0 58.263,0.056" />
                </svg>
            </button>
        </div>

    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useCrosswordStore } from '@/store/CrosswordStore'

export default defineComponent({
    name: 'AnswerInput',
    setup() {

        const store = useCrosswordStore();

        return { store }
    }
});
</script>
  
  
<style scoped>
.reply-container {
    display: flex;
    flex-direction: column;
    gap: 20px
}

.answer-input {
    width: 100%;
}

.answer-btns {
    display: flex;
    gap: 20px;
}
.answer-btn{
    cursor: pointer;
}
.clear-btn {
    cursor: pointer;
}
.clear-one-btn {
    cursor: pointer;
}
.arrow-left-4 {
    margin: 10px 4px;
    width: 20px;
    height: 20px;
}
.arrow-left-4 polygon {
    fill: black; 
}
.arrow-left-4 {
    transform: rotate(180deg);
}
</style>
  