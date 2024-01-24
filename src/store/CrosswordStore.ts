import { computed, ref, watch } from 'vue';
import { defineStore } from 'pinia';
import CWG from 'cwg';
import Position from '@/interfaces/Position';


export const useCrosswordStore = defineStore('crossword', () => {

    const words = ref<string[]>(['полк', 'пол', 'кол', 'клоп', 'потолок', 'лес'])
    const revealedWords = ref<string[]>([]);

    const crossword = ref();
    const crosswordOwnerMap = ref();

    const answer = ref('');

    const countOfAnsweredWords = ref<number>(0);


    const generateCrossword = () => {
        crossword.value = CWG(words.value)
        crosswordOwnerMap.value = crossword.value.ownerMap;
    }

    const addLetterToAnswer = (letter: string) => {
        answer.value += letter;
    }


    const checkAnswer = () => {
        if (!revealedWords.value.includes(answer.value.trim().toLowerCase())) {
            if (words.value.includes(answer.value.trim().toLowerCase())) {
                revealWord(answer.value.trim().toLowerCase());
                countOfAnsweredWords.value += 1;
                revealedWords.value.push(answer.value.trim().toLowerCase());
                answer.value = '';
            }
        }
    }


    const revealWord = (word: string) => {
        crossword.value.positionObjArr.forEach((position: Position) => {
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
        })
    }


    const isWin = computed(() => countOfAnsweredWords.value === words.value.length)


    const notificationText = computed(() => {
        if (isWin.value) {
            return 'Вы победили';
        }
        return ''
    })


    const letters = computed(() => {
        const uniqueLettersSet = new Set<string>();

        for (const word of words.value) {
            for (const letter of word) {
                uniqueLettersSet.add(letter);
            }
        }

        return uniqueLettersSet;
    })


    watch(answer, () => {
        checkAnswer();
    })


    return {
        words,
        revealedWords,
        crossword,
        crosswordOwnerMap,
        answer,
        countOfAnsweredWords,
        generateCrossword,
        checkAnswer,
        revealWord,
        isWin,
        notificationText,
        letters,
        addLetterToAnswer
    };
})