import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDoList: [],
  task : {
      title: '',
      task: ''
  }
}

export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      console.log('test Slicer call')
      console.log(action.payload);
      state.task = action.payload;
      if(state.task.title !== '' & state.task.task !== '') {
          console.log('no empty fields found')
          //state.toDoList = state.toDoList.push(state.task)
          let list = state.toDoList;
          list.push(state.task);
          state.toDoList = list;
      }
    }
  },
})
  
  // Action creators are generated for each case reducer function
  export const { addEntry } = toDoListSlice.actions
  
  /** export full reducer */
  export default toDoListSlice.reducer