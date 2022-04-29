import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState, AppThunk } from '../store';
import { fetchCount } from '@components/Counter/counterAPI';

// 초기값 타입
export interface CounterState {
  readonly value: number;
  readonly status: 'idle' | 'loading' | 'failed';
}

//초기값
const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

//값이 어떻게 update될 지 정의한 reducer 함수들(reducer)

export const incrementAsync = createAsyncThunk(
  // string action type value: 이 값에 따라 pending, fulfilled, rejected가 붙은 액션 타입이 생성된다.
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

// 비동기 처리 action
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

export default counterSlice.reducer;
