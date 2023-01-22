import { configureStore } from '@reduxjs/toolkit';
import positionsSlice from './positions-slice';

const store = configureStore({
    reducer: {
        positions: positionsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;