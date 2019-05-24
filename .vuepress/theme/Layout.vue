<template>
  <div class="theme-container" @keyup.esc="toggleDebugPanel()">
    <div class="theme-header">
      <Header :title="$site.title" :desc="$site.description"></Header>
    </div>
    <div class="theme-content">
      <div :class="getContentClasses($page)">
        <slot>
          <!-- if <Layout> has children, they go here -->
        </slot>
        <Content>
        </Content>
        <PostList :enabled="isCategoryPage($page)" :posts="filterPostsByCategory($site.pages, $page.frontmatter.category)"></PostList>
      </div>
      <Footer></Footer>
    </div>
    <DebugPanel :enabled="debugPanelEnabled" :siteData="$site" :pageData="$page" ></DebugPanel>
  </div>
</template>

<script>
import { DateTime } from "luxon";
import filter from "lodash/filter";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import PostList from "../components/PostList.vue";
import DebugPanel from "../components/DebugPanel.vue";

export default {
  name: 'Layout',
  data() {
    return {
      debugPanelEnabled: false,
    };
  },
  // mounted() {
  //   // add stuff for component mount
  // },
  // beforeDestroy() {
  //   // add stuff for component cleanup
  // },
  methods: {
    getContentClasses(pageData) {
      let classes = 'content-wrapper';
      if(pageData.frontmatter.type === "post") {
        classes += ' content-wrapper--post';
      }
      else if(pageData.frontmatter.type === "category") {
        classes += ' content-wrapper--category';
      }
      return classes;
    },
    toggleDebugPanel() {
      this.debugPanelEnabled = !this.debugPanelEnabled;
    },
    isCategoryPage(pageData) {
      return pageData.frontmatter.type === 'category';
    },
    filterPostsByCategory(allPages, category) {
      // Filtering by category
      const filteredPosts = filter(allPages, (page) => {
        const isPost = page.frontmatter.type === "post";
        const isCorrectCategory = page.frontmatter.category === category;
        return isPost && isCorrectCategory;
      });

      // Sorting by reverse chronological order (newest first)
      return filteredPosts.sort((post1, post2) => {
        const dt1 = DateTime.fromISO(post1.frontmatter.date).toUTC();
        const dt2 = DateTime.fromISO(post2.frontmatter.date).toUTC();

        // post1 was written after post2
        if(dt1 > dt2) {
          return -1;
        } else if(dt1 < dt2) {
          return 1
        }
        // dt1 === dt2
        return 0;
      });
    },
  },
  components: {
    Header,
    Footer,
    PostList,
    DebugPanel
  }
}
</script>

<style lang="scss">
  /////  GLOBAL STYLES
  @import "../styles/global.scss";
</style>

<style scoped lang="scss">
  /////  SCOPED NON-GLOBAL STYLES
  @import "../styles/vars.scss";

  .theme-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $body-bg-color;
    color: $body-color;
    display: flex;
    flex-direction: column;

    .theme-content {
      overflow: auto;
      flex-grow: 1;
    }
  }
</style>
