import * as Cookies from 'js-cookie';

let platform = Cookies.get('platform');
let token = Cookies.get('token');
let mobile = Cookies.get('mobile');

const state = {
  platform,
  token,
  mobile,
  isToken: false,
  userInfo: null
};

export default state;
