import { $http } from './index';

export const appIndex = () => $http({
  url: 'v2/app/appindex'
});

export const tokenCheck = () => $http({
  url: 'v1/user/token_check',
  notShowLoading: true
});

export const standardDetail = params => $http({
  url: 'v1/loan/detail',
  params
});
