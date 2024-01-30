<template>
    <div class="crossword">
        <table>
            <tr v-for="(row, rowIndex) in store.crosswordOwnerMap" :key="rowIndex" class="crossword__row">
                <CellComponent v-for="(cell, colIndex) in row" :cell="cell" :key="colIndex"/>
            </tr>
        </table>
    </div>

    <!-- <div class="crossword-1">
        <table>
            <tr v-for="(row, rowIndex) in store.crosswordOwnerMap" :key="rowIndex">
                <td v-for="(cell, colIndex) in row" :key="colIndex">
                    <div v-if="cell && typeof cell === 'object' && cell.isRevealed">
                        {{ cell.letter }}
                    </div>
                    <div v-else-if="cell && typeof cell === 'object' && !cell.isRevealed">
                        ?
                    </div>
                    <div v-else class="none"></div>
                </td>
            </tr>
        </table>
    </div> -->

    <!-- <div class="crossword-2">
        <div v-for="(row, rowIndex) in store.crosswordOwnerMap" :key="rowIndex" class="row">
            <div v-for="(cell, colIndex) in row" :key="colIndex" class="cell">
                <div v-if="cell && typeof cell === 'object' && cell.isRevealed" class="cell_letter">
                    {{ cell.letter }}
                </div>
                <div v-else-if="cell && typeof cell === 'object' && !cell.isRevealed" class="cell_letter">
                    ?
                </div>
            </div>
        </div>
    </div> -->
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useCrosswordStore } from '@/store/CrosswordStore';
import CellComponent from './CellComponent.vue'

export default defineComponent({
    name: 'CrosswordTable',
    components: {
        CellComponent
    },
    setup() {
        const store = useCrosswordStore();


        return { store }
    }
});
</script>

  
<style scoped>
table {
    border-collapse: collapse;
}

td {
    border: 1px solid #000;
    width: 30px;
    height: 30px;
    text-align: center;
}

.crossword-2 {
    display: flex;
    flex-direction: column;
}

.row {
    display: flex;
}

.cell {
    border: 1px solid #000;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.none {
    display: none;
}
</style>
  