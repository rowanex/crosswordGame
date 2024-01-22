<template>
    <div class="crossword-1">
        <table>
            <tr v-for="(row, rowIndex) in ownerMap" :key="rowIndex">
                <td v-for="(cell, colIndex) in row" :key="colIndex">
                    <div v-if="cell && typeof cell === 'object' && cell.isRevealed">
                        {{ cell.letter }}
                    </div>
                    <div v-else-if="cell && typeof cell === 'object' && !cell.isRevealed">
                        ?
                    </div>
                    <div v-else>
                        <div></div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CrosswordTable',
    props: {
        ownerMap: {
            required: true,
            type: Object
        }
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
</style>
  