<template>
<section class="component__container component__result">
  <div class="result-icon result-success-icon"></div>
  <p class="result-desc">恭喜您，投资成功！</p>
  <ul class="result-lists">
    <li class="result-item">
      <span class="result-tit">出借本金</span>
      <span class="result-cont"><b class="mark">90.00</b>元</span>
    </li>
    <li class="result-item">
      <span class="result-tit">往期年化收益</span>
      <span class="result-cont">10.00元</span>
    </li>
    <li class="result-item">
      <span class="result-tit">优惠券预期奖励</span>
      <span class="result-cont">90.00元</span>
    </li>
    <li class="result-item border-1px">
      <span class="result-tit">往期年化收益</span>
      <span class="result-cont">90.00元</span>
    </li>
    <li class="result-item">
      <span class="result-tit">垫付利息</span>
      <span class="result-cont">90.00元</span>
    </li>
    <li class="result-item">
      <span class="result-tit">优惠券预期奖励</span>
      <span class="result-cont">90.00元</span>
    </li>
    <li class="result-item">
      <span class="result-tit">到期时间</span>
      <span class="result-cont">{{ 20 }}元</span>
    </li>
  </ul>
  <template v-if="is_open_balance">
    <div class="balance-info-wrapper">
      <h4 class="balance-tit">您已开启了余额自动复投功能，设置规则如下：</h4>
      <ul class="balance-lists">
        <li class="balance-item">
          <span class="tit">账户保留金额：</span>
          <span class="cont">0元</span>
        </li>
        <li class="balance-item">
          <span class="tit">项目期限区间：</span>
          <span class="cont">7~12个月</span>
        </li>
        <li class="balance-item">
          <span class="tit">往期年化收益率：</span>
          <span class="cont">9%</span>
        </li>
      </ul>
    </div>
  </template>
  <template v-else>
    <div class="balance-open-wrapper">
      <div class="tips-open">
        <div class="tips-desc">
          <h4 class="tit">余额自动复投</h4>
          <p class="text">避免资金站岗&nbsp;&nbsp;提高投资效率神器！</p>
        </div>
        <div class="tips-btn">
          <a class="link-btn" href="javascript:;">去开启</a>
        </div>
      </div>
    </div>
  </template>
  <div class="btn-wrapper">
    <a class="btn primary-btn mr" href="javascript:;">继续投资</a>
    <a class="btn default-btn" href="javascript:;">查看资产</a>
  </div>
</section>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'invest_result',
  props: {
    is_open_balance: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
$baseUrl: '../../assets/images/';

.component__result {
  padding: 88px 32px;
}

.result-icon {
  margin: 0 auto;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 92px 92px;
  &.result-success-icon {
    background-image: url("#{$baseUrl}result_icon.png");
  }
}

.result-desc {
  margin-top: 41px;
  margin-bottom: 52px;
  text-align: center;
  line-height: 50px;
  font-size: 42px;
}

.result-item {
  display: flex;
  justify-content: space-between;
  height: 80px;
  line-height: 80px;
  .result-tit {
    font-size: 28px;
    color: #777;
  }
  .result-cont {
    font-size: 28px;
    color: #000;
    .mark {
      color: #fc6602;
    }
  }
}

.balance-info-wrapper {
  margin-top: 36px;
  padding: 17px 30px 0;
  border-radius: 6px;
  background-color: #fbfbfb;
  .balance-tit {
    line-height: 34px;
    font-size: 24px;
    color: #666;
  }
  .balance-item {
    display: flex;
    justify-content: space-between;
    line-height: 70px;
    span {
      font-size: 24px;
      color: #777;
    }
  }
}

.balance-open-wrapper {
  margin-top: 40px;
  padding: 34px;
  border-radius: 6px;
  border: 1px solid #e5e5e5;
  .tips-open {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tit {
      margin-bottom: 4px;
      line-height: 50px;
      font-size: 36px;
      color: #f60;
    }
    .text {
      line-height: 37px;
      font-size: 26px;
      color: #000;
    }
    .link-btn {
      padding: 14px 35px;
      border-radius: 48px;
      box-shadow: 0 6px 16px rgba(255,200,35,0.2);
      font-size: 26px;
      color: #fff;
      background-color: #ffc823;
    }
  }
}

.btn-wrapper {
  display: flex;
  margin-top: 60px;
  .btn {
    flex: 1;
    border-radius: 6px;
    line-height: 88px;
    text-align: center;
    font-size: 34px;
    &.mr {
      margin-right: 18px;
    }
    &.primary-btn {
      background-color: #f60;
      border: 2px solid #f60;
      color: #fff;
    }
    &.default-btn {
      border: 2px solid #e5e5e5;
      color: #f60;
    }
  }
}

@svg square {
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 100%;
  }
}

@svg 1px-border {
  height: 2px;
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 50%;
  }
}

.border-1px {
  border-top: 1px solid transparent;
  border-image: svg(1px-border param(--color #ccc)) 2 2 stretch;
}

.border-1px {
  // background: white svg(square param(--color #ccc));
}
</style>
