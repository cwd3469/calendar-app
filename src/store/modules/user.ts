import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState, AppThunk } from '..';
import { AxiosResponse } from 'axios';
import { UserLoginInfo, UserRequstData } from '@components/Sign/type';
import { fetchUserLogin, fetchUserAdmin } from '@api/user';
import { push } from 'connected-react-router';
// 초기값 타입
export interface UserState {
  readonly isLogin: boolean;
  userInfo: UserRequstData;
}

const axiosResponse: UserRequstData = {
  access_token: '',
  expires_in: 0,
  refresh_expires_in: 0,
  refresh_token: '',
  token_type: '',
  user_permissions: [],
  user_roles: [],
};

//초기값
const initialState: UserState = {
  isLogin: false,
  userInfo: axiosResponse,
};

// state 값을 외부로 호출 할때
export const selectuserLogin = (state: RootState) => state.user.isLogin;
export const selectuserInfo = (state: RootState) => state.user.userInfo;
export const location = (state: RootState) => state.router;

// state 와 action를 사용시
export const userLoginDispatch =
  (res: UserLoginInfo): AppThunk =>
  async (dispatch, getState) => {
    await fetchUserLogin(res)
      .then((res) => {
        if (res.data.code === 'SUCCESS') {
          localStorage.setItem('userInfo', JSON.stringify(res.data));
          localStorage.setItem('isLogin', JSON.stringify(true));
          dispatch(push('/'));
          dispatch(userLogin());
          dispatch(userInfoSave(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const userAdminDispatch = (): AppThunk => async (dispatch, getState) => {
  const login = selectuserLogin(getState());
  const userData = selectuserInfo(getState());
  const token: string = `${userData.token_type} ${userData.access_token}`;
  const role: string = userData.user_roles[0];
  if (login === true) {
    if (role === 'ADMIN') {
      await fetchUserAdmin(token)
        .then((res: AxiosResponse) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('어드민이 아닙니다.');
    }
  }
};

// 비동기 처리 reducer state 값을 변경 할때
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state) => {
      state.isLogin = true;
    },
    userLogout: (state) => {
      state.isLogin = false;
    },
    userInfoSave: (state, action: PayloadAction<UserRequstData>) => {
      state.userInfo = action.payload;
      state.isLogin = true;
    },
  },
  extraReducers: (builder) => {},
});

// 리듀서만 외부로 호출 할때
export const { userLogin, userLogout, userInfoSave } = userSlice.actions;

// configureStore에 reducer륿 병합 할때
export default userSlice.reducer;
