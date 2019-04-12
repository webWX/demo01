import * as Cookies from 'js-cookie';

let platform = Cookies.get('platform');
let token = Cookies.get('token');

const state = {
  platform,
  token,
  isToken: false,
  userInfo: null
};

export default state;
