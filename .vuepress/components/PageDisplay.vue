<template>
  <div class="cyoa">
    <div v-if="getCurrentData.snippet" :class="`snippet snippet--${getCurrentData.snippet.id}`">
      <h2 v-if="getCurrentData.snippet.title">{{getCurrentData.snippet.title}}</h2>
      <p>{{getCurrentData.snippet.text}}</p>
    </div>
    <div v-if="getCurrentData.choices" class="choices">
        <button v-for="link in getCurrentData.choices.links"
          type="button"
          :class="`btn btn--link btn--${link.dest}`"
          v-bind:key="`${getCurrentData.choices.id}-${link.dest}`"
          :data-dest="link.dest"
          v-on:click="changeSnippet"
        >{{link.label}}</button>
    </div>
    <hr>
    <code>{{JSON.stringify(getCurrentData, null, 2)}}</code>
  </div>
</template>

<script>
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
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
    getCurrentData: function() {
      const currentId = this.currentSnippet;

      const cSnippet = filter(this.cyoaData.snippets, (o) => { return o.id === currentId; });
      const cChoices = filter(this.cyoaData.choices, (o) => { return o.id === currentId });
      
      console.log(
        currentId,
        this.cyoaData.snippets,
        this.cyoaData.choices,
        cSnippet,
        cChoices,
      );
      return {
        snippet: isEmpty(cSnippet) ? null : cSnippet[0],
        choices: isEmpty(cChoices) ? null : cChoices[0],
      };
    }
  },
  methods: {
    changeSnippet: function(evt) {
      const destFromButton = parseInt(evt.target.dataset.dest);
      if(destFromButton) {
        this.currentSnippet = destFromButton;
      }
    }
  },
}
</script>

<style scoped lang="scss">
  @import "../styles/vars.scss";

  .cyoa {
    .btn {
      margin-right: 10px;
      padding: 10px;
      height: 50px;
      border-radius: 4px;
      background-color: $palette-secondary;
      color: #eee;
    }
  }
</style>
