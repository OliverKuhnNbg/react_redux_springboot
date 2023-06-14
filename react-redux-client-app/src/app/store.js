import {configureStore} from '@reduxjs/toolkit';

/** reducer imports */
import counterReducer from '../features/counter/counterSlice'
import toDoListReducer from '../features/todolist/toDoListSlicer';

export const store = configureStore({
    reducer: {
        counterReducer: counterReducer,
        toDoListReducer: toDoListReducer
    }
})