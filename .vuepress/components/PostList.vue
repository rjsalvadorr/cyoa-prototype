<template>
  <div class="post-links" v-if="enabled">
    <div class="post-link-wrapper" v-for="post in posts">
      <div class="post-link">
        <a class="actual-plink" :href="post.path" >
          <img class="post-link__img" :src="'/images/thumb-' + post.title + '.jpg'" />
        </a>
        <div class="post-link__text">
          <a class="actual-plink" :href="post.path" >
            <h2 class="post-link__title">{{ post.frontmatter.title }}</h2>
          </a>
          <span class="post-link__subtitle" v-if="post.frontmatter.subtitle">{{ post.frontmatter.subtitle }}</span>
          <span class="post-link__date">{{ getFormattedDate(post.frontmatter.date) }}</span>
          <p class="post-link__excerpt" v-if="post.excerpt">{{ parseExcerptText(post.excerpt) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from "luxon";

export default {
  name: 'PostList',
  props: {
    enabled: Boolean,
    posts: Array,
  },
  methods: {
    getFormattedDate(rawDate) {
      const dt = DateTime.fromISO(rawDate).toUTC();
      return dt.toLocaleString(DateTime.DATE_MED);
    },
    parseExcerptText(excerptHtml) {
      /*
       * Parses relevant content from an expected input like so:
       * 
       * <h1 id="art-1"><a class="header-anchor" href="#art-1" aria-hidden="true">#</a>art-1</h1>
       * <p>Bacon ipsum dolor amet porchetta anim meatball aliquip</p>
      */
      const content = excerptHtml.split(/<\/?p>/);
      return content[content.length - 2];
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/vars.scss";

  .post-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .post-link-wrapper {
      margin-top: $space-unit * 2.5;
      flex: 0 0 100%;
    }

    .post-link {
      display: block;
      text-decoration: none;

      &__img {
        float: left;
        display: inline-block;
        width: 25%;
        border-radius: $border-radius;
      }

      &__text {
        display: inline-block;
        width: 75%;
        padding-left: $space-unit * 0.66;
      }

      &__title {
        margin-top: 0;
        margin-bottom: 5px;
        display: inline-block;
      }

      &__subtitle, &__date {
        display: block;
      }
    }
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
    .post-links {
      .post-link-wrapper {
        flex: 0 0 calc(50% - 25px);
      }
      .post-link {
        display: block;
        text-decoration: none;

        &__img {
          width: 33%;
        }

        &__text {
          width: 67%;
        }
      }
    }
  }
</style>
