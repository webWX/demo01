<template>
  <section class="form form__register">
    <v-header class="header--standard" :titleName="titleName"></v-header>
    <div class="form__logo">
      <img src="./logo.png" alt="logo" class="img-logo">
    </div>
    <form class="form__container">
      <div class="form__row border-1px input--tel">
        <i class="form__icon"></i>
        <input type="number" class="form__input" v-model="userTel" placeholder="请输入手机号码">
        <div class="tel__container" v-show="userTel">{{ userTel }}</div>
      </div>
      <div class="form__row border-1px">
        <i class="form__icon"></i>
        <input type="number" class="form__input" placeholder="请输入图形验证码">
        <img class="img-code" src="https://dolabank-apk.oss-cn-shenzhen.aliyuncs.com/dolabank/uploads/captcha/1556618384.1932.jpg" alt="">
      </div>
      <div class="form__row border-1px">
        <i class="form__icon"></i>
        <input type="number" class="form__input" placeholder="请输入验证码">
        <button class="button button--text border-1px" @click.prevent="getCode">获取验证码</button>
      </div>
      <div class="form__row border-1px">
        <i class="form__icon"></i>
        <input type="text" class="form__input" placeholder="请设置登录密码">
      </div>
      <div class="recommend__container">
        <div class="form__row border-1px" :class="{'recommend__block': isVisibility}">
          <i class="form__icon"></i>
          <input type="number" class="form__input" placeholder="推荐人手机号（选填）">
        </div>
        <button class="recommend-btn" @click.prevent="_toggleRecommendTel">推荐人手机号</button>
      </div>
      <div class="protocol__container">
        <i class="protocol__icon"></i>
        <p class="protocol__text">我已阅读并同意<a class="protocol--link" href="javascript:;">《注册服务协议》</a>、<a class="protocol--link" href="javascript:;">《投资与咨询服务协议》</a>和<a class="protocol--link" href="javascript:;">《风险提示书》</a></p>
      </div>
      <div class="form-btn__container">
        <input type="submit" value="立即注册" class="form__submit">
      </div>
      <div class="form-btn__container">
        <p class="form__sub_info">已有账号？<a class="link--login" href="javascript:;">立即登录</a></p>
      </div>
    </form>
  </section>
</template>

<script>
import Header from '@/components/Header/Header';

export default {
  name: 'Register',
  data() {
    return {
      titleName: '注册',
      userTel: '',
      isVisibility: true
    };
  },
  methods: {
    _toggleRecommendTel() {
      this.isVisibility = !this.isVisibility;
    },
    getCode() {
      this.$store.dispatch('form', {
        mobile: this.userTel,
        transaction_type: 'register',
        captcha_mode: '',
        captcha_name: ''
      });
    }
  },
  components: {
    'v-header': Header
  }
};
</script>

<style lang="scss" scoped>
@svg 1px-border {
  height: 2px;
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 50%;
  }
}

.border-1px {
  border-bottom: 1px solid transparent;
  border-image: svg(1px-border param(--color #e5e5e5)) 2 2 stretch;
}

.form {
  padding-top: 88px;
}
.form__logo {
  padding: 90px 0;
  text-align: center;
  .img-logo {
    width: 166px;
    height: 166px;
    box-shadow: 0 3px 13px 0 rgba(0, 0, 0, 0.07);
  }
}
.form__container {
  padding: 0 32px;
  .form__row {
    display: flex;
    align-items: center;
    height: 114px;
  }
  .form__icon {
    flex: 0 0 48px;
    height: 100%;
  }
  .form__input {
    flex: 1;
    border: none;
    background: none;
    height: 40px;
    line-height: 40px;
    font-size: 30px;
    color: #333;
  }
  .input--tel {
    position: relative;
    .tel__container {
      position: absolute;
      right: 0;
      bottom: -120px;
      left: 0;
      text-align: center;
      height: 100px;
      line-height: 100px;
      font-size: 44px;
      color: #333333;
      background: #EBF4FF;
      border-radius: 10px;
      &:after {
        content: "";
        position: absolute;
        z-index: -100;
        display: block;
        width: 16px;
        height: 16px;
        background: #EBF4FF;
        left: 50%;
        top: -8px;
        transform: translateX(-50%) rotate(45deg);
      }
    }
  }
}
.img-code {
  width: 280px;
  height: 80px;
}
.button--text {
  display: inline-block;
  padding: 14px 8px;
  font-size: 30px;
  border-radius: 10px;
  color: #f60;
  border: 1px solid #f60;
}

.protocol__container {
  display: flex;
  margin-top: 30px;
}
.protocol__icon {
  flex: 0 0 42px;
  height: 42px;
}
.protocol__text {
  line-height: 42px;
  font-size: 26px;
  color: #666;
}
.protocol--link {
  color: #ff6600;
}
.form-btn__container {
  margin-top: 20px;
}
.form__submit {
  display: block;
  width: 100%;
  height: 98px;
  line-height: 98px;
  text-align: center;
  font-size: 34px;
  color: #ffffff;
  background: linear-gradient(265deg,rgba(255,104,2,1) 0%,rgba(255,152,50,1) 100%);
  border-radius: 10px;
  border: none;
}

.form__sub_info {
  text-align: center;
  font-size: 26px;
  line-height: 42px;
  color: #666666;
  .link--login {
    color: #ff6600;
  }
}

.recommend__container {
  position: relative;
  .recommend__block {
    visibility: hidden;
  }
  .recommend-btn {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    font-size: 26px;
    color: #666666;
  }
}

</style>
