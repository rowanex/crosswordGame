import { computed, ref } from 'vue';
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
    const isFall = ref<boolean>(false);
    const isGuessed = ref<boolean>(false);

    const generateCrossword = () => {
        crossword.value = CWG(words.value)
        crosswordOwnerMap.value = crossword.value.ownerMap;
    }


    const addLetterToAnswer = (letter: string) => {
        answer.value += letter;
    }

    const deleteLetterFromAnswer = () => {
        answer.value = answer.value.slice(0, -1);
    }


    const checkAnswer = () => {
        const trimmedAnswer = answer.value.trim().toLowerCase();

        if (!revealedWords.value.includes(trimmedAnswer)) {
            isGuessed.value = false;

            if (words.value.includes(trimmedAnswer)) {
                isFall.value = false;
                revealWord(trimmedAnswer);
                countOfAnsweredWords.value += 1;
                revealedWords.value.push(trimmedAnswer);
                answer.value = '';
            } else {
                isFall.value = true;
            }
        } else {
            isGuessed.value = true;
            isFall.value = false;
        }
    };



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
        if (isFall.value) {
            return 'Вы ошиблись'
        }
        if (isGuessed.value) {
            return 'Вы уже отгадали это слово'
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
        addLetterToAnswer,
        deleteLetterFromAnswer
    };
})