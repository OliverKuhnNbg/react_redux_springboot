import {configureStore} from '@reduxjs/toolkit';

/** reducer imports */
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counterReducer: counterReducer
    }
})