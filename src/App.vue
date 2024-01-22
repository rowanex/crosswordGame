<template>
  <MyNotification v-if="notificationText">
    <p>{{ notificationText }}</p>
  </MyNotification>
  <CrosswordTable :ownerMap="crosswordOwnerMap" />
  <AnswerInput :isWin="isWin" @checkAnswer="checkAnswer" />
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from 'vue';
import CWG from 'cwg';
import MyNotification from './components/MyNotification.vue';
import AnswerInput from './components/AnswerInput.vue'
import CrosswordTable from './components/CrosswordTable.vue';

export default defineComponent({
  name: 'App',
  components: {
    MyNotification,
    CrosswordTable,
    AnswerInput
  },
  setup() {
    const words = ref<string[]>(['полк', 'пол', 'кол', 'клоп', 'потолок'])
    const revealedWords = ref<string[]>([]);

    const crossword = ref();
    const crosswordOwnerMap = ref();

    const countOfAnsweredWords = ref<number>(0);

    const isWrongAnswer = ref<boolean>(false);


    const generateCrossword = () => {
      crossword.value = CWG(words.value)
      crosswordOwnerMap.value = crossword.value.ownerMap;
    }


    const checkAnswer = (answer: string) => {
      if (!revealedWords.value.includes(answer.trim().toLowerCase())) {
        if (words.value.includes(answer.trim().toLowerCase())) {
          revealWord(answer.trim().toLowerCase());
          countOfAnsweredWords.value += 1;
          isWrongAnswer.value = false;
          revealedWords.value.push(answer.trim().toLowerCase());
        } else {
          isWrongAnswer.value = true;
        }
      }
    };


    const revealWord = (word: string) => {
      crossword.value.positionObjArr.forEach((position: { wordStr: string; isHorizon: any; yNum: number; xNum: number; }) => {
        if (position.wordStr.toLowerCase() === word) {
          const wordLength = position.wordStr.length;
          if (position.isHorizon) {
            for (let i = 0; i < wordLength; i++) {
              crossword.value.ownerMap[position.yNum][position.xNum + i].isRevealed = true;
            }
          } else {
            for (let i = 0; i < wordLength; i++) {
              crossword.value.ownerMap[position.yNum + i][position.xNum].isRevealed = true;
            }
          }
        }
      });
    }

    const isWin = computed(() => countOfAnsweredWords.value === words.value.length)

    const notificationText = computed(() => {
      if (isWin.value){
        return 'Вы победили';
      } else if (isWrongAnswer.value) {
        return 'Вы ошиблись';
      }
      return ''
    })

    onBeforeMount(() => {
      generateCrossword();
    })

    return { crosswordOwnerMap, checkAnswer, isWin, notificationText }
  }
});
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
}
</style>
