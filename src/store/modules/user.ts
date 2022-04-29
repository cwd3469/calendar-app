import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState, AppThunk } from '../store';

// 초기값 타입
export interface CounterState {
  readonly isLogin: boolean;
}

//초기값
const initialState: CounterState = {
  isLogin: false,
};

//값이 어떻게 update될 지 정의한 reducer 함수들(reducer)

export const incrementAsync = createAsyncThunk(
  // string action type value: 이 값에 따라 pending, fulfilled, rejected가 붙은 액션 타입이 생성된다.
  'userSignin/fetchLogin',
  async (amount: number) => {}
);

// 비동기 처리 action
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    isLogin: (state) => {
      state.isLogin = true;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },
});

export const { isLogin } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default counterSlice.reducer;
