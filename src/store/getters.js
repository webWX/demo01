const IOS = 'ios';
const ANDROID = 'android';
const WECHAT = 'wechat';

const getters = {
  /*
   * 平台是否是app
   */
  isApp(state) {
    let platform = state.platform;

    return platform === IOS || platform === ANDROID;
  },
  /*
   * 平台是否是wechat
   */
  isWechat(state) {
    let platform = state.platform;

    return platform === WECHAT;
  }
};

export default getters;
