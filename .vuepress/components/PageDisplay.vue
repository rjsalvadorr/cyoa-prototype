<template>
  <div class="page-display">
    <div class="snippets">
      <div v-for="snippet in cyoaData.snippets" :class="`snippet snippet--${snippet.id}`">
        <h2 v-if="snippet.title">{{snippet.title}}</h2>
        <p>{{snippet.text}}</p>
      </div>
    </div>
    <div class="choices">
      <div v-for="choice in cyoaData.choices" :class="`choice choice--${choice.id}`">
        <p>{{choice.text}}</p>
      </div>
    </div>
    <hr>
    <code>{{JSON.stringify(cyoaData, null, 2)}}</code>
  </div>
</template>

<script>
import * as cyoaData from './cyoa-data.json';
export default {
  name: 'PageDisplay',
  props: {
    snippets: Array,
    choices: Array,
  },
  data: function() {
    return {
      currentSnippet: 1,
      cyoaData: cyoaData.default,
    }
  },
  computed: {
    getCurrentYear: () => {
      return new Date().getFullYear();
    },
  },
}
</script>

<style scoped lang="scss">
</style>
