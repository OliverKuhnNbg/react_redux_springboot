import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDoList: []
}

export const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState,
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
      addEntry: (state, action) => {
        console.log(action)
        state.value = state.value
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addEntry } = toDoListSlice.actions
  
  /** export full reducer */
  export default toDoListSlice.reducer