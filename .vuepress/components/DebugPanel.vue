<template>
  <div v-if="enabled" class="debug-data">
      <h1>debug-data</h1>
      <p>
        You're seeing a debugging tool for the site author.
        If you need to leave this view, hit ESC again.
        <br>
        Wanna be a nice person? Email the site author, and tell them to
        disable the debugview on the live site.
      </p>

      <hr>

      <h2>$site</h2>
      <code>{{ siteData }}</code>

      <hr>

      <h2>$page</h2>
      <code>{{ pageData }}</code>
    </div>
</template>

<script>
export default {
  name: 'DebugPanel',
  props: {
    enabled: Boolean,
    siteData: Object,
    pageData: Object,
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/vars.scss";

  .debug-data {
    // flip display to "block"
    // to see debug data
    display: block;
    font-family: monospace;
    
    background-color: $debug-bg-color;
    color: $debug-color;
    
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    padding: 50px;
    overflow: auto;

    code {
      display: block;
      white-space: pre;
      background: none;
    }
  }
</style>
