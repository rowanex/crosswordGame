<template>
    <div class="counter">
        {{ store.countOfAnsweredWords }} / {{ store.words.length }}
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useCrosswordStore } from '@/store/CrosswordStore'

export default defineComponent({
    name: 'WordCounter',
    setup() {

        const store = useCrosswordStore();
        return { store }
    }
});
</script>
  
  
<style scoped></style>
  