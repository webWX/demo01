<template>
  <mt-header class="page__header" fixed :title="titleName">
    <router-link to="/" slot="left" v-if="isShowBackBtn">
      <mt-button icon="back" class="header__btn header__btn--icon"></mt-button>
    </router-link>
    <mt-button slot="right" class="header__btn header__btn--text">规则</mt-button>
  </mt-header>
</template>

<script>
import Vue from 'vue';
import {
  Header,
  Button
} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
// Vue.use(Header);

export default {
  name: 'v_header',
  props: {
    isShowBackBtn: {
      type: Boolean,
      default: true
    },
    titleName: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
  .page__header {
    padding: 0 28px 0 28px;
    height: 88px;
    line-height: 88px;
    font-size: 34px;
    background-color: #fff;
    color: #000;
  }
</style>
