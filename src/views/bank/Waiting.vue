<template>
  <section class="page__container">
    <div class="page__wrapper">
      <div class="page__content">
        <div class="spinner-box">
          <div class="circle-border">
            <div class="circle-core"></div>
          </div>
          <div class="waiting-time"><b>{{ num }}</b>秒</div>
        </div>
        <p class="wait-text">请耐心等待，多啦聚财正在为您加急处理。</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'waiting',
  data() {
    return {
      num: 10
    };
  }
};
</script>

<style scoped lang="scss">
//   .page__wrapper {
//     padding-top: 88px;
//   }

  .page__content {
    padding-top: 340px;
  }

  .wait-text {
    margin-top: 37px;
    text-align: center;
    line-height: 38px;
    font-size: 24px;
    color: #909090;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .spinner-box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  .circle-border {
    box-sizing: border-box;
    width: 152px;
    height: 152px;
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: rgb(18, 151, 242);
    background: linear-gradient(0deg, rgba(18, 151, 242, 0.1) 33%, rgba(18, 151, 242, 1) 100%);
    animation: spin .8s linear 0s infinite;
  }

  .circle-core {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .waiting-time {
    position: absolute;
    font-weight: bold;
    font-size: 30px;
    color: #111;

    b {
      font-weight: 400;
      font-size: 48px;
    }
  }
</style>
