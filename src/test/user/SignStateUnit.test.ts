import { store } from '@store/index';
import reducer, { userLogin, userLogout, UserState } from '@store/modules/user';
import { render } from '@testing-library/react';

describe('상태관리 단위 테스트', () => {
  test('Login 상태 확인', () => {
    let state = store.getState().user;
    const isLogin: boolean = state.isLogin;
    expect(isLogin).toBeFalsy();
  });
  test('userLogin action 상태 변경 확인 ', () => {
    store.dispatch(userLogin());
    let state = store.getState().user;
    const lsLoging: boolean = state.isLogin;
    expect(lsLoging).toBeTruthy();
  });
  test('userLogout action 상태 변경 확인 ', () => {
    store.dispatch(userLogout());
    let state = store.getState().user;
    const lsLoging: boolean = state.isLogin;
    expect(lsLoging).toBeFalsy();
  });
});
