<template>
    <div class="words__word" @click="store.addLetterToAnswer(letter)">
        {{ letter }}
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useCrosswordStore } from '@/store/CrosswordStore'

export default defineComponent({
    name: 'LetterButton',
    props: {
        letter: {
            type: String,
            required: true,
        }
    },
    setup() {
        const store = useCrosswordStore();

        return { store }

    }
});
</script>
  
  
<style scoped>
.words__word {
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    background-color: darkgrey;
    cursor: pointer;
    transition: all 0.5s;
}
</style>
  