import instance from '.';
import { UserLoginInfo } from '@components/Sign/type';

export const fetchUserLogin = (userData: UserLoginInfo) => {
  return instance({
    method: 'post',
    url: '/users/signin',
    data: userData,
  });
};

export const fetchUserAdmin = (token: string) => {
  return instance({
    method: 'get',
    url: '/test/admin',
    headers: {
      Authorization: token,
    },
  });
};
