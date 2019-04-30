import { MessageBox } from 'mint-ui';
import store from '@/store';

/**
 * 开通存管提示弹窗
 **/
export const openDepositoryLayer = () => {
  let msg = `
              <div class="base-layer-wrapper">
                <h3 class="title">开通银行存管账户</h3>
                <p class="text">请开通存管账户</p>
                <p class="description">银行存管账户用于对用户资金进行独立管理与监督，平台无法触碰，实现平台资金与用户资金隔离。</p>
              </div>
            `;

  return new Promise((resolve, reject) => {
    MessageBox({
      title: '',
      message: msg,
      showCancelButton: true,
      confirmButtonText: '立即开通',
      cancelButtonText: '暂不开通',
      confirmButtonClass: 'confirm-layer-btn',
      cancelButtonClass: 'cancel-layer-btn',
      closeOnClickModal: false
    }).then(action => {
      if (action === 'confirm') {
        store.commit('ADD', {
          count: 10
        });
        resolve();
      }
    });
  });
};
