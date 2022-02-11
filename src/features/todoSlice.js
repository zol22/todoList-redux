import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state,action) => {
      const newTask = {
        id: JSON.stringify(new Date()),
        name: action.payload.task,
        completed: false
      }
     return [...state, newTask] // push this object to the state (array)  ,  state.push(newTask)
    },
    removeTodo: (state,action) => {
      return state.filter((item) => item.id !== action.payload.id); // return all the items that doesnt match with the given id as payload
    },
    setTodoStatus: (state,action) => {
       state.forEach((item) => { // Dont need map or filter because doesnt return anything, just compares
          if (item.id === action.payload.id) {
            item.completed = action.payload.completed //
          }
        })
    }, 
    setUpdate: (state,action) => {
      state.forEach((item) => { // Dont need map or filter because doesnt return anything, just compares
        if (item.id === action.payload.id) {
           item.name = action.payload.task;
        }
      })
    }
  },
});

export const { addTodo,removeTodo,setTodoStatus, setUpdate } = todoSlice.actions;

export const selectTodos = (state) => state.todos;

export default todoSlice.reducer;
