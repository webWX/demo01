<template>
  <section class="page__container page__account_result">
    <div class="page-content">
      <div class="result-icon"></div>
      <p class="result-text">恭喜您，银行存管开户成功！</p>
      <p class="protocol-text">开启授权即表示同意<a class="protocol-link" href="javascript:;">《出借授权协议》</a></p>
      <div class="btn-wrapper">
        <mt-button class="primary-btn">开启出借授权</mt-button>
        <router-link class="default-btn" :to="{name: 'waiting'}">暂不开启，进入我的账户中心</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);

export default {
  name: 'account_result'
};
</script>

<style scoped lang="scss">
$baseUrl: '../../assets/images/';

.page-content {
  padding: 150px 32px 0 32px;
}

.result-icon {
  margin: 0 auto 40px;
  width: 94px;
  height: 94px;
  border-radius: 50%;
  background: url("#{$baseUrl}result_icon.png") no-repeat center;
  background-size: 94px 94px;
}

.result-text {
  font-size: 32px;
  text-align: center;
  color: #333;
}

.protocol-text {
  margin-top: 150px;
  margin-bottom: 21px;
  font-size: 24px;
  color: #909090;
  .protocol-link {
    color: #ff6700;
  }
}

.primary-btn {
  display: block;
  width: 100%;
  height: 88px;
  line-height: 88px;
  border-radius: 6px;
  background-color: #f60;
  text-align: center;
  font-size: 32px;
  color: #fff;
}

.default-btn {
  display: block;
  margin-top: 21px;
  text-align: center;
  font-size: 24px;
  line-height: 38px;
  color: #909090;
}
</style>
