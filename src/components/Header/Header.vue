<template>
  <mt-header class="page__header" fixed title="开户"></mt-header>
</template>

<script>
import Vue from 'vue';
import {
  Header
} from 'mint-ui';

Vue.component(Header.name, Header);

export default {
  name: 'v_header'
};
</script>

<style scoped lang="scss">
.page__header {
  height: 88px;
  line-height: 88px;
  font-size: 34px;
  background-color: #fff;
  color: #000;
}
</style>
