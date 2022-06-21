import { configureStore } from '@reduxjs/toolkit';
import playerPositionsSlice from './player-positions-slice';

const store = configureStore({
    reducer: { playerPositions: playerPositionsSlice.reducer }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;