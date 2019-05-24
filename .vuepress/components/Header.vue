<template>
  <div class="page-header">
    <div class="header-top">
      <div class="header-wrapper">
        <h1 class="page-title">{{ title }}</h1>
        <span class="page-desc">{{ desc }}</span>
      </div>
      <NavMenu class="nav-wrapper nav-wrapper--desktop" :navigationLinks="$site.themeConfig.nav"></NavMenu>
      <div class="btn-mobile-burger" v-on:click="toggleMobileMenu">
        <BurgerIcon :class="getButtonClass()" />
      </div>
    </div>
    <div class="header--mobile" v-if="mobileMenuOpen">
      <NavMenu class="nav-wrapper nav-wrapper--mobile" :navigationLinks="$site.themeConfig.nav"></NavMenu>
    </div>
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import BurgerIcon from "./BurgerIcon.vue";

export default {
  name: 'Header',
  props: {
    title: String,
    desc: String,
    mobileMenuOpen: false,
  },
  components: {
    NavMenu,
    BurgerIcon,
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      console.log(this.mobileMenuOpen);
    },
    getButtonClass() {
      const iconModifier = this.mobileMenuOpen ? 'open' : 'closed';
      return `mobile-burger-icon mobile-burger-icon--${iconModifier}`;
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/vars.scss";


  $title-height: 40px;
  $desc-height: 12px;
  $title-margin: 8px;

  $title-height-mobile: 30px;
  $desc-height-mobile: 10px;

  $burger-width: 40px;
  $burger-height: 40px;
  $burger-width-mobile: 30px;
  $burger-height-mobile: 30px;

  .page-header {
    background-color: $header-bg-color;
    color: $header-color;
    padding: $space-unit;
    position: relative;
    z-index: $z-index-header;
    box-shadow: $box-shadow-down;

    .header--mobile {
      display: block;
      
      position: absolute;
      z-index: $z-index-header - 2;
      left: 0;
      right: 0;
      bottom: -40px;
      padding-top: 100px;
      padding-bottom: 20px;
      background-color: $header-bg-color;
      box-shadow: $box-shadow-down;
    }
    .nav-wrapper--desktop {
      display: none;
    }
    .btn-mobile-burger {
      display: block;
    }
    .mobile-burger-icon {
      width: $burger-width-mobile;
      height: $burger-height-mobile;
      fill: $header-color;
      filter: drop-shadow(2px 3px 2px rgba(0, 0, 0, 0.4)); 

      &--open {
        fill: darken($header-color, 5%);
        opacity: 0.5;
        filter: none;
      }
    }
  }

  .header-top {
    position: relative;
    z-index: $z-index-header - 1;
    display: flex;

    .page-title {
      margin-top: 0;
      margin-bottom: $title-margin;
      font-size: $title-height-mobile;
      line-height: $title-height-mobile;
    }

    .page-desc {
      display: block;
      font-weight: 300;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      font-size: $desc-height-mobile;
      line-height: $desc-height-mobile;
    }

    .header-wrapper {
      flex: 1 1 50%;
    }

    .nav-wrapper {
      flex: 2 1 50%;
      margin-top: $space-unit;
    }
  }

  /* Larger than tablet */
  @media (min-width: 750px) {
    .header-top {
      .page-title {
        font-size: $title-height;
        line-height: $title-height;
      }

      .page-desc {
        font-size: $desc-height;
        line-height: $desc-height;
      }

      .mobile-burger-icon {
        width: $burger-width;
        height: $burger-height;
      }
    }
    
    .page-header {
      .header--mobile {
        display: none;
      }
      .nav-wrapper--desktop {
        display: flex;
      }
      .btn-mobile-burger {
        display: none;
      }
    }
  }
</style>
