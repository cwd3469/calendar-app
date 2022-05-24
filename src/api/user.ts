import instance from '.';

export const fetchUserLogin = () => {
  return instance({
    method: 'post',
    url: '/users/signin',
  });
};
