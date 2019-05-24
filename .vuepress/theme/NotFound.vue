<template>
  <div class="theme-container theme-container--404" @keyup.esc="toggleDebugPanel">
    <Header :title="$site.title" :desc="$site.description"></Header>
    <div class="content-wrapper">
      <h1>404</h1>
      <p>{{ getMsg() }}</p>
      <router-link to="/">Take me home.</router-link>
    </div>
    <Footer></Footer>
    <DebugPanel :enabled="debugPanelEnabled" :siteData="$site" :pageData="$page" ></DebugPanel>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import DebugPanel from "../components/DebugPanel.vue";

const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  name: 'NotFound',
  data() {
    return {
      debugPanelEnabled: false,
    };
  },
  methods: {
    toggleDebugPanel() {
      this.debugPanelEnabled = !this.debugPanelEnabled;
    },
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  },
  components: {
    Header,
    Footer,
    DebugPanel
  }
}
</script>

<style scoped lang="scss">
  /////  SCOPED NON-GLOBAL STYLES
  @import "../styles/vars.scss";

  .theme-container {
    background-color: $body-bg-color;
    color: $body-color;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &--404 .content-wrapper {
      text-align: center;
    }
  }
</style>
