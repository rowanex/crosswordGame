<template>
    <AnswerInput/>
    <div class="words">
        <LetterButton v-for="letter in store.letters" :letter="letter" :key="letter" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useCrosswordStore } from '@/store/CrosswordStore'
import LetterButton from './LetterButton.vue';
import AnswerInput from '@/components/AnswerInput.vue'

export default defineComponent({
    name: 'AnswerComponent',
    components: {
        LetterButton,
        AnswerInput
    },
    setup() {
        const store = useCrosswordStore();

        return { store }
    }
});
</script>
  
  
<style scoped>
.words {
    display: flex;
    gap: 20px;
}
</style>
  