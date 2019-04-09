<template>
  <section class="product product--standard-detail">
    <v-header class="header--standard" :titleName="titleName" v-if="!$store.state.isApp"></v-header>
    <div class="detail__container" :class="{'is-app': $store.state.isApp}">
      <div class="product-info-wrapper"></div>
      <div class="produc-sub-info-wrapper">
        <div class="sub-item">
          <span class="sub-tit">计息方式</span>
          <span class="sub-content">满标计息</span>
        </div>
        <div class="sub-item">
          <span class="sub-tit">债权转让</span>
          <span class="sub-content">投资满30天，可申请转让</span>
        </div>
      </div>
      <form class="product-form">
        <div class="product-input-wrapper">
          <div class="input-item border-bottom-1px">
            <div class="input-tit">可用余额</div>
            <div class="input-content">
              <span class="cont-text">9,9306.23元</span>
              <a href="javascript:;" class="btn-primary">充值</a>
            </div>
          </div>
          <div class="input-container border-bottom-1px">
            <div class="input-tit">出借金额</div>
            <div class="input-row">
              <div class="input-block">
                <input type="number" class="input" placeholder="100元起">
              </div>
              <a href="javascript:;" class="btn-primary">最大金额</a>
              <div class="tooltip--container">
                <div class="tooltip--text">往期年化收益：100.00元</div>
                <div class="tooltip--tip"></div>
              </div>
            </div>
          </div>
          <div class="input-item">
            <div class="input-tit">使用优惠券</div>
            <div class="input-content">
              <span class="desc-text">无可用<i class="icon-arrow"></i></span>
            </div>
          </div>
        </div>
        <div class="protocol-cotainer">
          <div class="protocol-wrapper">
            <div class="protocol-icon"></div>
            <p class="protocol-text">我已阅读并同意签署<a href="javascript:;" class="protocol-link">《投资授权协议》</a>，授权平台功能为您进行余
额自动复投，项目期限区间为直投散标的项目期限（12个月）</p>
          </div>
          <div class="protocol-wrapper">
            <div class="protocol-icon"></div>
            <p class="protocol-text">我已阅读并同意签署<a href="javascript:;" class="protocol-link">《投资授权协议》</a></p>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Header from '@/components/Header/Header';
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('product');

export default {
  name: 'standard_detail',
  data() {
    return {
      titleName: '项目详情'
    };
  },
  computed: {
    _id() {
      return this.$route.params.id;
    }
  },
  methods: {
    ...mapActions(['getStandardDetail'])
  },
  created() {
    console.log(this.$route);
    // this.getStandardDetail({
    // loan_id: this._id
    // });
  },
  components: {
    'v-header': Header
  }
};
</script>

<style scoped lang="scss">
  $ff802a: #ff802a;
  $fff: #fff;

  .product {
    height: 100vh;
    background-color: #f5f5f5;
    .header--standard {
      background-color: $ff802a;
      color: $fff;
    }
    .detail__container {
      padding-top: 88px;
    }
    .product-info-wrapper {
      height: 322px;
      background-color: $ff802a;
    }
    .produc-sub-info-wrapper {
      margin-bottom: 20px;
      padding: 41px 32px 0;
      background-color: $fff;
      .sub-item {
        display: flex;
        height: 68px;
        line-height: 68px;
        .sub-tit {
          box-sizing: border-box;
          flex: 0 0 137px;
          width: 137px;
          padding-left: 12px;
          font-size: 24px;
          color: #757575;
        }
        .sub-content {
          flex: 1;
          font-size: 24px;
          color: #333;
        }
      }
    }
    .product-input-wrapper {
      padding-left: 32px;
      background-color: $fff;
      .input-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 32px;
        height: 89px;
        line-height: 89px;
        .input-content {
          .cont-text {
            margin-right: 22px;
            font-size: 28px;
            color: #141414;
          }
          .desc-text {
            font-size: 28px;
            color: #999;
            .icon-arrow {
              display: inline-block;
              vertical-align: top;
              margin-top: calc((89px-48px)/2);
              margin-left: 8px;
              width: 48px;
              height: 48px;
              background: red;
            }
          }
        }
      }
      .input-container {
        position: relative;
        padding-top: 66px;
        .input-tit {
          position: absolute;
          top: 24px;
          left: 2px;
        }
        .input-row {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 32px;
          height: 140px;
          .input-block {
            flex: 1;
            color: #343434;
            .input {
              width: 100%;
              font-size: 54px;
              border: 0;
            }
          }
          .btn-primary {
            flex: 0 0 146px;
            width: 146px;
            text-align: right;
          }
        }
      }
      .input-tit {
        font-size: 28px;
        color: #141414;
      }
      .btn-primary {
        font-size: 26px;
        color: #f60;
      }
    }
    .protocol-cotainer {
      padding: 28px 32px;
    }
    .protocol-wrapper {
      display: flex;
      padding-left: 13px;
      &:not(&:last-child) {
        margin-bottom: 32px;
      }
      .protocol-icon {
        flex: 0 0 32px;
        width: 32px;
        height: 32px;
        background: red;
      }
      .protocol-text {
        flex: 1;
        padding-left: 15px;
        line-height: 32px;
        font-size: 22px;
        color: #666;
        .protocol-link {
          color: #f60;
        }
      }
    }
    .tooltip--container {
      position: absolute;
      z-index: 0;
      top: -37px;
      right: 32px;
    }
    .tooltip--text {
      background: #f5f5f5;
      padding: 10px 16px;
      text-align: center;
      font-size: 24px;
      color: #666;
    }
    .tooltip--tip {
      position: absolute;
      z-index: -100;
      display: block;
      width: 30px;
      height: 30px;
      background: #f5f5f5;
      left: 60px;
      bottom: -0.5rem;
      transform: translateX(-50%) rotate(45deg);
    }
  }
</style>
