import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import phoneReducer from '../../features/slices/phoneSlice';

export const Store = configureStore({
  reducer: {
    caller: phoneReducer,
  },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
