<template>
  <div class="page-footer">
    © {{ getCurrentYear }} Your Copyright Here
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    getCurrentYear: () => {
      return new Date().getFullYear();
    }
  },
}
</script>

<style scoped lang="scss">
  @import "../styles/vars.scss";

  .page-footer {
    background-color: $footer-bg-color;
    color: $footer-color;
    padding: $space-unit;
    box-shadow: $box-shadow-up;
  }
</style>
