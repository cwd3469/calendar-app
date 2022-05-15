import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchOrderData, fetchOrderExcel } from '@api/order';
import type { RootState, AppThunk } from '..';
import { Ordertype } from '@components/Order/type';
// 초기값 타입

export interface UserState {
  orderList: Ordertype[];
}

//state
const initialState: UserState = {
  orderList: [],
};

//action

//미들웨이
export const orderDataGetData = (): AppThunk => async (dispatch, getState) => {
  const { isLogin, userInfo } = getState().user;
  const token: string = `${userInfo.token_type} ${userInfo.access_token}`;
  if (isLogin) {
    await fetchOrderData(token)
      .then((res) => {
        dispatch(orderDataGet(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

// 비동기 처리 reducer state 값을 변경 할때
export const orderSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    orderDataGet: (state, action: PayloadAction<Ordertype[]>) => {
      state.orderList = action.payload;
    },
  },
});

// 리듀서만 외부로 호출 할때
export const { orderDataGet } = orderSlice.actions;

// configureStore에 reducer륿 병합 할때
export default orderSlice.reducer;
