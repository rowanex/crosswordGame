<template>
    <td v-if="typeof cell === 'object'" class="crossword__cell">
        <div v-if="cell && typeof cell === 'object' && cell.isRevealed">
            {{ cell.letter }}
        </div>
        <div v-else-if="cell && typeof cell === 'object' && !cell.isRevealed">
            ?
        </div>
    </td>
    <td v-else class="crossword__cell_not-visible">
    </td>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CellComponent',
    components: {},
    props: {
        cell: {
            type: Object,
            required: true,
            default: () => undefined,
        }
    }
});
</script>
  
  
<style scoped>
.crossword__cell_not-visible {
    border: 0;
    width: 0;
    height: 0;
}
</style>
  