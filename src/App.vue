<template>
  <CrosswordGame/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CrosswordGame from './components/CrosswordGame.vue';

export default defineComponent({
  name: 'App',
  components: {
    CrosswordGame
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
